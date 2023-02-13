import Post from './posts/post/post.model.js';
import PostCate from './posts/cate/cate.model.js';
import PostComment from './posts/comment/comment.model.js';

import Product from './products/product/product.model.js';
import ProductCate from './products/cate/cate.model.js';
import ProductComment from './products/comment/comment.model.js';

import User from './users/user/user.model.js';
import UserCate from './users/cate/cate.model.js';
import UserPermission from './users/permission/permission.model.js';
import UserCateAndPermissionRelation from './users/relationship/user_cate_and_permission.model.js';

import Option from './options/option.model.js';
import EmailLog from './email-logs/email-log.model.js';

import Order from './orders/order/order.model.js';
import OrderItem from './orders/order-item/order-item.model.js';
import Payment from './orders/payment/payment.model.js';
import Deliver from './orders/deliver/deliver.model.js';

import File from './files/file/file.model.js';
import FileCate from './files/cate/cate.model.js';

import Slider from './sliders/slider/slider.model.js';
import SliderCate from './sliders/cate/cate.model.js';

// post relationships
PostCate.hasMany(Post, { foreignKey: 'post_cate_id', as: 'posts' });
Post.belongsTo(PostCate, { foreignKey: 'post_cate_id', as: 'post_cate' });
Post.hasMany(PostComment, { foreignKey: 'post_id', as: 'comments' });
PostComment.belongsTo(Post, { foreignKey: 'post_id', as: 'post' });
Post.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
Post.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });
PostCate.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
PostCate.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });
PostComment.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
PostComment.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });

// product relationships
ProductCate.hasMany(Product, { foreignKey: 'product_cate_id', as: 'products' });
Product.belongsTo(ProductCate, { foreignKey: 'product_cate_id', as: 'product_cate' });
Product.hasMany(ProductComment, { foreignKey: 'product_id', as: 'comments' });
ProductComment.belongsTo(Product, { foreignKey: 'product_id', as: 'post' });
Product.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
Product.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });
ProductCate.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
ProductCate.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });
ProductComment.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
ProductComment.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });

// user relationships
UserCate.hasMany(User, { foreignKey: 'user_cate_id', as: 'users' });
User.belongsTo(UserCate, { foreignKey: 'user_cate_id', as: 'user_cate' });
UserCate.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
UserCate.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });
User.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
User.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });

UserCate.belongsToMany(UserPermission, { through: UserCateAndPermissionRelation, foreignKey: 'user_cate_id', as: 'permissions' });
UserPermission.belongsToMany(UserCate, { through: UserCateAndPermissionRelation, foreignKey: 'permission_id', as: 'user_cate' });

// order relationships
Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'order_items' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

Payment.hasMany(Order, { foreignKey: 'payment_id', as: 'orders' });
Order.belongsTo(Payment, { foreignKey: 'payment_id', as: 'payment' });
Payment.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
Payment.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });

Deliver.hasMany(Order, { foreignKey: 'deliver_id', as: 'orders' });
Order.belongsTo(Deliver, { foreignKey: 'deliver_id', as: 'deliver' });
Deliver.belongsTo(User, { foreignKey: 'created_by', as: 'author' });
Deliver.belongsTo(User, { foreignKey: 'updated_by', as: 'editor' });

Order.belongsTo(User, { foreignKey: 'user_id', as: 'author' });

export default {
  Post,
  PostCate,
  PostComment,

  Product,
  ProductCate,
  ProductComment,

  User,
  UserCate,
  UserPermission,
  UserCateAndPermissionRelation,

  Option,
  EmailLog,

  Order,
  OrderItem,
  Payment,
  Deliver,

  File,
  FileCate,

  Slider,
  SliderCate,
};
