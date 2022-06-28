import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "./assets/styles/style.css";
import Home from "./containers/home/Home";
import ListPost from "./containers/posts/ListPost";
import PostDetail from "./containers/posts/PostDetail";
import ProductDetail from "./containers/products/ProductDetail";
import ListProduct from "./containers/products/ListProduct";
import Cart from "./containers/cart/Cart";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts">
          <ListPost />
        </Route>
        <Route path="/post-detail/:postId">
          <PostDetail />
        </Route>
        <Route path="/product">
          <ListProduct />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
        <Route path="/cart/">
          <Cart />
        </Route>


        
      </Switch>
    </Router>
  );
};

export default App;
