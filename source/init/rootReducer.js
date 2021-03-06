import {combineReducers} from "redux";
import {routerReducer as router} from "react-router-redux";
import {postsReducer as posts} from "../bus/posts/reducer";
import {uiReducer as ui} from "../bus/ui/reducer";
import {authReducer as auth} from "../bus/auth/reducer";
import {profileReducer as profile} from "../bus/profile/reducer";
import {usersReducer} from "../bus/users/reducer";

export const rootReducer = combineReducers({
    posts,
    ui,
    auth,
    profile,
    router,
    usersReducer,
})
