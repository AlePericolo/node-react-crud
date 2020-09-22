import * as actionTypes from "../actions/actionTypes";

const initialState = {
    post: {
        list: []
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

export default { post };