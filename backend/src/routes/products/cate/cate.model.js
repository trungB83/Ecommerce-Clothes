import { Sequelize } from 'sequelize';
import db from '../../../configs/database.js';
import { TABLES } from '../../../configs/database.js';
import { generateSlug } from '../../../helpers/common.helper.js';

const { DataTypes } = Sequelize;

const CategoryProduct = db.define(
  TABLES.tbl_product_cates.table,
  {
    product_cate_id: {
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
      type: Sequelize.STRING(300),
    },
    image: {
      type: Sequelize.STRING(300),
    },
    parent_id: {
      type: Sequelize.BIGINT,
    },
    status: {
      type: Sequelize.STRING(20),
    },
    slug: {
      type: Sequelize.STRING(500),
      validate: {
        isUrl: true,
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
    hooks: {
      beforeCreate: function (cate, options) {
        if (!cate.slug) {
          cate.slug = generateSlug(cate.name);
        }
      },
      beforeUpdate: function (cate, options) {
        if (cate?.dataValues?.name !== cate?._previousDataValues.name) {
          cate.dataValues.slug = generateSlug(cate.name);
        }
      },
    },
  }
);

export default CategoryProduct;
