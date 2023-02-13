import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const Slider = db.define(
  TABLES.tbl_sliders,
  {
    slider_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      validate: {
        isInt: true,
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
    description: {
      type: Sequelize.STRING(300),
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
    slider_cate_id: {
      type: Sequelize.BIGINT,
    },
    created_by: {
      type: Sequelize.BIGINT,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
      },
    },
    updated_by: {
      type: Sequelize.BIGINT,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
      },
    },
    created_at: {
      field: 'created_at',
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },

    updated_at: {
      field: 'updated_at',
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
  },
  {
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

// Export model Post
export default Slider;
