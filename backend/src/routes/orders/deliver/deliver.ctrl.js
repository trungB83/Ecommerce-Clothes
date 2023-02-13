import { Sequelize } from 'sequelize';
import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { Order, OrderItem, Payment, Deliver, User } = models;
const Op = Sequelize.Op;

// get all delivers
export const getDelivers = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'deliver_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    const data = await Deliver.findAll({
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${keyword}%` } }, { status: { [Op.like]: `%${keyword}%` } }],
      },
      include: [
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
      ],
      order: [[orderBy, order]],
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

// get deliver by id
export const getDeliverById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Deliver.findOne({
      where: {
        deliver_id: id,
      },
      include: [
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
      ],
    });
    if (!data) {
      return res.status(500).send({
        error: `Deliver ID = ${id} is not found.`,
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

// create a new deliver
export const createDeliver = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await Deliver.create(req.body);
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

// update deliver by id
export const updateDeliver = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await Deliver.update(req.body, {
      where: {
        deliver_id: id,
      },
    });
    const updatedData = await Deliver.findOne({
      where: {
        deliver_id: id,
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

// delete deliver by id
export const deleteDeliver = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Deliver.findOne({
      where: {
        deliver_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Deliver ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Deliver.destroy({
      where: {
        deliver_id: id,
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
