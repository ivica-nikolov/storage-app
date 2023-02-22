import { properties } from "../config/properties";

export const LogInUser = (user,password) => {
    let token = localStorage.getItem("token");
    const config = {
        header:{
            'Content-Type':'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    var data={user:user,password:password}
    return fetch(`${properties.api.localRoute}/api/v1/auth/login`,{method:"POST",headers:config.header,body:JSON.stringify(data)})
        .then(res=> res.json())
        .then(json=>Promise.resolve(json))
        .catch(err=> Promise.reject(err))
}