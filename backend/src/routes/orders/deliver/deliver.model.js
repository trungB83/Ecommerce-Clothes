import { Sequelize } from 'sequelize';
import db, { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const Deliver = db.define(
  TABLES.tbl_order_delivers,
  {
    deliver_id: {
      type: Sequelize.INTEGER,
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
    price: {
      type: Sequelize.DOUBLE,
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
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
      validate: {
        notEmpty: {
          args: true,
          msg: 'Not allow blank',
        },
      },
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

export default Deliver;
