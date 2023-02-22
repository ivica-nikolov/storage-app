import constants from "./constants";
const initialState = {
    message: ""
}


const reducer = (state= initialState,action) => {

    switch(action.type){
        
        case constants.CREATE_ACCOUNT_SUCCESS:
            return{
                ...state,
                message: action.payload.message
            }
        case constants.CREATE_ACCOUNT_FAILED:
            return{
                ...state,
                message: action.payload.message
                }
            
            
        default: return state;
    }
}

export default reducer;