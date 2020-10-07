import * as actionTypes from "./actionTypes";
import axios from "./_axios";

import { showModal, hideModal } from "./modal"

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

export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("delete-post", { 'id': id });
            if (response.status === 200) {
                dispatch(hideModal())
                dispatch(findPosts())
            } else {
                dispatch(showModal({
                    open: true,
                    title: 'Attention',
                    message: 'Post not deleted',
                    closeModal: () => hideModal()
                }, 'alert'));
            }
        } catch (e) {
            console.log('Exception deletePost', e);
            dispatch(showModal({
                open: true,
                title: 'Warning',
                message: e.toString(),
                closeModal: () => hideModal()
            }, 'alert'));
        }
    };
}