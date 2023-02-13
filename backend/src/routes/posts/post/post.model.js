import { Sequelize } from 'sequelize';
import db, { TABLES } from '../../../configs/database.js';
import { generateSlug } from '../../../helpers/common.helper.js';

const { DataTypes } = Sequelize;

const Post = db.define(
  TABLES.tbl_posts.table,
  {
    post_id: {
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
    content: {
      type: Sequelize.TEXT('long'),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Post content is required.',
        },
        notEmpty: {
          args: true,
          msg: 'Post content is required.',
        },
      },
    },
    image: {
      type: Sequelize.STRING(300),
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
    post_cate_id: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Post Cate ID is required.',
        },
      },
    },
    slug: {
      type: Sequelize.STRING(300),
      unique: true,
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

export default Post;
