import {combineReducers} from "redux";
import {postsReducer as posts} from "../bus/posts/reducer";
import {uiReducer as ui} from "../bus/ui/reducer";
import {authReducer as auth} from "../bus/auth/reducer";


export const rootReducer = combineReducers({
    posts,
    ui,
    auth,
})
