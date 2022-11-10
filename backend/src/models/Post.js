// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Post = db.define(
  "tbl_posts",
  {
    // Define attributes
    post_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    post_title: {
      type: Sequelize.STRING,
    },
    post_description: {
      type: Sequelize.STRING,
    },
    post_content: {
      type: Sequelize.STRING,
    },
    post_image: {
      type: Sequelize.STRING,
    },
    post_status: {
      type: Sequelize.INTEGER,
    },
    post_category_id: {
      type: Sequelize.INTEGER,
    },
    post_slug: {
      type: Sequelize.STRING,
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
  }
);

// Export model Post
export default Post;
