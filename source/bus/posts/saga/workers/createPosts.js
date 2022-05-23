import {postsActions} from "../../actions";
import {apply, put} from "redux-saga/effects";
import {api} from "../../../../REST";
import {uiAction} from "../../../ui/actions";

export function* createPost({payload: comment}) {
    try {
        yield put(uiAction.startFetching())
        const response = yield apply(api, api.posts.create, [comment])
        const {data: post, message} = yield apply(response, response.json)
        if(response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.createPost(post));
    } catch(error) {
        yield put(uiAction.emitError(error, 'createPost worker',))
    } finally {
        yield put(uiAction.stopFetching())
    }

}
