import {all, call, takeEvery} from "redux-saga/effects";
import {types} from "../types";
import {authenticate, initialize, login} from "./workers";

function* watchSignup() {
    yield takeEvery(types.SIGNUP_ASYNC, signup)
}

export function* watchAuthenticate() {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate)
}

export function* watchLogin() {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchInitialize() {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize)
}

export function* watchAuth() {
    yield all([
        call(watchSignup),
        call(watchLogin),
        call(watchAuthenticate),
        call(watchInitialize),
    ])
}

