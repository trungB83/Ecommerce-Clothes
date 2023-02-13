import { Sequelize } from 'sequelize';
import models from '../../models.js';
import { TABLES } from '../../../configs/database.js';
const Op = Sequelize.Op;
const { Post, PostCate, PostComment, User } = models;

// get all posts
export const getPosts = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'post_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    let attributes = req.query.attributes || TABLES.tbl_posts.default_attributes;

    const data = await Post.findAll({
      attributes,
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${keyword}%` } }, { description: { [Op.like]: `%${keyword}%` } }, { content: { [Op.like]: `%${keyword}%` } }],
      },
      order: [[orderBy, order]],
      include: [
        {
          model: PostCate,
          as: 'post_cate',
          attributes: TABLES.tbl_post_cates.default_attributes,
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        {
          model: PostComment,
          as: 'comments',
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
      ],
    });

    return res.status(200).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// get post by id
export const getPostById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Post.findOne({
      where: {
        post_id: id,
      },
      include: [
        {
          model: PostCate,
          as: 'post_cate',
          attributes: TABLES.tbl_post_cates.default_attributes,
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        {
          model: PostComment,
          as: 'comments',
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
      ],
    });
    if (!data) {
      return res.status(500).send({
        error: `Post ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    return res.status(200).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// create a new post
export const createPost = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await Post.create(req.body);
    return res.status(201).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// update post by id
export const updatePost = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Post.findOne({
      where: {
        post_id: id,
      },
    });

    if (data) {
      await Post.update(req.body, {
        where: {
          post_id: id,
        },
        individualHooks: true,
      });
      const updatedData = await Post.findOne({
        where: {
          post_id: id,
        },
      });
      return res.status(201).send({
        data: updatedData,
        success: true,
        exe_time: new Date().getTime() - start,
      });
    }
    return res.status(500).send({
      error: `Post ID = ${id} is not found.`,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// delete post by id
export const deletePost = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Post.findOne({
      where: {
        post_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Post category ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Post.destroy({
      where: {
        post_id: id,
      },
    });
    return res.status(200).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};
