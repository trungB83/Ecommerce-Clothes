// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const CategoryProduct = db.define(
  "tbl_product_categories",
  {
    // Define attributes
    category_products_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    category_products_name: {
      type: Sequelize.STRING,
    },
    category_products_description: {
      type: Sequelize.STRING,
    },
    category_products_thumbnail: {
      type: Sequelize.STRING,
    },
    category_products_slug: {
      type: Sequelize.STRING,
    },
    category_products_status: {
      type: Sequelize.INTEGER,
    },
    category_products_parent_id: {
      type: Sequelize.INTEGER,
    },
    created_by: {
      type: Sequelize.INTEGER,
    },
    updated_by: {
      type: Sequelize.INTEGER,
    },
    created_at: {
      field: 'created_at',
      type: DataTypes.DATE
    },

    updated_at: {
      field: 'updated_at',
      type: DataTypes.DATE
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

// Export model Post
export default CategoryProduct;
