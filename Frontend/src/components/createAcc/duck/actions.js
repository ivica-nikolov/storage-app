import constants from "./constants"

 const CreateAccSuccess = (data) => {
    return{
        type: constants.CREATE_ACCOUNT_SUCCESS,
        payload: data
    }
}

 const CreateAccFailed = (error) => {
    return{
        type: constants.CREATE_ACCOUNT_FAILED,
        payload: error
    }
}

export default{
    CreateAccSuccess,
    CreateAccFailed
    
}