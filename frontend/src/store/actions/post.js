import * as actionTypes from "./actionTypes";
import axios from "./_axios";

export const setPosts = (payload) => {
    return {
        type: actionTypes.SET_POSTS,
        payload
    }
}

export const findPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("post");
            if (response.status === 200 && response.data.length > 0)
                dispatch(setPosts(response.data));
            else
                dispatch(setPosts([]));
        } catch (e) {
            console.log('Exception findPosts', e);
            dispatch(setPosts([]));
        }
    };
};
