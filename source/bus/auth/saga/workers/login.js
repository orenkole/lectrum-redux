import {apply, put} from "redux-saga/effects";
import {uiAction} from "../../../ui/actions";
import {profileActions} from "../../../profile/actions";
import {authAction} from "../../actions";
import {api} from "../../../../REST";

export function* login({payload: credentials}) {
    try {
        yield put(uiAction.startFetching())
        const response = yield apply(api, api.auth.login, [credentials]);
        const {data: profile, message} = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        if (credentials.remember) {
            yield apply(localStorage, localStorage.setItem, ['remember', true])
        }
        yield apply(localStorage, localStorage.setItem, ['token', profile.token])
        yield put(profileActions.fillProfile(profile))
        yield put(authAction.authenticate())
    } catch(error) {
        yield put(uiAction.emitError(error, 'login worker'))
    } finally {
        yield put(uiAction.startFetching())
    }
}
