// Import Model
import categoryProduct from "../models/categoryProduct.js";

// Get all Category Products
export const getCategoryProducts = async (req, res) => {
    try {
        const cateProd = await categoryProduct.findAll();
        res.send({
            data: cateProd,
            success: true,
            message: 'get data ok'
        });
    } catch (err) {
        console.log(err);
    }
}

// Get Category Products by id
export const getCategoryProductById = async (req, res) => {
    try {
        const cateProd = await categoryProduct.findAll({
            where: {
                categoryProducts_id: req.params.id
            }
        });
        res.send(cateProd[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new CategoryProduct
export const createCategoryProduct = async (req, res) => {
    try {
        await categoryProduct.create(req.body);
        res.json({
            "message": "Category Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update CategoryProduct by id
export const updateCategoryProduct = async (req, res) => {
    try {
        await categoryProduct.update(req.body, {
            where: {
                categoryProduct_id: req.params.id
            }
        });
        res.json({
            "message": "Category Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete CategoryProduct by id
export const deleteCategoryProduct = async (req, res) => {
    try {
        await categoryProduct.destroy({
            where: {
                categoryProduct_id: req.params.id
            }
        });
        res.json({
            "message": "category Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}