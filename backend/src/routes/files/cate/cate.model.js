import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const FileCate = db.define(
  TABLES.tbl_file_cates,
  {
    file_cate_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      validate: {
        isInt: true,
        isNumeric: true,
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
    slug: {
      type: Sequelize.STRING(500),
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: Sequelize.STRING,
    },
    image: {
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
export default FileCate;
