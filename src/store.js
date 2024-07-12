import {combineReducers,configureStore} from "@reduxjs/toolkit"
import { userSlice } from "./slices/userSlice"
import { userApi } from "./endpoints/CrudApi"





const reducer=combineReducers({
    userSlice:userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer

})

export  const store=configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),

})

