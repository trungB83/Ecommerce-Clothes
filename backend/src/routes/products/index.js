import express from 'express';
import { verifyPermissionMiddleware, verifyTokenMiddleware } from '../../middlewares/auth.middleware.js';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from './product/product.ctrl.js';
import { getProductCates, getProductCateById, createProductCate, updateProductCate, deleteProductCate } from './cate/cate.ctrl.js';
import { getComments, getCommentById, createComment, updateComment, deleteComment } from './comment/comment.ctrl.js';
import { getProductMetas, getProductMetaById, createProductMeta, updateProductMeta, deleteProductMeta } from './product/meta.ctrl.js';
import { getProductCateMetas, getProductCateMetaById, createProductCateMeta, updateProductCateMeta, deleteProductCateMeta } from './cate/cate-meta.ctrl.js';

const router = express.Router();

// product routers
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/product/', [verifyTokenMiddleware, verifyPermissionMiddleware('product', 'create')], createProduct);
router.put('/product/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('product', 'update')], updateProduct);
router.delete('/product/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('product', 'delete')], deleteProduct);

// category product routers
router.get('/product-cates/', getProductCates);
router.get('/product-cate/:id', getProductCateById);
router.post('/product-cate', [verifyTokenMiddleware, verifyPermissionMiddleware('product-cate', 'create')], createProductCate);
router.put('/product-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('product-cate', 'update')], updateProductCate);
router.delete('/product-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('product-cate', 'delete')], deleteProductCate);

// comment routers
router.get('/product-comments', getComments);
router.get('/product-comment/:id', getCommentById);
router.post('/product-comment', [verifyTokenMiddleware, verifyPermissionMiddleware('product-comment', 'create')], createComment);
router.put('/product-comment/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('product-comment', 'update')], updateComment);
router.delete('/product-comment/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('product-comment', 'delete')], deleteComment);

// product meta routers
router.get('/product-metas', getProductMetas);
router.get('/product-meta/:id', getProductMetaById);
router.post('/product-meta', createProductMeta);
router.put('/product-meta/:id', updateProductMeta);
router.delete('/product-meta/:id', deleteProductMeta);

// product cate meta routers
router.get('/product-cate-metas', getProductCateMetas);
router.get('/product-cate-meta/:id', getProductCateMetaById);
router.post('/product-cate-meta', createProductCateMeta);
router.put('/product-cate-meta/:id', updateProductCateMeta);
router.delete('/product-cate-meta/:id', deleteProductCateMeta);

export default router;
