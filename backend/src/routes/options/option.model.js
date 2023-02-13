import { Sequelize } from 'sequelize';
import db from '../../configs/database.js';
import { TABLES } from '../../configs/database.js';

const Option = db.define(
  TABLES.tbl_options,
  {
    option_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      validate: {
        isInt: true,
      },
    },
    option_name: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Option name is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Option name is required.',
        },
      },
    },
    option_value: {
      type: Sequelize.TEXT('long'),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Option value is required.',
        },
      },
    },
    autoload: {
      type: Sequelize.STRING(20),
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

export default Option;
