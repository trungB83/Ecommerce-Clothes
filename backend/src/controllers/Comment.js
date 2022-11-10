// Import Post Model
import Comment from "../models/Comment.js";

// Get all Comment
export const getComments = async (req, res) => {
  try {
    const data = await Comment.findAll();
    res.send({
      data: data,
      success: true,
      message: "get post ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Comment by id
export const getCommentById = async (req, res) => {
  try {
    const data = await Comment.findAll({
      where: {
        comment_id: req.params.id,
      },
    });
    res.send(data[0]);
  } catch (err) {
    console.log(err);
  }
};

// Create a new Comment
export const createComment = async (req, res) => {
  try {
    await Comment.create(req.body);
    res.json({
      message: "Comment Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Comment by id
export const updateComment = async (req, res) => {
  try {
    await Comment.update(req.body, {
      where: {
        comment_id: req.params.id,
      },
    });
    res.json({
      message: "Comment Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Comment by id
export const deleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        comment_id: req.params.id,
      },
    });
    res.json({
      message: "Comment Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
