import constants from "./constants"

 const saveOrderSuccess = (data) => {
    return{
        type: constants.SAVE_ORDER_SUCCESS,
        payload: data
    }
}

 const saveOrderFailed = (error) => {
    return{
        type: constants.SAVE_ORDER_FAILED,
        payload: error
    }
}
const deleteOrderSuccess = (data) => {
    return{
        type: constants.DELETE_ORDER_SUCCESS,
        payload: data
    }
}
const deleteOrderFailed = (data) => {
    return{
        type: constants.DELETE_ORDER_FAILED,
        payload: data
    }
}
const fetchOrdersRequest = (requestParams) => {
    return{
        type: constants.FETCH_ORDERS_REQUEST,
        payload: requestParams
    }
}

const fetchOrdersSuccess = (orders) => {
    return{
        type: constants.FETCH_ORDERS_SUCCESS,
        payload: orders
    }
}

const fetchOrdersFail = (error) => {
    return{
        type:constants.FETCH_ORDERS_FAIL,
        payload:error
    }
}


export default{
    saveOrderSuccess,
    saveOrderFailed,
    deleteOrderSuccess,
    deleteOrderFailed,
    fetchOrdersRequest,
    fetchOrdersSuccess,
    fetchOrdersFail

}