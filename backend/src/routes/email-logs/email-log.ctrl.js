import { TABLES } from '../../configs/database.js';
import models from '../models.js';
const { EmailLog, User } = models;

// get all email logs
export const getEmails = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await EmailLog.findAll();
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

// get email by id
export const getEmailById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await EmailLog.findOne({
      where: {
        mail_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Email ID = ${id} is not found.`,
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

// create a new email
export const createEmail = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await EmailLog.create(req.body);
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

// update email by id
export const updateEmail = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await EmailLog.findOne({
      where: {
        mail_id: id,
      },
    });

    if (!data) {
      return res.status(500).send({
        error: `Email ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await EmailLog.update(req.body, {
      where: {
        mail_id: id,
      },
    });
    const updatedData = await EmailLog.findOne({
      where: {
        mail_id: id,
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

// delete email by id
export const deleteEmail = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await EmailLog.findOne({
      where: {
        mail_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Email ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await EmailLog.destroy({
      where: {
        mail_id: id,
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
