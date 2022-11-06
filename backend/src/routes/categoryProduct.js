// Import express
import express from "express";
// Import Post Controller
import {
  getCategoryProducts,
  getCategoryProductById,
  createCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct,
} from "../controllers/categoryProduct.js";

// Init express router
const router = express.Router();

// Route get all posts
router.get("/cateProds/", getCategoryProducts);
// Route get post by id
router.get("/cateProds/:id", getCategoryProductById);
// Route create a new post
router.post("/cateProds", createCategoryProduct);
// Route update post by id
router.put("/cateProds/:id", updateCategoryProduct);
// Route delete post by id
router.delete("/cateProds/:id", deleteCategoryProduct);

// export router
export default router;
