// import { TYPES } from ".";
import {
  ADD_CART_PRODUCTS,
  DECREASE_QUANTITY,
  DELETE_CART_PRODUCTS,
  INCREASE_QUANTITY,
  ADD_ORDER_PRODUCT,
  DELETE_ORDER_PRODUCT
} from "./Types";

const getDataLocal = () => {
  let dataLocal = []
  const data = localStorage.getItem("data")
  if (data) {
    dataLocal = [...JSON.parse(data).orders]
  }
  return dataLocal
}


const initState = {
  orders: [...getDataLocal()],
  users: {
    list: [],
    item: {},
    current: {},
  },
  // posts: {
  //   list: [],
  //   item: {},
  // },
  // postCates: {
  //   list: [],
  //   item: {},
  // },
  // products: {
  //   list: [],
  //   item: {},
  // },
  // productCates: {
  //   list: [],
  //   item: {},
  // },
  productCart: {
    // numberCart: 0,
    Carts: [],
    _products: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    // cart
    case ADD_CART_PRODUCTS:
      if (state.productCart.Carts.length === 0) {
        let cart = {
          id: action.value.prod_id,
          quantity: 1,
          name: action.value.prod_name,
          image: action.value.prod_thumbnail,
          price: action.value.prod_price,
        };
        state.productCart.Carts.push(cart);
      } else {
        let check = false;
        state.productCart.Carts.map((item, key) => {
          if (item.id === action.value.prod_id) {
            state.productCart.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.value.prod_id,
            quantity: 1,
            name: action.value.prod_name,
            image: action.value.prod_thumbnail,
            price: action.value.prod_price,
          };
          state.productCart.Carts.push(_cart);
        }
      }
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      state.productCart.Carts[action.value].quantity++;
      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.productCart.Carts[action.value].quantity;
      if (quantity > 1) {
        state.productCart.Carts[action.value].quantity--;
      }
      return {
        ...state,
      };
    case DELETE_CART_PRODUCTS:
      return {
        ...state,
        Carts: state.productCart.Carts.filter((item) => {
          return item.id !== state.productCart.Carts[action.value].prod_id;
        }),
      };

      case ADD_ORDER_PRODUCT:
      setDataLocal({ orders: [...state.orders, action.value] });
      setkeyOrderLocal(action.value.key);
      return {
        ...state,
        orders: [...state.orders, action.value],
      };

      case DELETE_ORDER_PRODUCT:
        let newOrders = [];
        state.orders.forEach((item, index) => {
          if (item.key === action.value) {
            newOrders = [
              ...state.orders.filter((ite, idx) => idx !== index),
            ];
          }
        });
        setDataLocal({ orders: [...newOrders] });
        return {
          ...state,
          orders: [...newOrders],
        };


    default:
      break;
  }
}

const setDataLocal = (value)=> {
  localStorage.setItem("data", JSON.stringify(value));
};

const setkeyOrderLocal = (value) => {
  localStorage.setItem("key", JSON.stringify(value));
};

export { initState };
export default reducer;
