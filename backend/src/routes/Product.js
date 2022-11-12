// Import express
import express from "express";
// Import Product Controller
import { 
    getProducts,
    getProductsOrderNameASC,
    getProductsOrderNameDESC,
    getProductsOrderPriceASC,
    getProductsOrderPriceDESC,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory
 } from "../controllers/Product.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/products', getProducts);
// Route get all products order by name a-z
router.get('/products/f/name-asc', getProductsOrderNameASC);
// Route get all products order by name z-a
router.get('/products/f/name-desc', getProductsOrderNameDESC);
// Route get all products order by price low-high
router.get('/products/f/price-asc', getProductsOrderPriceASC);
// Route get all products order by price hgih-low
router.get('/products/f/price-desc', getProductsOrderPriceDESC);
// Route get all products order by Category
router.get('/products/f/cate/:id', getProductByCategory);

// Route get product by id
router.get('/products/:id', getProductById);
// Route create a new product
router.post('/products/', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);
 
// export router
export default router;