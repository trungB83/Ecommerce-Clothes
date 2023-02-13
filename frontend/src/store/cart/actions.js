import {
  ADD_CART_PRODUCTS,
  ADD_ORDER_PRODUCT,
  DECREASE_QUANTITY,
  DELETE_CART_PRODUCTS,
  DELETE_ORDER_PRODUCT,
  INCREASE_QUANTITY,
  UPDATE_CART_PRODUCTS,
} from "./types";

export const addCartProduct = (payload) => {
  return {
    type: ADD_CART_PRODUCTS,
    value: payload,
  };
};

export const DeleteCart = (payload) => {
  return {
    type: DELETE_CART_PRODUCTS,
    value: payload,
  };
};

export const updateCartProduct = (payload) => {
  return {
    type: UPDATE_CART_PRODUCTS,
    value: payload,
  };
};

export function IncreaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    value: payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    value: payload,
  };
}

export function addOrderProduct(payload) {
  return {
    type: ADD_ORDER_PRODUCT,
    value: payload,
  };
}

export function deleteOrderProduct(payload) {
  return {
    type: DELETE_ORDER_PRODUCT,
    value: payload,
  };
}
