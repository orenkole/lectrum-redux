import {all, takeEvery} from "redux-saga/effects";
import {createPost, likePost} from "./workers";
import {types} from "../types";

export function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST, createPost)
}

export function* likePost() {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost)
}
export function* watchPosts() {
    yield all([
        call(watchCreatePost),
        call(likePost),
    ])
}
