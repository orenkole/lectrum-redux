import {apply, put} from "redux-saga/effects";
import {uiAction} from "../../../ui/actions";
import {profileActions} from "../../../profile/actions";
import {authAction} from "../../actions";
import {api} from "../../../../REST";
import {postsActions} from "../../../posts/actions";

export function* logout() {
    try {
        yield put(uiAction.startFetching())
        const response = yield apply(api, api.auth.logout);
        const {data: message} = yield apply(response, response.json);

        if (response.status !== 204) {
            throw new Error(message);
        }
    } catch(error) {
        yield put(uiAction.emitError(error, 'logout worker'))
    } finally {
        yield apply(localStorage, localStorage.removeItem, ['token'])
        yield apply(localStorage, localStorage.removeItem, ['remember'])
        yield put(profileActions.clearProfile())
        yield put(postsActions.clearPosts())
        yield put(uiAction.stopFetching())
        yield put(authAction.logout())
    }
}
