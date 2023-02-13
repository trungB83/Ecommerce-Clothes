import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const UserCateAndPermissionRelation = db.define(
  TABLES.tbl_user_cate_and_permission_relation,
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isInt: true,
        isNumeric: true,
        notEmpty: {
          args: true,
          msg: 'Not allow blank',
        },
      },
    },
    user_cate_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    permission_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default UserCateAndPermissionRelation;
