import { saveOrder, deleteOrder,getOrders } from '../../../../api/ordersApi';
import actions from './actions';

const save = (order) => {
    return dispatch => {
        return saveOrder(order)
        .then(result=>{
            dispatch(actions.saveOrderSuccess(result));
            return result;
        })
        .catch(err=>{
            dispatch(actions.saveOrderFailed("Order not saved"));
            return err;
        })
    }
}

const orderDelete = (orderNumber) => {
    return dispatch => {
        return deleteOrder (orderNumber)
        .then(result=>{
            dispatch(actions.deleteOrderSuccess(result));
            return result;
        })
        .catch(err=>{
            dispatch(actions.deleteOrderFailed("Order not deleted"));
            return err;
        })
    }
}
const fetchOrders = () => {
    return dispatch => {
        dispatch(actions.fetchOrdersRequest());
        return getOrders()
            .then(result => {
                dispatch(actions.fetchOrdersSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.fetchOrdersFail(err));
                return err;
            })
    }
}


export default {
    save,
    orderDelete,
    fetchOrders
}