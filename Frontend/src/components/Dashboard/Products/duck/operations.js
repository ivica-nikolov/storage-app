import { saveProduct, deleteProduct,getProducts,updateProducts } from '../../../../api/productsApi';
import actions from './actions';

const save = (product) => {
    return dispatch => {
        return saveProduct(product)
        .then(result=>{
            dispatch(actions.saveProductSuccess(result));
            alert("Product saved");
            return result;
        })
        .catch(err=>{
            dispatch(actions.saveProductFailed("Product not saved"));
            return err;
        })
    }
}

const productDelete = (productNumber) => {
    return dispatch => {
        return deleteProduct (productNumber)
        .then(result=>{
            dispatch(actions.deleteProductSuccess(result));
            return result;
        })
        .catch(err=>{
            dispatch(actions.deleteProductFailed("Product not deleted"));
            return err;
        })
    }
}
const fetchProducts = () => {
    return dispatch => {
        dispatch(actions.fetchProductsRequest());
        return getProducts()
            .then(result => {
                dispatch(actions.fetchProductsSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.fetchProductsFail(err));
                return err;
            })
    }
}

const productsUpdate = (data) => {
    return dispatch => {
        return updateProducts(data)
        .then(result=>{
            dispatch(actions.updateProductSuccess(result));
            alert("Product updated");
            return result;
        })
        .catch(err=>{
            dispatch(actions.updateProductFailed("Product not updated"));
            return err;
        })
    }
}


export default {
    save,
    productDelete,
    fetchProducts,
    productsUpdate
}