import constants from "./constants";
const initialState = {
    orders: [],
    message: undefined,
    loading: false
}


const reducer = (state= initialState,action) => {

    switch(action.type){
        
        case constants.SAVE_ORDER_SUCCESS:
            return{
                ...state,
                message:action.payload
            }
        case constants.SAVE_ORDER_FAILED:
            return{
                ...state,
                message:action.payload
                }
        case constants.DELETE_ORDER_SUCCESS:
            return{
                ...state,
                message:action.payload
                }   
        case constants.DELETE_ORDER_FAILED:
            return{
                ...state,
                message:action.payload
                }
        case constants.FETCH_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case constants.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        case constants.FETCH_ORDERS_FAIL:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        default: return state;
    }
}

export default reducer;