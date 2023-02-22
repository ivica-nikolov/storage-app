import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../config/StorageFunctions"


export const ProtectedRoute = ({
    redirectPath = "/login",
    children

}) =>{
    if(!getToken()){
        return <Navigate to={redirectPath} replace />
    }else {
        <Navigate to='/dashboard/product'/>
    }

    return children ? children : <Outlet/>

}