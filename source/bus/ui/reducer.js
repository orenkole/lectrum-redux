import {types} from "./types";

const initialState = Map({
    isFetching: false
})

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set('isFetching', false);
        case types.EMIT_ERROR:

        default:
            return state;
    }
}
