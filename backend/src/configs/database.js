import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const env = process.env.APP_ENV || 'development';
const dialect = process.env.DB_DIALECT || 'mysql';
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

if (env === 'development') {
  console.log('ENV configs:', {
    env,
    db: {
      host,
      dialect,
      database,
      username,
      password,
    },
  });
}

const connectionObject = {
  host: host || 'localhost',
  dialect,
  operatorsAliases: false,
  retry: { max: 10 },
  pool: {
    max: process.env.DB_POOL_MAX | 5,
    min: process.env.DB_POOL_MIN | 1,
    acquire: process.env.DB_POOL_ACQUIRE | 30000,
    idle: process.env.DB_POOL_IDLE | 10000,
  },
  logging: env === 'production',
};

const db = new Sequelize(database, username, password, connectionObject);

export const TABLES = {
  tbl_users: {
    table: 'tbl_users',
    default_attributes: ['user_id', 'user_cate_id', 'email', 'username', 'fullname', 'gender', 'address', 'phone', 'status', 'created_by', 'updated_by', 'created_at', 'updated_at'],
  },
  tbl_user_cates: {
    table: 'tbl_user_cates',
    default_attributes: ['user_cate_id', 'name', 'description', 'created_by', 'updated_by', 'created_at', 'updated_at'],
  },
  tbl_user_permissions: 'tbl_user_permissions',
  tbl_user_cate_and_permission_relation: 'tbl_user_cate_and_permission_relation',
  tbl_user_cate_metas: 'tbl_user_cate_metas',

  tbl_posts: {
    table: 'tbl_posts',
    default_attributes: ['post_id', 'post_cate_id', 'name', 'description', 'image', 'status', 'slug', 'created_by', 'updated_by', 'created_at', 'updated_at'],
  },
  tbl_post_cates: {
    table: 'tbl_post_cates',
    default_attributes: ['post_cate_id', 'parent_id', 'name', 'description', 'image', 'status', 'slug', 'created_by', 'updated_by', 'created_at', 'updated_at'],
  },
  tbl_post_cate_metas: 'tbl_post_cate_metas',
  tbl_post_comments: 'tbl_post_comments',
  tbl_post_metas: 'tbl_post_metas',
  tbl_post_cate_metas: 'tbl_post_cate_metas',

  tbl_products: {
    table: 'tbl_products',
    default_attributes: ['product_id', 'product_cate_id', 'name', 'description', 'image', 'status', 'slug', 'sku', 'price', 'sale_price', 'created_by', 'updated_by', 'created_at', 'updated_at'],
  },
  tbl_product_cates: {
    table: 'tbl_product_cates',
    default_attributes: ['product_cate_id', 'name', 'description', 'image', 'status', 'slug', 'created_by', 'updated_by', 'created_at', 'updated_at'],
  },
  tbl_product_comments: 'tbl_product_comments',
  tbl_product_metas: 'tbl_product_metas',
  tbl_product_cate_metas: 'tbl_product_cate_metas',

  tbl_sliders: 'tbl_sliders',
  tbl_slider_cates: 'tbl_slider_cates',

  tbl_files: 'tbl_files',
  tbl_file_cates: 'tbl_file_cates',

  tbl_email_logs: 'tbl_email_logs',
  tbl_options: 'tbl_options',

  tbl_orders: 'tbl_orders',
  tbl_order_delivers: 'tbl_order_delivers',
  tbl_order_item: 'tbl_order_item',
  tbl_order_payments: 'tbl_order_payments',
};

export default db;
