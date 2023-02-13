import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { File, FileCate, User } = models;

// get all file cate
export const getFileCates = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await FileCate.findAll();
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

// get file cate by id
export const getFileCateById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await FileCate.findOne({
      where: {
        file_cate_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `File Cate ID = ${id} is not found.`,
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

// create a new file cate
export const createFileCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await FileCate.create(req.body);
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

// update file cate by id
export const updateFileCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await FileCate.update(req.body, {
      where: {
        file_cate_id: id,
      },
    });
    const updatedData = await FileCate.findOne({
      where: {
        file_cate_id: id,
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

// delete file cate by id
export const deleteFileCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await FileCate.findOne({
      where: {
        file_cate_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `File category ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await FileCate.destroy({
      where: {
        file_cate_id: id,
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
