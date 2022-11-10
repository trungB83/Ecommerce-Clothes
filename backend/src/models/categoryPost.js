// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const CategoryPost = db.define('tbl_post_categories', {
  // Define attributes
  post_category_id   : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  post_category_name: {
    type: Sequelize.STRING
  },
  post_category_description	: {
    type: Sequelize.STRING
  },
  post_category_image	: {
    type: Sequelize.STRING
  },
  post_category_is_parent   : {
    type: Sequelize.INTEGER,
  },
  post_category_is_parent   : {
    type: Sequelize.INTEGER,
  },
  post_category_parent_id   : {
    type: Sequelize.INTEGER,
  },
  post_category_status   : {
    type: Sequelize.INTEGER,
  },
  post_category_slug	: {
    type: Sequelize.STRING
  },
  created_by: {
    type: Sequelize.INTEGER
  },
  updated_by: {
    type: Sequelize.INTEGER
  },
  created_at: {
    field: 'created_at',
    type: DataTypes.DATE
  },

  updated_at: {
    field: 'updated_at',
    type: DataTypes.DATE
  },
}, {
  // Freeze Table Name
  freezeTableName: true,
  createdAt: 'created_at',
      updatedAt: 'updated_at'
});

// Export model Post
export default CategoryPost;