// Import express
import express from "express";
// Import Post Controller
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/Post.js";

// Init express router
const router = express.Router();

// Route get all posts
router.get("/posts", getPosts);
// Route get post by id
router.get("/posts/:id", getPostById);
// Route create a new post
router.post("/posts", createPost);
// Route update post by id
router.put("/posts/:id", updatePost);
// Route delete post by id
router.delete("/posts/:id", deletePost);

// export router
export default router;
