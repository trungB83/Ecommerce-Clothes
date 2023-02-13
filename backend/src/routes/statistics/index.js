import express from 'express';
import { verifyPermissionMiddleware, verifyTokenMiddleware } from '../../middlewares/auth.middleware.js';
import { globalStatistics } from './statistics.ctrl.js';

const router = express.Router();

// statistic routers
router.get('/statistics/global', globalStatistics);

export default router;
