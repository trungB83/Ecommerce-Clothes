import moment from 'moment';
import path from 'path';
import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { File, FileCate, User } = models;

// get all files
export const getFiles = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'file_id';
    let order = req.query.order || 'DESC';

    let keyword = req.query.keyword || '';
    const data = await File.findAll({
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

// get file by id
export const getFileById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await File.findOne({
      where: {
        file_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `File ID = ${id} is not found.`,
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

// update file by id
export const updateFile = async (req, res) => {
  const start = new Date().getTime();
  const { params, db, query } = req;
  const { body } = req;
  const field = query.field ? query.field : 'tep_tin_id';
  try {
    const {
      params: { id },
    } = req;
    const data = await File.findOne({
      where: {
        file_id: id,
      },
    });

    if (data) {
      const updateField = {
        name: body.name,
        description: body.description,
        file_cate_id: body.nhom_tep_tin_id ? body.nhom_tep_tin_id : 1,
        user_id: body.user_id ? body.user_id : 1,
        status: body.status ? body.status : 'active',
      };
      await File.update(
        {
          name: updateField.name,
          description: updateField.description,
          file_cate_id: updateField.file_cate_id,
          updated_by: updateField.user_id,
          updated_at: moment(new Date()).format(),
          status: updateField.status,
        },

        {
          where: {
            file_id: id,
          },
        }
      );

      const updatedData = await File.findOne({
        where: {
          file_id: id,
        },
      });
      return res.status(201).send({
        data: updatedData,
        success: true,
        exe_time: new Date().getTime() - start,
      });
    }
    return res.status(500).send({
      error: `File ID = ${id} is not found.`,
      success: false,
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

// delete file by id
export const deleteFile = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await File.findOne({
      where: {
        file_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `File ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await File.destroy({
      where: {
        file_id: id,
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

export const createFile = async (req, res) => {
  const start = new Date().getTime();
  const body = req.body;
  const { db, user } = req;
  try {
    if (!req.file) {
      return res.status(500).send({
        data: rows,
        msg: 'Unable to find file',
        exe_time: new Date().getTime() - start,
      });
    }
    const currentDate = moment();
    const month = currentDate.format('M');
    const year = currentDate.format('YYYY');
    const fileUrl = `uploads/${year}/${month}/${req.file.filename}`;

    const fileField = {
      url: fileUrl,
      name: path.basename(req.file.originalname, path.extname(req.file.originalname)),
      description: body.description ? body.description : '',
      file_cate_id: body.file_cate_id && body.file_cate_id !== '' ? body.file_cate_id : '1',
      user_id: body.user_id ? body.user_id : '1',
    };
    const data = await File.create({
      url: fileField.url,
      name: fileField.name,
      description: fileField.description,
      file_cate_id: fileField.file_cate_id,
      created_by: fileField.user_id,
    });
    return res.status(201).send({
      data: data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    return res.status(500).send({
      data: [],
      msg: 'internal server error',
      exe_time: new Date().getTime() - start,
    });
  }
};

// todo: able to upload multiple files
export const createFiles = (req, res) => {
  if (req.files.length) {
    console.log(req.files);

    req.flash('success', 'Files Uploaded.');
  }
  return res.redirect('/');
};
