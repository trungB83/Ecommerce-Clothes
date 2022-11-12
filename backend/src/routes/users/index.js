// Import express
import express from "express";
// Import user Controller
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserRoleAdmin,
    getUserRoleEditor,
    getUserRoleCustomer
 } from "./user.ctrl.js";
 

 // Init express router
const router = express.Router();
 
// Route get all Users
router.get('/users', getUsers);
// Route get All User by id
router.get('/users/:id', getUserById);
// Route get User filter admin
router.get('/users/f/admin', getUserRoleAdmin);
// Route get User filter editor
router.get('/users/f/editor', getUserRoleEditor);
// Route get User filter customer
router.get('/users/f/customer', getUserRoleCustomer);
// Route create a new User
router.post('/users', createUser);
// Route update User by id
router.put('/users/:id', updateUser);
// Route delete User by id
router.delete('/psers/:id', deleteUser);
 
// export router
export default router;