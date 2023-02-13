import { Sequelize } from 'sequelize';
import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { Order, OrderItem, Payment, Deliver, User } = models;
const Op = Sequelize.Op;

// get all payment
export const getPayments = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'payment_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    const data = await Payment.findAll({
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${keyword}%` } }, { description: { [Op.like]: `%${keyword}%` } }],
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

// get payment by id
export const getPaymentById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Payment.findOne({
      where: {
        payment_id: id,
      },
      include: [
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
      ],
    });
    if (!data) {
      return res.status(500).send({
        error: `Payment ID = ${id} is not found.`,
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

// create a new payment
export const createPayment = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await Payment.create(req.body);
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

// update payment by id
export const updatePayment = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await Payment.update(req.body, {
      where: {
        payment_id: id,
      },
    });
    const updatedData = await Payment.findOne({
      where: {
        payment_id: id,
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

// delete payment by id
export const deletePayment = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Payment.findOne({
      where: {
        payment_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Payment method ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Payment.destroy({
      where: {
        payment_id: id,
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
