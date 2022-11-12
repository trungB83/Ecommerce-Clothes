// validate field, response lỗi (vừa log lỗi vừa trả về cho user thấy đc lỗi)
// cần có order (theo tên , giá , kích cỡ , từ khóa, danh mục, hỗ trợ lấy danh sách sản phẩm, phân trang api)
//
// Cần tìm hiểu HOST STATUS

// Import Product Model
import Product from "../models/Product.js";
import { ValidationError } from "sequelize";
// Get all products
export const getProducts = async (req, res) => {
  try {
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let page = 0;
    if (Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }
    let size = 10;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
      size = sizeAsNumber;
    }
    const product = await Product.findAndCountAll({
      limit: size,
      offset: page * size,
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

// Get all products order by name (a-z)
export const getProductsOrderNameASC = async (req, res) => {
  try {
    const product = await Product.findAndCountAll({
      order: [["product_name", "ASC"]],
    });
    res.send({
      data: product,
      success: true,
      message: "get a-z product ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get all products order by name (z-a)
export const getProductsOrderNameDESC = async (req, res) => {
  try {
    const product = await Product.findAndCountAll({
      order: [["product_name", "DESC"]],
    });
    res.send({
      data: product,
      success: true,
      message: "get z-a product ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get all products order by price (low-high)
export const getProductsOrderPriceASC = async (req, res) => {
  try {
    const product = await Product.findAndCountAll({
      order: [["product_price", "ASC"]],
    });
    res.send({
      data: product,
      success: true,
      message: "get low-high product ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get all products order by price (z-a)
export const getProductsOrderPriceDESC = async (req, res) => {
  try {
    const product = await Product.findAndCountAll({
      order: [["product_price", "DESC"]],
    });
    res.send({
      data: product,
      success: true,
      message: "get high-low product ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get product by id
export const getProductById = async (req, res) => {
  console.log(req.params);
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
        category_products_id: req.params.id,
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
  } catch (e) {
    // catch (err) {
    //   console.log(err);
    // }
    const messages = {};
    if (e instanceof ValidationError) {
      e.errors.forEach((error) => {
        let message;
        switch (error.validatorKey) {
          case "isEmail":
            res.json({ message: "Please enter a valid email" });
            break;
          case "isDate":
            res.json({ message: "Please enter a valid date" });
            break;
          case "isInt":
            res.json({ message: "Please use an integer number" });
            break;
          case "is_null":
            res.json({ message: "Please complete this field" });
            break;
          case "not_unique":
            res.json({
              message: error.value + " is taken. Please choose another one",
            });
            error.path = error.path.replace("_UNIQUE", "");
        }
        messages[error.path] = message;
      });
    }
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
  } catch (e) {
    const messages = {};
    if (e instanceof ValidationError) {
      e.errors.forEach((error) => {
        let message;
        switch (error.validatorKey) {
          case "isEmail":
            res.json({ message: "Please enter a valid email" });
            break;
          case "isDate":
            res.json({ message: "Please enter a valid date" });
            break;
          case "isInt":
            res.json({ message: "Please use an integer number" });
            break;
          case "is_null":
            res.json({ message: "Please complete this field" });
            break;
          case "not_unique":
            res.json({
              message: error.value + " is taken. Please choose another one",
            });
            error.path = error.path.replace("_UNIQUE", "");
        }
        messages[error.path] = message;
      });
    }
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
