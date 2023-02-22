import constants from "./constants"

 const saveProductSuccess = (data) => {
    return{
        type: constants.SAVE_PRODUCT_SUCCESS,
        payload: data
    }
}

 const saveProductFailed = (error) => {
    return{
        type: constants.SAVE_PRODUCT_FAILED,
        payload: error
    }
}
const deleteProductSuccess = (data) => {
    return{
        type: constants.DELETE_PRODUCT_SUCCESS,
        payload: data
    }
}
const deleteProductFailed = (data) => {
    return{
        type: constants.DELETE_PRODUCT_FAILED,
        payload: data
    }
}
const fetchProductsRequest = () => {
    return{
        type: constants.FETCH_PRODUCTS_REQUEST,
        
    }
}

const fetchProductsSuccess = (products) => {
    return{
        type: constants.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsFail = (error) => {
    return{
        type:constants.FETCH_PRODUCTS_FAIL,
        payload:error
    }
}

const updateProductSuccess = (data) => {
    return{
        type: constants.UPDATE_PRODUCT_SUCCESS,
        payload: data
    }
}
const updateProductFailed = (data) => {
    return{
        type: constants.UPDATE_PRODUCT_FAILED,
        payload: data
    }
}



export default{
    saveProductSuccess,
    saveProductFailed,
    deleteProductSuccess,
    deleteProductFailed,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFail,
    updateProductSuccess,
    updateProductFailed

}