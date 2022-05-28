import {types} from "./types";

export const authAction = {
    authenticate: () => ({
        type: types.AUTHENTICATE
    }),
    initialize: () => ({
        type: types.INITIALIZE
    }),
    signupAsync: (userData) => ({
        type: types.SIGNUP_ASYNC,
        payload: userData
    }),
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC
        }
    },
    initializeAsync: () => ({
        type: types.INITIALIZE_ASYNC
    })
}
