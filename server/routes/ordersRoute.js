const { Router } = require('express');
const controller = require('../controller/ordersController')
const router = Router();


router.get('/', controller.getOrders);
router.get('/:orderId', controller.getOrdersById);
router.post('/', controller.postOrders);
router.put('/:orderId', controller.updateOrdersById);
router.delete('/:orderId', controller.deleteOrdersById);

module.exports = router;