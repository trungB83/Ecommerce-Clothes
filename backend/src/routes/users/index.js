import express from 'express';
import { verifyTokenMiddleware, verifyPermissionMiddleware } from '../../middlewares/auth.middleware.js';
import { getUsers, getUserById, createUser, updateUser, deleteUser, refreshToken, login, logout, register } from './user/user.ctrl.js';
import { getUserCates, getUserCateById, createUserCate, updateUserCate, deleteUserCate } from './cate/cate.ctrl.js';
import { getPermissions, getPermissionById, createPermission, updatePermission, deletePermission } from './permission/permission.ctrl.js';
import { getUserCateMetas, getUserCateMetaById, createUserCateMeta, updateUserCateMeta, deleteUserCateMeta } from './cate/cate-meta.ctrl.js';

const router = express.Router();

// auth routers
router.post('/auth/login', login);
router.post('/auth/register', register);
router.post('/auth/logout', [verifyTokenMiddleware], logout);
router.post('/auth/refresh-token', refreshToken);

// user routers
router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', [verifyTokenMiddleware, verifyPermissionMiddleware('user', 'create')], createUser);
router.put('/user/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('user', 'update')], updateUser);
router.delete('/user/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('user', 'delete')], deleteUser);

// user cate routers
router.get('/user-cates', getUserCates);
router.get('/user-cate/:id', getUserCateById);
router.post('/user-cate', [verifyTokenMiddleware, verifyPermissionMiddleware('user-cate', 'create')], createUserCate);
router.put('/user-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('user-cate', 'update')], updateUserCate);
router.delete('/user-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('user-cate', 'delete')], deleteUserCate);

// user cate meta routers
router.get('/user-cate-metas', getUserCateMetas);
router.get('/user-cate-meta/:id', getUserCateMetaById);
router.post('/user-cate-meta', createUserCateMeta);
router.put('/user-cate-meta/:id', updateUserCateMeta);
router.delete('/user-cate-meta/:id', deleteUserCateMeta);

// permission routers
router.get('/user-permissions', [verifyTokenMiddleware, verifyPermissionMiddleware('user-permission', 'read')], getPermissions);
router.get('/user-permission/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('user-permission', 'read-one')], getPermissionById);
router.post('/user-permission', [verifyTokenMiddleware, verifyPermissionMiddleware('user-permission', 'create')], createPermission);
router.put('/user-permission/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('user-permission', 'update')], updatePermission);
router.delete('/user-permission/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('user-permission', 'delete')], deletePermission);

export default router;
