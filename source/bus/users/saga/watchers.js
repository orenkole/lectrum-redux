import {all, takeEvery} from "redux-saga/effects";
import {fetchUsers} from "./workers";

function* watchFetchUsers() {
    yield takeEvery(types.FETCH_USERS_ASYNC, fetchUsers);
}

export function* watchUsers() {
    yield all([
        call(watchFetchUsers())
    ])
}
