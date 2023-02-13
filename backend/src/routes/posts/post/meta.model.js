import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const PostMeta = db.define(
  TABLES.tbl_post_metas,
  {
    meta_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      validate: {
        isInt: true,
        isNumeric: true,
      },
    },
    post_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Post ID is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Post ID is required.',
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

export default PostMeta;
