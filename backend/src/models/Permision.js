// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Permision = db.define(
  "tbl_permisions",
  {
    // Define attributes
    permision_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
    },
    permision_name: {
      type: Sequelize.STRING,
    },
    permision_description: {
      type: Sequelize.STRING,
    },
    permision_parent_id: {
      type: Sequelize.INTEGER,
    },
    created_by: {
      type: Sequelize.INTEGER,
    },
    updated_by: {
      type: Sequelize.INTEGER,
    },
    created_at: {
      field: "created_at",
      type: DataTypes.DATE,
    },

    updated_at: {
      field: "updated_at",
      type: DataTypes.DATE,
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
export default Permision;
