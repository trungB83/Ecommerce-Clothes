// Import express
import express from "express";
// Import Product Controller
import productRouter from "./Product.js";
// Import Post Controller
import postRouter from "./Post.js";
// Import category product Controller
import cateProductRouter from './categoryProduct.js'
 import catePostRouter from './categoryPost.js'
 // Init express router
const router = express.Router();
 
// use router
router.use(productRouter);
router.use(cateProductRouter);
router.use(postRouter);
router.use(catePostRouter);

// export router
export default router;