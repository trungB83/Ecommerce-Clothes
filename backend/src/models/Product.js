// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Product = db.define('tbl_products', {
  // Define attributes
  product_id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  product_name: {
    type: Sequelize.STRING
  },
  product_price: {
    type: Sequelize.INTEGER
  },
  product_description: {
    type: Sequelize.STRING
  },
  product_subDescription: {
    type: Sequelize.STRING
  },
  categoryProducts_id : {
    type: Sequelize.INTEGER,
  },
  createdBy: {
    type: Sequelize.INTEGER
  },
  updatedBy: {
    type: Sequelize.INTEGER
  }
}, {
  // Freeze Table Name
  freezeTableName: true
});

// Export model Product
export default Product;