// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const User = db.define(
  "tbl_users",
  {
    // Define attributes
    user_id : {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    user_email: {
      type: Sequelize.STRING,
    },
    user_username	: {
      type: Sequelize.STRING,
    },
    user_fullname: {
      type: Sequelize.STRING,
    },
    user_password: {
      type: Sequelize.STRING,
    },
    user_gender: {
      type: Sequelize.INTEGER,
    },
    user_phone: {
      type: Sequelize.STRING,
    },
    role_id: {
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

// Export model Post
export default User;
