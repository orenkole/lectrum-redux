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
    listenPosts: () => (dispatch, getState) => {
        socket.on('create', (event) => {
            const {data: post} = JSON.parse(event);
            dispatch(postsActions.createPost(post))
        });

        socket.on('like', (event) => {
            const {data, meta} = JSON.parse(event);
            if (meta.action === 'like'); {
                const liker = getState()
                    .users.find(user => user.get('id') === data?.userId);

                dispatch(
                    postsActions.likePost({
                        postId: data.postId,
                        liker
                    })
                )
            } else {
                dispatch(postsActions.unlikePost(data))
            }
        })
    },
}
