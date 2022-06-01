import {socket} from "../../init/socket";
import {uiAction} from "../ui/actions";

export const socketActions = {
    listenConnection: () => dispatch => {
        socket.on('connect', () => {
            dispatch(uiAction.setOnlineState());
        });
        socket.on('disconnect', () => {
            dispatch(uiAction.setOfflineState());
        })
    }
}
