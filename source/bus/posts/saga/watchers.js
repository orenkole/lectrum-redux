import {takeEvery} from "redux-saga/effects";
import {createPost} from "./workers";
import {CREATE_POST_ASYNC} from "../types";

export function* watchCreatePost() {
    yield takeEvery(CREATE_POST_ASYNC, createPost)
}
