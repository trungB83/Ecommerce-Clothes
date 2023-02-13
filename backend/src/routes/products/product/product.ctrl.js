import models from '../../models.js';
import { Sequelize } from 'sequelize';
import { TABLES } from '../../../configs/database.js';
const Op = Sequelize.Op;
const { Product, ProductCate, ProductComment, User } = models;

// get all products
export const getProducts = async (req, res) => {
  const start = new Date().getTime();
  try {
    let orderBy = req.query.orderBy || 'product_id';
    let order = req.query.order || 'DESC';
    let keyword = req.query.keyword || '';
    let attributes = req.query.attributes || TABLES.tbl_products.default_attributes;

    const data = await Product.findAll({
      attributes,
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${keyword}%` } }, { description: { [Op.like]: `%${keyword}%` } }, { content: { [Op.like]: `%${keyword}%` } }],
      },
      order: [[orderBy, order]],
      include: [
        {
          model: ProductCate,
          as: 'product_cate',
          attributes: TABLES.tbl_product_cates.default_attributes,
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        {
          model: ProductComment,
          as: 'comments',
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

// get product by id
export const getProductById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Product.findOne({
      where: {
        product_id: id,
      },
      include: [
        {
          model: ProductCate,
          as: 'product_cate',
          attributes: TABLES.tbl_product_cates.default_attributes,
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        {
          model: ProductComment,
          as: 'comments',
          include: [
            { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
            { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
          ],
        },
        { model: User, as: 'author', attributes: TABLES.tbl_users.default_attributes },
        { model: User, as: 'editor', attributes: TABLES.tbl_users.default_attributes },
      ],
    });

    if (!data) {
      return res.status(500).send({
        error: `Product ID = ${id} is not found.`,
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

// create a new product
export const createProduct = async (req, res) => {
  const start = new Date().getTime();
  try {
    const data = await Product.create(req.body);
    return res.status(201).send({
      data,
      success: true,
      exe_time: new Date().getTime() - start,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

// update product by id
export const updateProduct = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Product.findOne({
      where: {
        product_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Product.update(req.body, {
      where: {
        product_id: id,
      },
    });
    const updatedData = await Product.findOne({
      where: {
        product_id: id,
      },
      individualHooks: true,
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

// Delete product by id
export const deleteProduct = async (req, res) => {
  const start = new Date().getTime();
  try {
    const {
      params: { id },
    } = req;
    const data = await Product.findOne({
      where: {
        product_id: id,
      },
    });
    if (!data) {
      return res.status(500).send({
        error: `User ID = ${id} is not found.`,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
    await Product.destroy({
      where: {
        product_id: id,
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
