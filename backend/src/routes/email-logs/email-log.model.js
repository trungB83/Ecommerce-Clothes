import { Sequelize } from 'sequelize';
import db from '../../configs/database.js';
import { TABLES } from '../../configs/database.js';

const { DataTypes } = Sequelize;

const EmailLog = db.define(
  TABLES.tbl_email_logs,
  {
    mail_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      validate: {
        isInt: true,
      },
    },
    timestamp: {
      type: Sequelize.DATE,
      validate: {
        isNull: true,
        isDate: true,
      },
    },
    to: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email To is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Email To is required.',
        },
      },
    },
    subject: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Subject is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Subject is required.',
        },
      },
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Message is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Message is required.',
        },
      },
    },
    headers: {
      type: Sequelize.STRING,
    },
    error: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

export default EmailLog;
