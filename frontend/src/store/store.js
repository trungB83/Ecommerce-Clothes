import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./users/reducers";
import postReducer from "./posts/reducers";
import productReducer from "./products/reducers";
import cartReducer from "./cart/reducers";
import deliverReducer from "./delivers/reducers";
import paymentReducer from "./payments/reducers";
import userCateReducer from "./user-cates/reducers";
import postCateReducer from "./post-cates/reducers";
import productCateReducer from "./product-cates/reducers";
import fileReducer from "./files/reducers"
import orderReducer from "./orders/reducers";
import orderItemReducer from "./order-items/reducers"
import permissionRouter from "./permissions/reducers"
import statisticsReducer from "./statistics/reducers"
import logger from "redux-logger";

const reducer = {
  users: userReducer,
  user_cates: userCateReducer,
  permissions: permissionRouter,
  posts: postReducer,
  post_cates: postCateReducer,
  products: productReducer,
  product_cates: productCateReducer,
  carts: cartReducer,
  delivers: deliverReducer,
  payments: paymentReducer,
  orders: orderReducer,
  order_items: orderItemReducer,
  files: fileReducer,
  statistics : statisticsReducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
