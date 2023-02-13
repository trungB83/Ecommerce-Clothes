import { Sequelize } from 'sequelize';
import db, { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const Data = db.define(
  TABLES.tbl_order_item,
  {
    order_item_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: Sequelize.BIGINT,
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
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Name is required.',
        },
      },
    },
    image: {
      type: Sequelize.STRING(500),
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Quantity is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Quantity is required.',
        },
      },
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Price is required.',
        },
      },
    },
    sale_price: {
      type: Sequelize.DOUBLE,
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

export default Data;
