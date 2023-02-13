import express from 'express';
import { verifyTokenMiddleware, verifyPermissionMiddleware } from '../../middlewares/auth.middleware.js';
import { getOptions, getOptionById, createOption, updateOption, deleteOption } from './option.ctrl.js';

const router = express.Router();

// option routers
router.get('/options', getOptions);
router.get('/option/:id', getOptionById);
router.post('/option', [verifyTokenMiddleware, verifyPermissionMiddleware('option', 'create')], createOption);
router.put('/option/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('option', 'update')], updateOption);
router.delete('/option/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('option', 'delete')], deleteOption);

export default router;
