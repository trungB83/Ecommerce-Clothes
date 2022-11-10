// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const categoryPost = db.define('tbl_post_categories', {
  // Define attributes
  categoty_id  : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  categoty_name: {
    type: Sequelize.STRING
  },
  category_description: {
    type: Sequelize.STRING
  },
  created_by: {
    type: Sequelize.INTEGER
  },
  updated_by: {
    type: Sequelize.INTEGER
  }
}, {
  // Freeze Table Name
  freezeTableName: true
});

// Export model Post
export default categoryPost;