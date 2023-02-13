import { Sequelize } from 'sequelize';
import db, { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const Order = db.define(
  TABLES.tbl_orders,
  {
    order_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    user_id: {
      type: Sequelize.BIGINT,
    },
    fullname: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Fullname is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Fullname is required.',
        },
      },
    },
    phone: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Phone is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Phone is required.',
        },
      },
    },
    address: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Address is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Address is required.',
        },
      },
    },
    order_total_price: {
      type: Sequelize.DOUBLE,
    },
    payment_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Payment method is required.',
        },
      },
    },
    deliver_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Deliver method is required.',
        },
      },
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive', 'completed', 'cancelled'),
      defaultValue: 'active',
    },
    description: {
      type: Sequelize.STRING(200),
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

export default Order;
