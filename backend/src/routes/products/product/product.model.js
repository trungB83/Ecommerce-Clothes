import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';
import { generateSlug } from '../../../helpers/common.helper.js';

const { DataTypes } = Sequelize;

const Product = db.define(
  TABLES.tbl_products.table,
  {
    product_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      validate: {
        isNumeric: true,
        isInt: true,
      },
    },
    sku: {
      type: Sequelize.STRING(20),
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
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Price is required.',
        },
        isNumeric: true,
      },
    },
    sale_price: {
      type: Sequelize.DOUBLE,
    },
    image: {
      type: Sequelize.STRING(200),
    },
    description: {
      type: Sequelize.TEXT('long'),
    },

    content: {
      type: Sequelize.TEXT('long'),
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
    slug: {
      type: Sequelize.STRING(500),
    },
    product_cate_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Product Cate ID is required.',
        },
      },
    },
    created_by: {
      type: Sequelize.BIGINT,
      allowNull: true,
      validate: {
        isNumeric: true,
        isInt: true,
        isAlphanumeric: {
          args: true,
          msg: 'Allow only number and charator! Please enter right value',
        },
      },
    },
    updated_by: {
      type: Sequelize.BIGINT,
      allowNull: true,
      validate: {
        isNumeric: true,
        isInt: true,
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
    hooks: {
      beforeCreate: function (post, options) {
        if (!post.slug) {
          post.slug = generateSlug(post.name);
        }
      },
      beforeUpdate: function (post, options) {
        if (post?.dataValues?.name !== post?._previousDataValues.name) {
          post.dataValues.slug = generateSlug(post.name);
        }
      },
    },
  }
);

export default Product;
