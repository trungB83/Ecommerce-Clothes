// Import express
import express from "express";
// Import Comment Controller
import {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/Comment.js";

// Init express router
const router = express.Router();

// Route get all comments
router.get("/comments", getComments);
// Route get comments by id
router.get("/comments/:id", getCommentById);
// Route create a new comments
router.post("/comments", createComment);
// Route update comments by id
router.put("/comments/:id", updateComment);
// Route delete comments by id
router.delete("/comments/:id", deleteComment);

// export router
export default router;
