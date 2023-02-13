// import sequelize
import { Sequelize } from 'sequelize';
// import connection
import db, { TABLES } from '../../../configs/database.js';

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const ProductComment = db.define(
  TABLES.tbl_product_comments,
  {
    comment_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    product_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Product ID is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Product ID is required.',
        },
      },
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Comment content is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Comment content is required.',
        },
      },
    },
    parent_id: {
      type: Sequelize.BIGINT,
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
    rate: {
      type: Sequelize.INTEGER,
      validate: {
        isNull: {
          args: false,
          msg: 'Not allow blank! Please enter value',
        },
        notEmpty: {
          args: true,
          msg: 'Not allow blank! Please enter value',
        },
      },
    },
    created_by: {
      type: Sequelize.BIGINT,
    },
    updated_by: {
      type: Sequelize.BIGINT,
    },
    created_at: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updated_at: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default ProductComment;
