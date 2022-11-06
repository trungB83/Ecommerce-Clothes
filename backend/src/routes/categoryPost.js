// Import express
import express from "express";
// Import Post Controller
import {
  getCategoryPosts,
  getCategoryPostById,
  createCategoryPost,
  updateCategoryPost,
  deleteCategoryPost,
} from "../controllers/categoryPost.js";

// Init express router
const router = express.Router();

// Route get all posts
router.get("/catePosts/", getCategoryPosts);
// Route get post by id
router.get("/catePosts/:id", getCategoryPostById);
// Route create a new post
router.post("/catePosts", createCategoryPost);
// Route update post by id
router.put("/catePosts/:id", updateCategoryPost);
// Route delete post by id
router.delete("/catePosts/:id", deleteCategoryPost);

// export router
export default router;
