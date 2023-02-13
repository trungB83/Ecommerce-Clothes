import express from 'express';
import { verifyPermissionMiddleware, verifyTokenMiddleware } from '../../middlewares/auth.middleware.js';
import { getPosts, getPostById, createPost, updatePost, deletePost } from './post/post.ctrl.js';
import { getPostCates, getPostCateById, createPostCate, updatePostCate, deletePostCate } from './cate/cate.ctrl.js';
import { getComments, getCommentById, createComment, updateComment, deleteComment } from './comment/comment.ctrl.js';
import { getPostMetas, getPostMetaById, createPostMeta, updatePostMeta, deletePostMeta } from './post/meta.ctrl.js';
import { getPostCateMetas, getPostCateMetaById, createPostCateMeta, updatePostCateMeta, deletePostCateMeta } from './cate/cate-meta.ctrl.js';

const router = express.Router();

// post routers
router.get('/posts', getPosts);
router.get('/post/:id', getPostById);
router.post('/post', [verifyTokenMiddleware, verifyPermissionMiddleware('post', 'create')], createPost);
router.put('/post/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('post', 'update')], updatePost);
router.delete('/post/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('post', 'delete')], deletePost);

// post cate routers
router.get('/post-cates', getPostCates);
router.get('/post-cate/:id', getPostCateById);
router.post('/post-cate', [verifyTokenMiddleware, verifyPermissionMiddleware('post-cate', 'create')], createPostCate);
router.put('/post-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('post-cate', 'update')], updatePostCate);
router.delete('/post-cate/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('post-cate', 'delete')], deletePostCate);

// comment routers
router.get('/post-comments', getComments);
router.get('/post-comment/:id', getCommentById);
router.post('/post-comment', [verifyTokenMiddleware, verifyPermissionMiddleware('post-comment', 'create')], createComment);
router.put('/post-comment/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('post-comment', 'update')], updateComment);
router.delete('/post-comment/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('post-comment', 'delete')], deleteComment);

// post meta routers
router.get('/post-metas', getPostMetas);
router.get('/post-meta/:id', getPostMetaById);
router.post('/post-meta', createPostMeta);
router.put('/post-meta/:id', updatePostMeta);
router.delete('/post-meta/:id', deletePostMeta);

// post meta routers
router.get('/post-cate-metas', getPostCateMetas);
router.get('/post-cate-meta/:id', getPostCateMetaById);
router.post('/post-cate-meta', createPostCateMeta);
router.put('/post-cate-meta/:id', updatePostCateMeta);
router.delete('/post-cate-meta/:id', deletePostCateMeta);

export default router;
