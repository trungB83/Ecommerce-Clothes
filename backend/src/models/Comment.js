// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Comment = db.define(
  "tbl_comments",
  {
    // Define attributes
    comment_id : {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    comment_content: {
      type: Sequelize.STRING,
    },
    comment_parent: {
      type: Sequelize.INTEGER,
    },
    comment_category_id: {
      type: Sequelize.INTEGER,
    },
    comment_status: {
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
export default Comment;
