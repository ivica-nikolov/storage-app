import constants from "./constants";
const initialState = {
    products: [],
    message: undefined,
    loading: false
}


const reducer = (state= initialState,action) => {

    switch(action.type){
        
        case constants.SAVE_PRODUCT_SUCCESS:
            return{
                ...state,
                message:action.payload.message
            }
        case constants.SAVE_PRODUCT_FAILED:
            return{
                ...state,
                message:action.payload.message
                }
        case constants.DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                message:action.payload.message
                }   
        case constants.DELETE_PRODUCT_FAILED:
            return{
                ...state,
                message:action.payload.message
                }
        case constants.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case constants.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case constants.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        default: return state;
    }
}

export default reducer;