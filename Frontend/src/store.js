import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authReducer } from "./components/auth/duck";
import { ordersReducer } from "./components/Dashboard/Orders/duck";
import { productsReducer } from "./components/Dashboard/Products/duck";
const reducer = {
    ordersReducer: ordersReducer,
    authReducer: authReducer,
    productsReducer:productsReducer
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})