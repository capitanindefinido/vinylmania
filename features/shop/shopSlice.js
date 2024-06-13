import { createSlice } from '@reduxjs/toolkit'
import products from '../../data/products.json'
import categories from '../../data/categories.json'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products,
    categories,
    categorySeleted: '',
    productIdSelected: '',
    productsFilteredByCategory: [],
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySeleted = action.payload
      state.productsFilteredByCategory = state.products.filter(
        product => product.brand === action.payload
      )
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
    },
  },
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer
