import { TABLES } from '../../../configs/database.js';
import models from '../../models.js';
const { Product, ProductCate, User } = models;

// get all category product
export const getProductCates = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await ProductCate.findAll({
      include: [
        {
          model: Product,
          as: 'products',
          attributes: TABLES.tbl_product_cates.default_attributes,
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
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

// get category product by id
export const getProductCateById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await ProductCate.findOne({
      where: {
        product_cate_id: id,
      },
      include: [
        {
          model: Product,
          as: 'products',
          attributes: TABLES.tbl_product_cates.default_attributes,
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
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

// create a new category products
export const createProductCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await ProductCate.create(req.body);
    return res.status(201).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    console.log('internal server error', error.message);

    return res.status(500).send({
      error: error,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// update category product by id
export const updateProductCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await ProductCate.findOne({
      where: {
        product_cate_id: id,
      },
    });

    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await ProductCate.update(req.body, {
      where: {
        product_cate_id: id,
      },
      individualHooks: true,
    });
    const updatedData = await ProductCate.findOne({
      where: {
        product_cate_id: id,
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

// delete category product by id
export const deleteProductCate = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await ProductCate.findOne({
      where: {
        product_cate_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await ProductCate.destroy({
      where: {
        product_cate_id: id,
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
