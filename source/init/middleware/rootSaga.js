import {watchPosts} from "../../bus/posts/saga/watchers";
import {all, call} from "redux-saga/effects";
import {watchAuth} from "../../bus/auth/saga/watcher";
import {watchUsers} from "../../bus/users/saga/watchers";

export function* rootSaga () {
    yield all([
        call(watchPosts),
        call(watchAuth),
        call(watchUsers),
    ])
}
