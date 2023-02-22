import { properties } from "../config/properties";

export const saveOrder = (company) => {
    let token = localStorage.getItem('token');
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    var data={company:company}
    return fetch(`${properties.api.localRoute}/api/v1/orders/save-order`,{method:"POST",headers:config.header,body:JSON.stringify(data)})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}

export const deleteOrder = (orderNumber) => {
    let token = localStorage.getItem('token')
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    return fetch(`${properties.api.localRoute}/api/v1/orders/delete-order/${orderNumber}`,{method:"DELETE",headers:config.header})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}

export const getOrders = () => {
    let token = localStorage.getItem('token')
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    return fetch(`${properties.api.localRoute}/api/v1/orders/get-all-orders`,
    {method:"GET",headers:config.header})
        .then(res =>  res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}