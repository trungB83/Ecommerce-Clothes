import { Sequelize } from 'sequelize';
import moment from 'moment';
import { TABLES } from '../../configs/database.js';
import models from '../models.js';
const { Post, PostCate, User, UserCate, Product, ProductCate, Order } = models;
const Op = Sequelize.Op;
// get global statistics
export const globalStatistics = async (req, res) => {
  const start = new Date().getTime();
  try {
    return res.status(200).send({
      data: {
        post: {
          total_posts: await Post.count(),
          active_posts: await Post.count({ where: { status: 'active' } }),
          inactive_posts: await Post.count({ where: { status: 'inactive' } }),
          post_cates: await PostCate.findAndCountAll(),
        },
        user: {
          total_users: await User.count(),
          active_users: await User.count({ where: { status: 'active' } }),
          inactive_users: await User.count({ where: { status: 'inactive' } }),
          user_cates: await UserCate.findAndCountAll(),
        },
        product: {
          total_products: await Product.count(),
          active_products: await Product.count({ where: { status: 'active' } }),
          inactive_products: await Product.count({ where: { status: 'inactive' } }),
          product_cates: await ProductCate.findAndCountAll(),
        },
        order: {
          total_orders: await Order.count(),
          active_orders: await Order.count({ where: { status: 'active' } }),
          inactive_orders: await Order.count({ where: { status: 'inactive' } }),
          revenues: {
            total: await Order.sum('order_total_price'),
            this_weak: await Order.sum('order_total_price', {
              where: {
                created_at: {
                  [Op.between]: [moment().startOf('weak').set('hour', 0).set('minute', 0).set('second', 0).toDate(), moment().endOf('weak').set('hour', 23).set('minute', 59).set('second', 59).toDate()],
                },
              },
            }),
            this_month: await Order.sum('order_total_price', {
              where: {
                created_at: {
                  [Op.between]: [moment().startOf('month').set('hour', 0).set('minute', 0).set('second', 0).toDate(), moment().endOf('month').set('hour', 23).set('minute', 59).set('second', 59).toDate()],
                },
              },
            }),
            this_year: await Order.sum('order_total_price', {
              where: {
                created_at: {
                  [Op.between]: [moment().startOf('year').set('hour', 0).set('minute', 0).set('second', 0).toDate(), moment().endOf('year').set('hour', 23).set('minute', 59).set('second', 59).toDate()],
                },
              },
            }),
          },
        },
      },
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};
