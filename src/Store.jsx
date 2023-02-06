import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Features/products/ProductSlice'

export const Store = configureStore({
  reducer: {
    prod:productReducer
  },
})