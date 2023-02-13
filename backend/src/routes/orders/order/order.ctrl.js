import { Sequelize } from 'sequelize';
import models from '../../models.js';
const { Order, OrderItem, Payment, Deliver, User } = models;
const Op = Sequelize.Op;
// get all orders
export const getOrders = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'order_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    const data = await Order.findAll({
      where: {
        [Op.or]: [{ fullname: { [Op.like]: `%${keyword}%` } }, { address: { [Op.like]: `%${keyword}%` } }, { description: { [Op.like]: `%${keyword}%` } }],
      },
      order: [[orderBy, order]],
      include: [
        { model: Payment, as: 'payment' },
        { model: Deliver, as: 'deliver' },
        { model: User, as: 'author' },
        { model: OrderItem, as: 'order_items' },
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

// get order by id
export const getOrderById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Order.findOne({
      where: {
        order_id: id,
      },
      include: [
        { model: Payment, as: 'payment' },
        { model: Deliver, as: 'deliver' },
        { model: User, as: 'author' },
        { model: OrderItem, as: 'order_items' },
      ],
    });
    if (!data) {
      return res.status(500).send({
        error: `Order ID = ${id} is not found.`,
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

// create a new order
export const createOrder = async (req, res) => {
  const start = new Date().getTime();
  try {
    let order_items = req?.body?.order_items;
    if (!order_items || order_items.length <= 0) {
      return res.status(500).send({
        error: 'There is no order item in your order.',
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    const data = await Order.create(req.body);
    if (data?.order_id) {
      order_items = req?.body?.order_items?.map((item) => ({ ...item, order_id: data?.order_id }));
      order_items = await OrderItem.bulkCreate(order_items);
    }
    return res.status(201).send({
      data: { ...data?.dataValues, order_items },
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

// update order by id
export const updateOrder = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    let data = await Order.findOne({
      where: {
        order_id: id,
      },
      include: [{ model: OrderItem, as: 'order_items' }],
    });
    if (!data) {
      return res.status(500).send({
        error: `Order ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    let order_items = req?.body?.order_items;
    if (!order_items || order_items.length <= 0) {
      return res.status(500).send({
        error: 'There is no order item in your order.',
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Order.update(req.body, {
      where: {
        order_id: id,
      },
    });
    if (data?.order_id) {
      order_items = req?.body?.order_items?.map((item) => ({ ...item, order_id: data?.order_id }));
      order_items = await OrderItem.bulkCreate(order_items, { updateOnDuplicate: ['product_id', 'name', 'price', 'quantity'] });
      const removedOrderItems = data?.order_items?.filter((currentOrderItem) => !order_items?.find((newOrderItem) => newOrderItem?.order_item_id === currentOrderItem?.order_item_id)).map((currentOrderItem) => currentOrderItem.order_item_id);
      if (removedOrderItems.length > 0) {
        OrderItem.destroy({
          where: {
            order_item_id: removedOrderItems,
          },
        });
      }
    }
    const updatedData = await Order.findOne({
      where: {
        order_id: id,
      },
      include: [
        { model: Payment, as: 'payment' },
        { model: Deliver, as: 'deliver' },
        { model: User, as: 'author' },
        { model: OrderItem, as: 'order_items' },
      ],
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

// delete order by id
export const deleteOrder = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Order.findOne({
      where: {
        order_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Order ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Order.destroy({
      where: {
        order_id: id,
      },
    });
    await OrderItem.destroy({
      where: {
        order_id: id,
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
