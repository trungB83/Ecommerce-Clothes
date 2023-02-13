import express from 'express';

import productRouter from './products/index.js';
import postRouter from './posts/index.js';
import userRouter from './users/index.js';
import sliderRouter from './sliders/index.js';
import filesRouter from './files/index.js';
import emailLogRouter from './email-logs/index.js';
import optionRouter from './options/index.js';
import orderRouter from './orders/index.js';
import statisticRouter from './statistics/index.js';
const router = express.Router();

router.use(productRouter);
router.use(postRouter);
router.use(userRouter);
router.use(sliderRouter);
router.use(filesRouter);
router.use(emailLogRouter);
router.use(optionRouter);
router.use(orderRouter);
router.use(statisticRouter);

export default router;
