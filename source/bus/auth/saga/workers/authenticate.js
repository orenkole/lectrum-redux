import {apply, put} from "redux-saga/effects";
import {uiAction} from "../../../ui/actions";
import {profileActions} from "../../../profile/actions";
import {authAction} from "../../actions";
import {api} from "../../../../REST";

export function* authenticate({payload: credentials}) {
    try {
        yield put(uiAction.startFetching())
        const response = yield apply(api, api.auth.authenticate, [credentials]);
        const {data: profile, message} = yield apply(response, response.json);

        if (response.status !== 200) {
            if (response.status === 401) {
                yield apply(localStorage, localStorage.removeItem, ['token'])
                yield apply(localStorage, localStorage.removeItem, ['remember'])
                return null;
            }
            throw new Error(message);
        }
        yield apply(localStorage, localStorage.setItem, ['token', profile.token])
        yield put(profileActions.fillProfile(profile))
        yield put(authAction.authenticate())
    } catch (error) {
        yield put(uiAction.emitError(error, 'authenticate worker'))
    } finally {
        yield put(uiAction.startFetching())
        yield put(authAction.initialize())
    }
}
