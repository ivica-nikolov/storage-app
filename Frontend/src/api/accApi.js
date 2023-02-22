import { properties } from "../config/properties";

export const CreateNewAccount = (user,password) => {
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
        }
    };
    var data={user:user,password:password}
    return fetch(`${properties.api.localRoute}/api/v1/auth/create-user`,{method:"POST",headers:config.header,body:JSON.stringify(data)})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}