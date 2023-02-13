import { Sequelize } from 'sequelize';
import models from '../../models.js';
const { Order, OrderItem, Payment, Deliver, User } = models;
const Op = Sequelize.Op;

// get all order item
export const getOrderItems = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'order_item_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    const data = await OrderItem.findAll({
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${keyword}%` } }, { price: { [Op.like]: `%${keyword}%` } }],
      },
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

// get order item by id
export const getOrderItemById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await OrderItem.findOne({
      where: {
        order_item_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Order item ID = ${id} is not found.`,
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

// create a new order item
export const createOrderItem = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await OrderItem.create(req.body);
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

// update order item by id
export const updateOrderItem = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await OrderItem.update(req.body, {
      where: {
        order_item_id: id,
      },
    });
    const updatedData = await OrderItem.findOne({
      where: {
        order_item_id: id,
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

// delete order item by id
export const deleteOrderItem = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await OrderItem.findOne({
      where: {
        order_item_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Order Item ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await OrderItem.destroy({
      where: {
        order_item_id: id,
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
