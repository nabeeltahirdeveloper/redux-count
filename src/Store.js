import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/count/CountSlice"
export const store = configureStore({
  reducer: {
    count:counterReducer
  },
})