import express from 'express';
import { verifyPermissionMiddleware, verifyTokenMiddleware } from '../../middlewares/auth.middleware.js';
import { getSliders, getSliderById, createSlider, updateSlider, deleteSlider } from './slider/slider.ctrl.js';
import { getSliderCates, getSliderCateById, createSliderCate, updateSliderCate, deleteSliderCate } from './cate/cate.ctrl.js';

const router = express.Router();

// slider routers
router.get('/sliders', getSliders);
router.get('/slider/:id', getSliderById);
router.post('/slider', [verifyTokenMiddleware, verifyPermissionMiddleware('slider', 'create')], createSlider);
router.put('/slider/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('slider', 'update')], updateSlider);
router.delete('/slider/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('slider', 'delete')], deleteSlider);

// slider cate routers
router.get('/slider-cates', getSliderCates);
router.get('/slider-cate/:id', getSliderCateById);
router.post('/slider-cate', [verifyTokenMiddleware, verifyPermissionMiddleware('slider-cate', 'create')], createSliderCate);
router.put('/slider-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('slider-cate', 'update')], updateSliderCate);
router.delete('/slider-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('slider-cate', 'delete')], deleteSliderCate);

export default router;
