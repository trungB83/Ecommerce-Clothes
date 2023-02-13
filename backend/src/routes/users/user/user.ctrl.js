import { Sequelize } from 'sequelize';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import models from '../../models.js';
import { TABLES } from '../../../configs/database.js';
import { defaultEmailTemplate, sendMail } from '../../../helpers/email.helper.js';
const Op = Sequelize.Op;
const { User, UserCate, UserPermission } = models;
dotenv.config();

// login
export const login = async (req, res) => {
  const start = new Date().getTime();
  try {
    const username = req.body?.username;
    const password = req.body?.password;
    const user = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Username is not found.',
        exe_time: new Date().getTime() - start,
      });
    }
    const isValidPassword = user.isValidPassword(password);
    if (!isValidPassword) {
      return res.status(401).json({
        exe_time: new Date().getTime() - start,
        success: false,
        error: 'Password is not correct.',
      });
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    await user.update({ ...user, token: accessToken });
    const emailHtml = `<p>Xin chào: ${user?.fullname || user?.email}, bạn vừa đăng nhập vào hệ thống web.</p>`;
    await sendMail({
      from: 'trungbui83@thietkeweb5ngay.com',
      to: 'luonghop.lc@gmail.com',
      subject: 'Thông báo đăng nhập tài khoản',
      html: 'hello',
      text: 'hello'
      // html: defaultEmailTemplate('Thông báo đăng nhập tài khoản', emailHtml),
    });
    return res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      data: user,
      accessToken,
      refreshToken,
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

// logout
export const logout = async (req, res) => {
  const start = new Date().getTime();
  try {
    const body = req.body;
    const username = req.userInfo?.username;
    const user = await User.findOne({
      where: { username },
    });
    if (!user) {
      return res.status(500).json({
        success: false,
        error: 'User is not found.',
        exe_time: new Date().getTime() - start,
      });
    }
    await user.update({ ...user, token: '' });
    user.destroyToken(body?.accessToken);
    user.destroyToken(body?.refreshToken);

    return res.status(200).json({
      success: true,
      message: 'Logged out successfully',
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

// refresh token
export const refreshToken = async (req, res) => {
  const start = new Date().getTime();
  try {
    const refreshToken = req.body?.refreshToken;
    jwt.verify(refreshToken, process.env.AUTH_REFRESH_SECRET, async (err, decoded) => {
      if (err) {
        console.log('Verify refresh token error', err.message);
        return res.status(500).send({
          error: `Verify refresh token error: ${err?.message}.`,
          success: false,
          exe_time: new Date().getTime() - start,
        });
      }
      const user = await User.findOne({
        where: { username: decoded.username },
      });
      if (!user) {
        return res.status(500).json({
          success: false,
          error: 'User is not found.',
          exe_time: new Date().getTime() - start,
        });
      }
      const accessToken = user.generateAccessToken();
      await user.update({ ...user, token: accessToken });
      return res.status(200).json({
        success: true,
        message: 'Refresh access token successfully',
        accessToken,
        exe_time: new Date().getTime() - start,
      });
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

// register
export const register = async (req, res) => {
  const start = new Date().getTime();
  try {
    const { body } = req;
    const data = await User.findOne({
      where: {
        [Op.or]: [{ username: body?.username }, { email: body?.username }],
      },
    });
    if (data) {
      return res.status(500).send({
        error: `Username or email ${body?.username} was registered.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }

    const user = await User.create(body);
    return res.status(200).send({
      data: user,
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

// get all users
export const getUsers = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'user_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    let attributes = req.query.attributes || TABLES.tbl_users.default_attributes;
    const data = await User.findAll({
      attributes,
      where: {
        [Op.or]: [{ email: { [Op.like]: `%${keyword}%` } }, { username: { [Op.like]: `%${keyword}%` } }, { fullname: { [Op.like]: `%${keyword}%` } }],
      },
      order: [[orderBy, order]],
      include: [
        {
          model: UserCate,
          as: 'user_cate',
          attributes: TABLES.tbl_user_cates.default_attributes,
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

// get user by id
export const getUserById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await User.findOne({
      where: {
        user_id: id,
      },
      include: [
        {
          model: UserCate,
          as: 'user_cate',
          attributes: TABLES.tbl_user_cates.default_attributes,
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
        error: `User ID = ${id} is not found.`,
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

// create a new user
export const createUser = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await User.create(req.body);
    return res.status(201).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);
    return res.status(500).send({
      message: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// update user by id
export const updateUser = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await User.findOne({
      where: {
        user_id: id,
      },
    });

    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await User.update(req.body, {
      where: {
        user_id: id,
      },
    });

    const updatedData = await User.findOne({
      where: {
        user_id: id,
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

// delete user by id
export const deleteUser = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await User.findOne({
      where: {
        user_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await User.destroy({
      where: {
        user_id: id,
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
