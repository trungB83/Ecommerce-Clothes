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
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        is: /^[a-z]+$/i, // same as the previous example using real RegExp
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlpha: true, // will only allow letters
      },
    },
    product_price: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        is: /^[a-z]+$/i, // same as the previous example using real RegExp
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    product_price_sale: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        is: /^[a-z]+$/i, // same as the previous example using real RegExp
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    product_image: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
        isAlpha: true, // will only allow letters
      },
    },
    product_description: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlpha: true, // will only allow letters
      },
    },
    product_status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        is: /^[a-z]+$/i, // same as the previous example using real RegExp
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    product_slug: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        is: ["^[a-z]+$", "i"], // will only allow letters
        isAlpha: true, // will only allow letters
        isUrl: true, // checks for url format (http://foo.com)
      },
    },
    category_products_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        is: /^[a-z]+$/i, // same as the previous example using real RegExp
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    created_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        is: /^[a-z]+$/i, // same as the previous example using real RegExp
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // will only allow numbers
        isInt: true, // checks for valid integers
        is: /^[a-z]+$/i, // same as the previous example using real RegExp
        isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
      },
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

// Export model Product
export default Product;
