// Import express
import express from "express";
// Import user Controller
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../controllers/User.js";
 
 // Init express router
const router = express.Router();
 
// Route get all Users
router.get('/users', getUsers);
// Route get User by id
router.get('/users/:id', getUserById);
// Route create a new User
router.post('/users', createUser);
// Route update User by id
router.put('/users/:id', updateUser);
// Route delete User by id
router.delete('/psers/:id', deleteUser);
 
// export router
export default router;