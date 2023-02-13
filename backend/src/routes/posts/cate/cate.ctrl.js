import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { Post, PostCate, User } = models;

// get all post categories
export const getPostCates = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await PostCate.findAll({
      include: [
        {
          model: Post,
          as: 'posts',
          attributes: TABLES.tbl_posts.default_attributes,
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
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// get category post by id
export const getPostCateById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await PostCate.findOne({
      where: {
        post_cate_id: id,
      },
      include: [
        {
          model: Post,
          as: 'posts',
          attributes: TABLES.tbl_posts.default_attributes,
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
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// create a new category posts
export const createPostCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await PostCate.create(req.body);
    return res.status(201).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);

    return res.status(500).send({
      error: error,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// update category post by id
export const updatePostCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await PostCate.findOne({
      where: {
        post_cate_id: id,
      },
    });

    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await PostCate.update(req.body, {
      where: {
        post_cate_id: id,
      },
      individualHooks: true,
    });
    const updatedData = await PostCate.findOne({
      where: {
        post_cate_id: id,
      },
    });
    return res.status(201).send({
      data: updatedData,
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

// delete category post by id
export const deletePostCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await PostCate.findOne({
      where: {
        post_cate_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await PostCate.destroy({
      where: {
        post_cate_id: id,
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
