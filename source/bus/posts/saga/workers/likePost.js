import {apply, put, select} from "redux-saga/effects";

import {uiAction} from "../../../ui/actions";
import {api} from "../../../../REST";
import {postsActions} from "../../actions";


export function* likePost({payload: postId}) {
    try {
        yield put(uiAction.startFetching())
        const response = yield apply(api, api.posts.like, [postId])
        if (response.status !== 204) {
            const {message} = yield apply(response, response.json);
            throw new Error(message);
        }
        const liker = yield select((state) => {
            return state.profile.removeAll(['avatar', 'token']);
        })
        yield put(postsActions.likePost({liker, postId}))
     } catch (error) {
        yield put(uiAction.emitError(error, 'likePost worker'))
    } finally {
        yield put(uiAction.startFetching())
    }
}
