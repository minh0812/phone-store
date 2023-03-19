import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
  cartItems: any[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const items_id = action.payload.product.id;
      state.cartItems.push({
        id: items_id,
        image: action.payload.product.image,
        name: action.payload.product.name,
        quantity: action.payload.quantity,
        price: action.payload.product.price,
        totalPrice: action.payload.quantity * action.payload.product.price,
      });

      alert("Đã thêm vào giỏ hàng");
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.cartItem.id
      );
    },

    addItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload.cartItem.id) {
          item.quantity += 1;
          item.totalPrice += item.price;
        }
      });
    },

    subItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload.cartItem.id) {
          item.quantity -= 1;
          item.totalPrice -= item.price;
        }
      });
    },

    clear: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItemsToCart, removeItem, addItem, subItem, clear } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
