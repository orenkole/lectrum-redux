import {socket} from "../../init/socket";
import {uiAction} from "../ui/actions";
import {postsActions} from "../posts/actions";

export const socketActions = {
    listenConnection: () => dispatch => {
        socket.on('connect', () => {
            dispatch(uiAction.setOnlineState());
        });
        socket.on('disconnect', () => {
            dispatch(uiAction.setOfflineState());
        })
    },
    listenPosts: () => dispatch => {
        socket.on('create', (event) => {
            const {data: post} = JSON.parse(event);
            dispatch(postsActions.createPost(post))
        })
    }
}
