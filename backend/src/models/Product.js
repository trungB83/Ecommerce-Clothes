// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Product = db.define(
  "tbl_products",
  {
    // Define attributes
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    product_name: {
      type: Sequelize.STRING,
    },
    product_price: {
      type: Sequelize.INTEGER,
    },
    product_description: {
      type: Sequelize.STRING,
    },
    category_products_id: {
      type: Sequelize.INTEGER,
    },
    created_by: {
      type: Sequelize.INTEGER,
    },
    updated_by: {
      type: Sequelize.INTEGER,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: false 
  }
);

// Export model Product
export default Product;
