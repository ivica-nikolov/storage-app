import constants from "./constants";

const fetchUsersRequest = (requestParams) => {
    return{
        type: constants.FETCH_USERS_REQUEST,
        payload: requestParams
    }
}

const fetchUsersSuccess = (users) => {
    return{
        type: constants.FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFail = (error) => {
    return{
        type:constants.FETCH_USERS_FAIL,
        payload:error
    }
}

// eslint-disable-next-line
export default{
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFail
}