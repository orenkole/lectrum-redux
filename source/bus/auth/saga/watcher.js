import {all, call, takeEvery} from "redux-saga/effects";
import {types} from "../types";

function* watchSignup() {
    yield takeEvery(types.SIGNUP_ASYNC, signup)
}

export function* watchAuth() {
    yield all([call(watchSignup)])
}
