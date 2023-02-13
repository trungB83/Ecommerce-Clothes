import express from 'express';
import upload from '../../middlewares/upload.middleware.js';

import { getFiles, getFileById, updateFile, deleteFile, createFile, createFiles } from './file/file.ctrl.js';
import { getFileCates, getFileCateById, createFileCate, updateFileCate, deleteFileCate } from './cate/cate.ctrl.js';
const router = express.Router();

// file routers
router.get('/files', getFiles);
router.get('/file/:id', getFileById);
router.post('/file', upload.single('file'), createFile);
router.post('/files', upload.array('files', 5), createFiles);
router.put('/file/:id', updateFile);
router.delete('/file/:id', deleteFile);

// slider cate routers
router.get('/file-cates', getFileCates);
router.get('/file-cate/:id', getFileCateById);
router.post('/file-cate', createFileCate);
router.put('/file-cate/:id', updateFileCate);
router.delete('/file-cate/:id', deleteFileCate);

export default router;
