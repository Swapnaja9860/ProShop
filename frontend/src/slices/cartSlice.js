import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/utils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  // : { cartItems: [], itemsPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0 };
  : {cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal'}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const Item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === Item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === Item._id ? Item : x
        );
      } else {
        state.cartItems = [...state.cartItems, Item];
      }
    return updateCart(state);
    },

    removeFromCart : (state, action) =>{
        state.cartItems = state.cartItems.filter((item) => item._id !== action.payload)
        return updateCart(state);
    },

    saveShippingAddress : (state, action) =>{
      state.shippingAddress = action.payload;
      return updateCart(state);
    },

    savePaymentMethod : (state, action) =>{
      state.paymentMethod = action.payload;
      return updateCart(state);
    }
  }

});

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod} = cartSlice.actions;
export default cartSlice.reducer;
