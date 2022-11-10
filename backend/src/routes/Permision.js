// Import express
import express from "express";
// Import Permision Controller
import {
  getPermisions,
  getPermisionById,
  createPermision,
  updatePermision,
  deletePermision,
} from "../controllers/Permision.js";

// Init express router
const router = express.Router();

// Route get all permision
router.get("/permisions", getPermisions);
// Route get permision by id
router.get("/permisions/:id", getPermisionById);
// Route create a new permision
router.post("/permisions", createPermision);
// Route update permision by id
router.put("/permisions/:id", updatePermision);
// Route delete permision by id
router.delete("/permisions/:id", deletePermision);

// export router
export default router;
