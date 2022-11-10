// Import express
import express from "express";
// Import role Controller
import { 
    getRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
 } from "../controllers/Role.js";
 
 // Init express router
const router = express.Router();
 
// Route get all role
router.get('/roles', getRoles);
// Route get role by id
router.get('/roles/:id', getRoleById);
// Route create a new role
router.post('/roles', createRole);
// Route update role by id
router.put('/roles/:id', updateRole);
// Route delete role by id
router.delete('/roles/:id', deleteRole);
 
// export router
export default router;