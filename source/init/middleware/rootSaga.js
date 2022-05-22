import {watchPosts} from "../../bus/posts/saga/watchers";
import {all, call} from "redux-saga/effects";

export function* rootSaga () {
    yield all([
        call(watchPosts)
    ])
}
