import {types} from "./types";

export const uiAction = {
    startFetching: () => ({
        type: types.START_FETCHING
    }),
    stopFetching: () => ({
        type: types.STOP_FETCHING
    }),
    emitError: (error, meta = null) => {
        return {
            type: types.EMIT_ERROR,
            payload: error,
            meta,
        }
    }
}
