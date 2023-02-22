import constants from "./constants";

const initialState = {
    users: [],
    message: undefined,
    loading: false
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case constants.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case constants.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case constants.FETCH_USERS_FAIL:
            return {
                ...state,
                message: action.payload,
                loading: false
            }

        default: return state;
    }
}