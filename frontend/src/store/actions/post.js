import * as actionTypes from "./actionTypes";
import axios from "./_axios";

import { isNil } from "lodash";

import { isLoading } from "./load"
import { showModal, hideModal } from "./modal"

export const setPosts = (payload) => {
    return {
        type: actionTypes.SET_POSTS,
        payload
    }
}

export const setPost = (payload) => {
    return {
        type: actionTypes.SET_POST,
        payload
    }
}

export const setDelete = (payload) => {
    return {
        type: actionTypes.SET_DELETE,
        payload
    }
}

export const setSave = (payload) => {
    return {
        type: actionTypes.SET_SAVE,
        payload
    }
}

export const findPosts = () => {
    return async (dispatch) => {
        dispatch(isLoading(true));
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
        dispatch(isLoading(false));
    };
};

export const getPost = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("get-post", { 'id': id });
            if (response.status === 200 && !isNil(response.data))
                dispatch(setPost(response.data));
        } catch (e) {
            console.log('Exception getPost', e);
        }
    }
}

export const deletePost = (id, list = true) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("delete-post", { 'id': id });
            if (response.status === 200) {
                dispatch(hideModal())
                list ? dispatch(findPosts()) : dispatch(setDelete(true))
            } else {
                console.log("POST NOT DELETED: ", response);
            }
        } catch (e) {
            console.log('Exception deletePost', e);

        }
    };
}

export const savePost = (values) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("save-post", values);
            if (response.status === 200 && response.data._id) {
                dispatch(setSave(true));
            } else {
                console.log("POST NOT SAVED: ", response);
            }
        } catch (e) {
            console.log('Exception savePost', e);
        }
    };
}