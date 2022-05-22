import {fromJS, List} from "immutable";

import {types} from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch(action.payload) {
        case types.FILL_POSTS:
            return fromJS(action.payload)

        default:
            return state;
    }
}
