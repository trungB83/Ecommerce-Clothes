import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { Slider, SliderCate, User } = models;

// get all slider cates
export const getSliderCates = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await SliderCate.findAll();
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

// get slider cate by id
export const getSliderCateById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await SliderCate.findOne({
      where: {
        slider_cate_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Slider Cate ID = ${id} is not found.`,
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

// create a new slider cate
export const createSliderCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await SliderCate.create(req.body);
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

// update slider cate by id
export const updateSliderCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await SliderCate.update(req.body, {
      where: {
        slider_cate_id: id,
      },
    });
    const updatedData = await SliderCate.findOne({
      where: {
        slider_cate_id: id,
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

// delete slider cate by id
export const deleteSliderCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await SliderCate.findOne({
      where: {
        slider_cate_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Slider category ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await SliderCate.destroy({
      where: {
        slider_cate_id: id,
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
