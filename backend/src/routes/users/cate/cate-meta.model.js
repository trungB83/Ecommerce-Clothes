import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const UserCateMeta = db.define(
  TABLES.tbl_user_cate_metas,
  {
    meta_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isInt: true,
        isNumeric: true,
      },
    },
    user_cate_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'User Cate ID is required.',
        },
      },
    },
    meta_key: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Meta key is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Meta key is required.',
        },
      },
    },
    meta_value: {
      type: Sequelize.TEXT('long'),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Meta value is required.',
        },
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default UserCateMeta;
