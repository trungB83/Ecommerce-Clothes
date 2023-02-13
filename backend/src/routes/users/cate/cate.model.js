import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const UserCate = db.define(
  TABLES.tbl_user_cates.table,
  {
    user_cate_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(300),
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
      type: Sequelize.STRING(100),
    },
    created_by: {
      type: Sequelize.INTEGER,
    },
    updated_by: {
      type: Sequelize.INTEGER,
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
export default UserCate;
