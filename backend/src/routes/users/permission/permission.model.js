import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const UserPermission = db.define(
  TABLES.tbl_user_permissions,
  {
    permission_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
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
    module: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Module is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Module is required.',
        },
      },
    },
    permission: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Permission is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Permission is required.',
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

export default UserPermission;
