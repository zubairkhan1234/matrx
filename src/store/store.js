import { configureStore } from "@reduxjs/toolkit";


import authReducer from "./actions/auth";
export const store = configureStore({
    reducer: {
       authState : authReducer,
    }
})