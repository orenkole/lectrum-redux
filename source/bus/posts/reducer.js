import {fromJS, List} from "immutable";

import {types} from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch(action.payload) {
        case types.FILL_POSTS:
            return fromJS(action.payload)
        case types.CLEAR_POSTS:
            return state.clear();
        case types.LIKE_POST:
            return state.updateIn(
        [
                    state.findIndex((post) => post.get('id') === action.payload.postId),
                    'likes',
                ],
        (likes) => likes.unshift(action.payload.liker)
            )
        default:
            return state;
    }
}
