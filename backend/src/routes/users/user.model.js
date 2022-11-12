// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const User = db.define(
  "tbl_users",
  {
    // allowNull : true => column get NOTNULL
    user_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: true,
      validate: {
        isInt: true, 
        isNumeric: true, 
      },
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true, 
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
        is: ["^[a-z]+$", "i"],
      },
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        is: ["^[a-z]+$", "i"],
        isAlphanumeric: true, 
      },
    },
    user_gender: {
      type: Sequelize.TINYINT,
      allowNull: false,
      validate: {
        isInt: true, 
        isNumeric: true,
      },
    },
    user_phone: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], 
        isAlphanumeric: true, 
        notEmpty: true, 
      },
    },
    role_id: {
      type: Sequelize.TINYINT,
      allowNull: false,
      validate: {
        isNumeric: true, 
        isInt: true, 
      },
    },
    created_by: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], 
        isAlphanumeric: true, 
        notEmpty: true,
      },
    },
    updated_by: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], 
        isAlphanumeric: true, 
        notEmpty: true, 
      },
    },
    created_at: {
      field: "created_at",
      type: DataTypes.DATE,
      validate: {
        isDate: true, 
      },
    },

    updated_at: {
      field: "updated_at",
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      }
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
