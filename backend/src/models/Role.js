// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Role = db.define(
  "tbl_roles",
  {
    // Define attributes
    role_id : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull:false,
      validate:{
        isInt: true, // checks for valid integers
        isNumeric: true, // will only allow numbers
        notEmpty: true, // don't allow empty strings
      }
    },
    role_name: {
      type: Sequelize.STRING,
      allowNull:true,
      validate:{
        is: ["^[a-z]+$", "i"], // will only allow letters
        isEmail: true, // checks for email format (foo@bar.com)
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
        notEmpty: true, // don't allow empty strings
        max: 300, // only allow values <= 300
      }
    },
    role_description	: {
      type: Sequelize.STRING,
      allowNull:true,
      validate:{
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
        notEmpty: true, // don't allow empty strings
        max: 100, // only allow values <= 300
      }
    },
    created_by: {
      type: Sequelize.INTEGER,
      allowNull:true,
      validate:{
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
        notEmpty: true, // don't allow empty strings
        max: 200, // only allow values <= 300
      }
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull:true,
      validate:{
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
        notEmpty: true, // don't allow empty strings
        max: 200, // only allow values <= 300
      }
    },
    created_at: {
      field: 'created_at',
      type: DataTypes.DATE,
      validate: {
        isDate: true,// only allow date strings
      }
    },

    updated_at: {
      field: 'updated_at',
      type: DataTypes.DATE,
      validate: {
        isDate: true,// only allow date strings
      }

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
export default Role;
