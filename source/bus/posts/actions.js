import {CREATE_POST, FETCH_POSTS_ASYNC, FILL_POSTS} from "./types";
import {api} from "../../REST";

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    }
}

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC
    })

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data))
}

// Note: action is sync
export const createPost = (comment) => ({
    type: CREATE_POST,
    payload: comment
})
