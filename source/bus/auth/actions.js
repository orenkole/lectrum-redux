import {types} from "./types";

export const authAction = {
    authenticate: () => ({
        type: types.AUTHENTICATE
    }),
    signupAsync: (userData) => ({
        type: types.SIGNUP_ASYNC,
        payload: userData
    }),
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC
        }
    }
}
