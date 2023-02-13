import { Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';

const { DataTypes } = Sequelize;

const User = db.define(
  TABLES.tbl_users.table,
  {
    user_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      validate: {
        isInt: true,
        isNumeric: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'E-mail is required.',
        },
        isEmail: {
          args: true,
          msg: 'E-mail is invalid format.',
        },
      },
    },
    username: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already in use.',
      },
      validate: {
        notNull: {
          args: true,
          msg: 'Username is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Username is required.',
        },
      },
    },
    fullname: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Fullname is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Fullname is required.',
        },
      },
    },
    password: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Password is required.',
        },
      },
    },
    gender: {
      type: Sequelize.TINYINT,
      validate: {
        isInt: true,
        isNumeric: true,
      },
    },
    phone: {
      type: Sequelize.STRING(100),
    },
    address: {
      type: Sequelize.STRING(200),
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
    user_cate_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: true,
        isInt: true,
        notNull: {
          args: true,
          msg: 'User Cate ID is required.',
        },
      },
    },
    token: {
      type: Sequelize.STRING,
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
    instanceMethods: {},
    hooks: {
      beforeCreate: function (user, options) {
        const hashed_password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
        user.password = hashed_password;
      },
      afterCreate: function (user, options) {},
    },
  }
);

User.prototype.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

User.prototype.destroyToken = function (token) {
  return jwt.destroy(token);
};

User.prototype.generateAccessToken = function () {
  return jwt.sign(
    {
      user_id: this.get('user_id'),
      email: this.get('email'),
      username: this.get('username'),
      fullname: this.get('fullname'),
      status: this.get('status'),
      user_cate_id: this.get('user_cate_id'),
    },
    process.env.AUTH_ACCESS_SECRET,
    { expiresIn: process.env.AUTH_ACCESS_TOKEN_LIFE }
  );
};

User.prototype.generateRefreshToken = function () {
  return jwt.sign(
    {
      user_id: this.get('user_id'),
      email: this.get('email'),
      username: this.get('username'),
      fullname: this.get('fullname'),
      status: this.get('status'),
      user_cate_id: this.get('user_cate_id'),
    },
    process.env.AUTH_REFRESH_SECRET,
    { expiresIn: process.env.AUTH_REFRESH_TOKEN_LIFE }
  );
};

// Export model Post
export default User;
