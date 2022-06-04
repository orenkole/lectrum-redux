import {api} from "../../../../REST";
import {apply, put} from "redux-saga/effects";
import {uiAction as iuAcitons} from "../../../ui/actions";
import {userActions} from "../../actions";

export function* fetchUsers() {
    try {
        yield put(iuAcitons.startFetching());
        const response = yield apply(api, api.users.fetch);
        const {data: users, message} = yield apply(response, response.json);

        if(response.status !== 200) {
            throw new Error(message);
        }

        yield put(userActions.fillUsers(user));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchUsers worker'))
    } finally {
        yield put (uiActions.stopFetching())
    }
}
