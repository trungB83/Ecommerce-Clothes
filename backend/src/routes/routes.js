// Import express
import express from "express";

import productRouter from "./Product.js";
import postRouter from "./Post.js";
import cateProductRouter from './CategoryProduct.js'
import catePostRouter from './CategoryPost.js'
import userRouter from './User.js'
import roleRouter from './Role.js'
import permisionRouter from "./Permision.js"
import commentRouter from "./Comment.js"
import cateCommentRouter from "./CategoryComment.js"
 // Init express router
const router = express.Router();
 
// use router
router.use(productRouter);
router.use(cateProductRouter);
router.use(postRouter);
router.use(catePostRouter);
router.use(userRouter);
router.use(roleRouter);
router.use(permisionRouter);
router.use(commentRouter);
router.use(cateCommentRouter);

// export router
export default router;