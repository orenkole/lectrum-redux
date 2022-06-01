import {types} from "./types";
import {api} from "../../REST";

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type: types.FILL_POSTS,
            payload: posts,
        }
    },

    clearPosts: () => ({
        type: types.CLEAR_POSTS
    }),

    fetchPostsAsync: async (dispatch) => {
        dispatch({
            type: types.FETCH_POSTS_ASYNC
        })

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data))
    },
// Note: action is sync
    createPost: (comment) => ({
        type: types.CREATE_POST,
        payload: comment
    }),

    likePost: (likedPostData) => ({
        type: types.LIKE_POST,
        payload: likedPostData,
    }),

    likePostAsync: (postId) => ({
        type: types.LIKE_POST_ASYNC,
        payload: postId,
    })
}
