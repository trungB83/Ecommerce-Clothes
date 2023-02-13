import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.product_id === action.payload.product_id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += 1
 
      } else {
        let tempProductItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProductItem);
      }
      notification.success({
        message: `Thêm vào giỏ hàng thành công!`,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },
    decreaseQuantityCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product_id === action.payload.product_id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.product_id !== action.payload.product_id
        );
        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.product_id !== action.payload.product_id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { sale_price, price, quantity } = cartItem;
          const itemTotal = (sale_price ? sale_price : price) * quantity;
          console.log("cartTotal",cartTotal);
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },

});

export const {
  addCartItem,
  removeFromCart,
  decreaseQuantityCart,
  getTotals,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
