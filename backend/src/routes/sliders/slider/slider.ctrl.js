import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { Slider, SliderCate, User } = models;

// get all sliders
export const getSliders = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'slider_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    const data = await Slider.findAll({
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${keyword}%` } }, { description: { [Op.like]: `%${keyword}%` } }, { status: { [Op.like]: `%${keyword}%` } }],
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

// get slider by id
export const getSliderById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Slider.findOne({
      where: {
        slider_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Slider ID = ${id} is not found.`,
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

// create a new Slider
export const createSlider = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await Slider.create(req.body);
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

// update slider by id
export const updateSlider = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Slider.findOne({
      where: {
        slider_id: id,
      },
    });

    if (!data) {
      return res.status(500).send({
        error: `Slider ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Slider.update(req.body, {
      where: {
        slider_id: id,
      },
    });
    const updatedData = await Slider.findOne({
      where: {
        slider_id: id,
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

// delete slider by id
export const deleteSlider = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Slider.findOne({
      where: {
        slider_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Slider ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Slider.destroy({
      where: {
        slider_id: id,
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
