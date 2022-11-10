// Import express
import express from "express";
// Import CategoryComment Controller
import {
  getCategoryComments,
  getCategoryCommentById,
  createCategoryComment,
  updateCategoryComment,
  deleteCategoryComment,
} from "../controllers/CategoryComment.js";

// Init express router
const router = express.Router();

// Route get all posts
router.get("/cateComments/", getCategoryComments);
// Route get post by id
router.get("/cateComments/:id", getCategoryCommentById);
// Route create a new post
router.post("/cateComments", createCategoryComment);
// Route update post by id
router.put("/cateComments/:id", updateCategoryComment);
// Route delete post by id
router.delete("/cateComments/:id", deleteCategoryComment);

// export router
export default router;
