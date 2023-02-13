import { Sequelize } from 'sequelize';
import db, { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const Data = db.define(
  TABLES.tbl_order_payments,
  {
    payment_id: {
      type: Sequelize.TINYINT,
      primaryKey: true,
      autoIncrement: true,
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
    description: {
      type: Sequelize.STRING(200),
    },
    image: {
      type: Sequelize.STRING(500),
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
