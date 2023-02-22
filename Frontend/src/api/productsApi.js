import { properties } from "../config/properties";

export const saveProduct = (data) => {
    let token = localStorage.getItem('token')
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    return fetch(`${properties.api.localRoute}/api/v1/products/save-product`,{method:"POST",headers:config.header,body:JSON.stringify(data)})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}

export const deleteProduct = (id) => {
    let token = localStorage.getItem('token')
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    return fetch(`${properties.api.localRoute}/api/v1/products/delete-product/${id}`,{method:"DELETE",headers:config.header})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}

export const getProducts = () => {
    let token = localStorage.getItem('token')
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    
    return fetch(`${properties.api.localRoute}/api/v1/products/all-products`,
    {method:"GET",headers:config.header})
        .then(res =>  res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}

export const updateProducts = (data) => {
    let token = localStorage.getItem('token')
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body:JSON.stringify(data)
    };
    return fetch(`${properties.api.localRoute}/api/v1/products/edit-product/${data.id}`,{method:"POST",headers:config.header})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}