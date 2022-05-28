import {apply, put} from "redux-saga/effects";
import {uiAction} from "../../../ui/actions";
import {profileActions} from "../../../profile/actions";
import {authAction} from "../../actions";
import {api} from "../../../../REST";

export function* initialize() {
    const token = yield apply(localStorage, localStorage.getItem, ['token'])
    const remember = yield apply(localStorage, localStorage.getItem, ['remember'])
    if (token && remember) {
        yield put(authAction.authenticateAsync());
    } else {
        yield put(authAction.initialize())
    }
}
