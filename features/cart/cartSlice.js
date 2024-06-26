import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      user: null,
      updatedAt: Date.now().toLocaleString(),
      total: 0,
      items: [],
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user = action.payload;
   },
    addItem: (state, action) => {
      const item = action.payload
      const itemInCart = state.value.items.find(
        itemInCart => itemInCart.id === item.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.value.items.push({ ...item, quantity: 1 })
      }
      state.value.total = state.value.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    },
    removeItem: (state, action) => {
      const item = action.payload
      state.value.items = state.value.items.filter(
        itemInCart => itemInCart.id !== item.id
      )
      state.value.total -= item.price * item.quantity
    },
    clearCart: (state) => {
      state.value.items = []
      state.value.total = 0
    },
  },
})

export const { addItem, removeItem, clearCart, setUser } = cartSlice.actions

export default cartSlice.reducer

export const selectCart = state => state.cart.value