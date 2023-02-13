import express from 'express';
import { verifyPermissionMiddleware, verifyTokenMiddleware } from '../../middlewares/auth.middleware.js';
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } from './order/order.ctrl.js';
import { getPayments, getPaymentById, createPayment, updatePayment, deletePayment } from './payment/payment.ctrl.js';
import { getOrderItems, getOrderItemById, createOrderItem, updateOrderItem, deleteOrderItem } from './order-item/order-item.ctrl.js';
import { getDelivers, getDeliverById, createDeliver, updateDeliver, deleteDeliver } from './deliver/deliver.ctrl.js';

const router = express.Router();

// order routers
router.get('/orders/', getOrders);
router.get('/order/:id', getOrderById);
router.post('/order', createOrder);
router.put('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);

// payment routers
router.get('/payments/', getPayments);
router.get('/payment/:id', getPaymentById);
router.post('/payment', [verifyTokenMiddleware, verifyPermissionMiddleware('payment', 'create')], createPayment);
router.put('/payment/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('payment', 'update')], updatePayment);
router.delete('/payment/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('payment', 'delete')], deletePayment);

// order item routers
router.get('/order-items', getOrderItems);
router.get('/order-item/:id', getOrderItemById);
router.post('/order-item', createOrderItem);
router.put('/order-item/:id', updateOrderItem);
router.delete('/order-item/:id', deleteOrderItem);

// deliver routers
router.get('/delivers/', getDelivers);
router.get('/deliver/:id', getDeliverById);
router.post('/deliver', [verifyTokenMiddleware, verifyPermissionMiddleware('deliver', 'create')], createDeliver);
router.put('/deliver/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('deliver', 'update')], updateDeliver);
router.delete('/deliver/:id', [verifyTokenMiddleware, verifyPermissionMiddleware('deliver', 'delete')], deleteDeliver);

export default router;
