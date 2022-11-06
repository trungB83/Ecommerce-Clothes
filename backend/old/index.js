const products = require('./products.json');
const posts = require('./posts.json');
const users = require('./users.json');
const orders = require('./orders.json')
// Something more

module.exports = () => ({
  products: products,
  posts: posts,
  users: users,
  orders: orders
  // Something more
});