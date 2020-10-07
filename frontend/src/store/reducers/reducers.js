import * as actionTypes from "../actions/actionTypes";

const initialState = {
    load: {
        isLoading: false
    },
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

const load = (state = initialState.load, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
}

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

export default { load, post, modal };