// Import express
import express from "express";
// Import Product Controller
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../controllers/User.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/users', getUsers);
// Route get product by id
router.get('/users/:id', getUserById);
// Route create a new product
router.post('/users', createUser);
// Route update product by id
router.put('/users/:id', updateUser);
// Route delete product by id
router.delete('/psers/:id', deleteUser);
 
// export router
export default router;