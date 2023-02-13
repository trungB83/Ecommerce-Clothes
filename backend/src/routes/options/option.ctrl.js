import { Sequelize } from 'sequelize';
import models from '../models.js';
const { Option } = models;
const Op = Sequelize.Op;

// get all options
export const getOptions = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'option_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    const data = await Option.findAll({
      where: {
        [Op.or]: [{ option_name: { [Op.like]: `%${keyword}%` } }, { option_value: { [Op.like]: `%${keyword}%` } }],
      },
      order: [[orderBy, order]],
    });
    return res.status(200).send({
      data,
      options: data?.reduce((obj, item) => Object.assign(obj, { [item.option_name]: item.option_value }), {}),
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

// get option by id
export const getOptionById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Option.findOne({
      where: {
        option_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Option ID = ${id} is not found.`,
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

// create a new option
export const createOption = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await Option.create(req.body);
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

// update option by id
export const updateOption = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Option.findOne({
      where: {
        option_id: id,
      },
    });

    if (!data) {
      return res.status(500).send({
        error: `Option ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Option.update(req.body, {
      where: {
        option_id: id,
      },
    });
    const updatedData = await Option.findOne({
      where: {
        option_id: id,
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

// delete option by id
export const deleteOption = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Option.findOne({
      where: {
        option_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Option ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Option.destroy({
      where: {
        option_id: id,
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
