import {createPost as createPostAC} from "../../actions";
import {apply, put} from "redux-saga/effects";
import {api} from "../../../../REST";

export function* createPost({payload: comment}) {
    const response = yield apply(api, api.posts.create, [comment])
    const result = yield apply(response, response.json)

    yield put(createPostAC(result.data));
}
