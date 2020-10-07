import * as actionTypes from "../actions/actionTypes";

const initialState = {
    post: {
        list: []
    },
    modal: {
        modalType: null,
        modalProps: {
            open: false
        }
    }
};

const post = (state = initialState.post, action) => {
    switch (action.type) {
        case actionTypes.SET_POSTS:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
}

const modal = (state = initialState.modal, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case actionTypes.HIDE_MODAL:
            return initialState.modal
        default:
            return state
    }
}

export default { post, modal };