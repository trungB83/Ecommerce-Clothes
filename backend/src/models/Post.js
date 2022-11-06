// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Post = db.define('tbl_posts', {
  // Define attributes
  post_id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  post_title: {
    type: Sequelize.STRING
  },
  post_description: {
    type: Sequelize.STRING
  },
  category_id: {
    type: Sequelize.INTEGER
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
export default Post;