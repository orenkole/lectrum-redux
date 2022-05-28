import {apply, put} from "redux-saga/effects";
import {uiAction} from "../../../ui/actions";
import {authAction} from "../../actions";
import {api} from "../../../../REST";
import {profileActions} from "../../../profile/actions";


export function* signup({payload: userInfo}) {
    try {
        yield put(uiAction.startFetching());
        const response = yield apply(api, api.auth.signup, [userInfo])
        const {data: profile, message} = yield apply(response, response.json);
        if (response.status !== 200) {
            throw new Error(message);
        }
        console.log({profile})
        yield put(profileActions.fillProfile(profile))
        yield put(authAction.authenticate())
    } catch(error) {
        yield put(uiAction.emitError(error, 'signup workder'))
    } finally {
        yield put(uiAction.startFetching())
    }
}
