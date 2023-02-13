import UserCateMeta from './cate-meta.model.js';

// get all user cate metas
export const getUserCateMetas = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await UserCateMeta.findAll();
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

// get user cate meta by id
export const getUserCateMetaById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await UserCateMeta.findOne({
      where: {
        meta_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User Cate Meta ID = ${id} is not found.`,
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

// create a new user cate meta
export const createUserCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await UserCateMeta.create(req.body);
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

// update user cate meta by id
export const updateUserCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await UserCateMeta.update(req.body, {
      where: {
        meta_id: id,
      },
    });
    const updatedData = await UserCateMeta.findOne({
      where: {
        meta_id: id,
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

// delete user cate meta by id
export const deleteUserCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await UserCateMeta.findOne({
      where: {
        meta_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User category meta ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await UserCateMeta.destroy({
      where: {
        meta_id: id,
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
