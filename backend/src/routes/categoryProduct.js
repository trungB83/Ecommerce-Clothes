// Import express
import express from "express";
// Import category product Controller
import {
  getCategoryProducts,
  getCategoryProductById,
  createCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct,
} from "../controllers/CategoryProduct.js";

// Init express router
const router = express.Router();

// Route get all category product
router.get("/cateProds/", getCategoryProducts);
// Route get category product by id
router.get("/cateProds/:id", getCategoryProductById);
// Route create a new category product
router.post("/cateProds", createCategoryProduct);
// Route update category product by id
router.put("/cateProds/:id", updateCategoryProduct);
// Route delete category product by id
router.delete("/cateProds/:id", deleteCategoryProduct);

// export router
export default router;
