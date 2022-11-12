// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Product = db.define(
  "tbl_products",
  {
    // Define attributes
    // setting allowNull to false will add NOT NULL to the column
    product_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      // allowNull: false,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
      },
    },
    product_name: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        
      },
    },
    product_price: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
      },
    },
    product_price_sale: {
      type: Sequelize.FLOAT,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isFloat: true, // checks for valid integers
      },
    },
    product_image: {
      type: Sequelize.STRING(200),
      allowNull: true,
      validate: {
        isAlpha: true, // will only allow letters
      },
    },
    product_description: {
      type: Sequelize.STRING(400),
      allowNull: true,
      validate: {
        isAlpha: true, // will only allow letters
      },
    },
    product_status: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
      },
    },
    product_slug: {
      type: Sequelize.STRING(200),
      allowNull: true,
      validate: {
        isUrl: true, // checks for url format (http://foo.com)
      },
    },
    category_products_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
       
      },
    },
    created_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
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

// Export model Product
export default Product;
