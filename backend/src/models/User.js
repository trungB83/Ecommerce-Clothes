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
    // allowNull : true => column get NOTNULL
    user_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: true,
      validate: {
        isInt: true, // checks for valid integers
        isNumeric: true, // will only allow numbers
      },
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true, // checks for email format (foo@bar.com)
      },
    },
    user_username: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false,
      validate: {},
    },
    user_fullname: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
      },
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    user_gender: {
      type: Sequelize.TINYINT,
      allowNull: false,
      validate: {
        isInt: true, // checks for valid integers
        isNumeric: true, // will only allow numbers
      },
    },
    user_phone: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
        notEmpty: true, // don't allow empty strings
      },
    },
    role_id: {
      type: Sequelize.TINYINT,
      allowNull: false,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
      },
    },
    created_by: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
        notEmpty: true, // don't allow empty strings
      },
    },
    updated_by: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
        notEmpty: true, // don't allow empty strings
      },
    },
    created_at: {
      field: "created_at",
      type: DataTypes.DATE,
      validate: {
        isDate: true, // only allow date strings
      },
    },

    updated_at: {
      field: "updated_at",
      type: DataTypes.DATE,
      validate: {
        isDate: true, // only allow date strings
      },
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Export model Post
export default User;
