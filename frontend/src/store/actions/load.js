import * as actionTypes from "./actionTypes";

export const isLoading = (payload) => {
    return {
        type: actionTypes.SET_LOADING,
        payload
    }
}