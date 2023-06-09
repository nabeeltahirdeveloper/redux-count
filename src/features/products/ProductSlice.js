import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    products:[],
    status: 'idle',
}

// export const getProducts = createAsyncThunk(
//     'product/getProducts',
//     async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products')
//         // The value we return becomes the `fulfilled` action payload

//         if(response.error) throw response.error

//         return response.data        
//       } catch (error) {
//           throw error
//       }
//     }
//   )
  
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    saveProducts: (state, action) => {
      state.products = action.payload
    }

  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getProducts.pending, (state) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(getProducts.fulfilled, (state, action) => {
  //       state.status = 'idle'
  //       state.products = action.payload
  //     })
  //     .addCase(getProducts.rejected, (state, action) => {
  //       state.status = 'failed'
  //       state.error = action.error.message
  //     })
  // }
})

// Action creators are generated for each case reducer function
export const {saveProducts } = productSlice.actions

export default productSlice.reducer