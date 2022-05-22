import {all, takeEvery} from "redux-saga/effects";
import {createPost} from "./workers";
import {types} from "../types";

export function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST, createPost)
}

export function* watchPosts() {
    yield all([call(watchCreatePost)])
}
