import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/count/CountSlice"
import productReducer from "./features/products/ProductSlice"
export const store = configureStore({
  reducer: {
    count:counterReducer,
    proudcts:productReducer
  },
})