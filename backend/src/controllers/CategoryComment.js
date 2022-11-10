// Import Model
import CategoryComment from "../models/CategoryComment.js";

// Get all Category Post
export const getCategoryComments = async (req, res) => {
    try {
        const data = await CategoryComment.findAll();
        res.send({
            data: data,
            success: true,
            message: 'get data ok'
        });
    } catch (err) {
        console.log(err);
    }
}

// Get Category Post by id
export const getCategoryCommentById = async (req, res) => {
    try {
        const data = await CategoryComment.findAll({
            where: {
                comment_category_id : req.params.id
            }
        });
        res.send(data[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new Category Post
export const createCategoryComment = async (req, res) => {
    try {
        await CategoryComment.create(req.body);
        res.json({
            "message": "Category Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update CategoryComment by id
export const updateCategoryComment = async (req, res) => {
    try {
        await CategoryComment.update(req.body, {
            where: {
                comment_category_id: req.params.id
            }
        });
        res.json({
            "message": "Category Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete CategoryComment by id
export const deleteCategoryComment = async (req, res) => {
    try {
        await CategoryComment.destroy({
            where: {
                comment_category_id: req.params.id
            }
        });
        res.json({
            "message": "Category Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}