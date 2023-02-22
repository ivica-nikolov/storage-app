import constants from "./constants"

 const logInSuccess = (data) => {
    return{
        type: constants.LOGIN_SUCCESS,
        payload: data
    }
}

 const logInFailed = (error) => {
    return{
        type: constants.LOGIN_FAILED,
        payload: error
    }
}

const logOutUser = ()=>{
    return{
        type:constants.LOGOUT_USER,
        payload:"Logged Out"
    }
}

export default{
    logInFailed,
    logInSuccess,
    logOutUser
}