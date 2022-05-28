import {put} from "redux-saga/effects";

import {uiAction} from "../../../ui/actions";
import {authAction} from "../../../auth/actions";


export function* signup({payload: userInfo}) {
    try {
        yield put(uiAction.startFetching())
        yield put(authAction.authenticate())
    } catch (error) {
        yield put(uiAction.emitError(error, 'signup worker'))
    } finally {
        yield put(uiAction.startFetching())
    }
}
