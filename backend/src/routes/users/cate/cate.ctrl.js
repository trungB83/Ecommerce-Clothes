import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
import UserPermission from '../permission/permission.model.js';
const { User, UserCate } = models;

// get all user cates
export const getUserCates = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await UserCate.findAll({
      include: [
        {
          model: User,
          as: 'users',
          attributes: TABLES.tbl_users.default_attributes,
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

// get user cate by id
export const getUserCateById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await UserCate.findOne({
      where: {
        user_cate_id: id,
      },
      include: [
        { model: UserPermission, as: 'permissions' },
        {
          model: User,
          as: 'users',
          attributes: TABLES.tbl_users.default_attributes,
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
        error: `User Cate ID = ${id} is not found.`,
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

// create a new user cate
export const createUserCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await UserCate.create(req.body);
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

// update user cate by id
export const updateUserCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await UserCate.update(req.body, {
      where: {
        user_cate_id: id,
      },
    });
    const updatedData = await UserCate.findOne({
      where: {
        user_cate_id: id,
      },
    });
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

// delete user cate by id
export const deleteUserCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await UserCate.findOne({
      where: {
        user_cate_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User category ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await UserCate.destroy({
      where: {
        user_cate_id: id,
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
