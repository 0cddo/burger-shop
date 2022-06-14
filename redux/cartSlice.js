import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price * action.payload.totalQuantity;
    },
    reset: (state) => (state = initialState),
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
