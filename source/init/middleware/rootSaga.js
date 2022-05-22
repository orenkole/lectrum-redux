import {watchCreatePost} from "../../bus/posts/saga/watchers";

export function* rootSaga () {
    yield watchCreatePost()
}
