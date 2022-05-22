import {all, takeEvery} from "redux-saga/effects";
import {createPost} from "./workers";
import {CREATE_POST} from "../types";

export function* watchCreatePost() {
    yield takeEvery(CREATE_POST, createPost)
}

export function* watchPosts() {
    yield all([call(watchCreatePost)])
}
