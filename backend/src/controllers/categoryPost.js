// Import Model
import categoryPost from "../models/categoryPost.js";

// Get all Category Post
export const getCategoryPosts = async (req, res) => {
    try {
        const catePost = await categoryPost.findAll();
        res.send({
            data: catePost,
            success: true,
            message: 'get data ok'
        });
    } catch (err) {
        console.log(err);
    }
}

// Get Category Post by id
export const getCategoryPostById = async (req, res) => {
    try {
        const catePost = await categoryPost.findAll({
            where: {
                categoty_id: req.params.id
            }
        });
        res.send(catePost[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new Category Post
export const createCategoryPost = async (req, res) => {
    try {
        await categoryPost.create(req.body);
        res.json({
            "message": "Category Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update Category Post by id
export const updateCategoryPost = async (req, res) => {
    try {
        await categoryPost.update(req.body, {
            where: {
                categoty_id: req.params.id
            }
        });
        res.json({
            "message": "Category Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete Category Post by id
export const deleteCategoryPost = async (req, res) => {
    try {
        await categoryPost.destroy({
            where: {
                categoty_id: req.params.id
            }
        });
        res.json({
            "message": "Category Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}