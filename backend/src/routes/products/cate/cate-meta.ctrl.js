import ProductCateMeta from './cate-meta.model.js';

// get all product cate metas
export const getProductCateMetas = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await ProductCateMeta.findAll();
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

// get product cate meta by id
export const getProductCateMetaById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await ProductCateMeta.findOne({
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

// create a new product cate meta
export const createProductCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await ProductCateMeta.create(req.body);
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

// update product cate meta by id
export const updateProductCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    await ProductCateMeta.update(req.body, {
      where: {
        meta_id: id,
      },
    });
    const updatedData = await ProductCateMeta.findOne({
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

// delete product cate meta by id
export const deleteProductCateMeta = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await ProductCateMeta.findOne({
      where: {
        meta_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `Product category meta ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await ProductCateMeta.destroy({
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
