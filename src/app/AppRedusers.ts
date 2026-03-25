import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api/baseApi";
import { authReduser } from "@/entities/auth/model/authSlice";

export const rootReduser = combineReducers({
    authorization: authReduser,
    [baseApi.reducerPath]: baseApi.reducer,
})