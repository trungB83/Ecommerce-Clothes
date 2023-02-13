import express from 'express';
import { verifyPermissionMiddleware, verifyTokenMiddleware } from '../../middlewares/auth.middleware.js';
import { getEmails, getEmailById, createEmail, updateEmail, deleteEmail } from './email-log.ctrl.js';

const router = express.Router();

// email routers
router.get('/emails', [verifyTokenMiddleware, verifyPermissionMiddleware('email-log', 'read')], getEmails);
router.get('/email/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('email-log', 'read-one')], getEmailById);
router.post('/email', [verifyTokenMiddleware, verifyPermissionMiddleware('email-log', 'create')], createEmail);
router.put('/email/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('email-log', 'update')], updateEmail);
router.delete('/email/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('email-log', 'delete')], deleteEmail);

export default router;
