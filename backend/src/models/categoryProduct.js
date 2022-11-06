// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const categoryProduct = db.define('tbl_product_categories', {
  // Define attributes
  categoryProducts_id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  categoryProducts_name: {
    type: Sequelize.STRING
  },
  categoryProducts_total: {
    type: Sequelize.STRING
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

// Export model Post
export default categoryProduct;