// validate field, response lỗi (vừa log lỗi vừa trả về cho user thấy đc lỗi)
// cần có filter (theo tên , giá , kích cỡ , từ khóa, danh mục, hỗ trợ lấy danh sách sản phẩm, phân trang api)
// 
// Cần tìm hiểu HOST STATUS 

// Import Product Model
import Product from "../models/Product.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const product = await Product.findAndCountAll({limit:2});
    res.send({
      data: product,
      success: true,
      message: "get product ok",
    });
    
  } catch (err) {
    console.log(err);
  }
};

// Get product by id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        product_id: req.params.id,
      },
    });
    res.send(product[0]);
  } catch (err) {
    console.log(err);
  }
};

// Get all products
export const getProductsByPrice = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        product_id: req.params.id,
      },
    });
    res.send({
      data: product,
      success: true,
      message: "get product ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get products by Category
export const getProductByCategory = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        category_products_id : req.params.id
      },
    });
    res.send({
      data: product,
      success: true,
      message: "get product ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update product by id
export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        product_id: req.params.id,
      },
    });
    res.json({
      message: "Product Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete product by id
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        product_id: req.params.id,
      },
    });
    res.json({
      message: "Product Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
