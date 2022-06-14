import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    // totalQuantity: 카트 안의 총 상품 갯수
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.totalQuantity += 1;
      // quantity: 전체 갯수 아님, 피자 하나당 선택 갯수임
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    reset: (state) => (state = initialState),
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
