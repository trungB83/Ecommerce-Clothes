import PostCateMeta from './cate-meta.model.js';

// get all post cate metas
export const getPostCateMetas = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await PostCateMeta.findAll();
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

// get post cate meta by id
export const getPostCateMetaById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await PostCateMeta.findOne({
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

// create a new post cate meta
export const createPostCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await PostCateMeta.create(req.body);
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

// update post cate meta by id
export const updatePostCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await PostCateMeta.update(req.body, {
      where: {
        meta_id: id,
      },
    });
    const updatedData = await PostCateMeta.findOne({
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

// delete post cate meta by id
export const deletePostCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await PostCateMeta.findOne({
      where: {
        meta_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Post category meta ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await PostCateMeta.destroy({
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
