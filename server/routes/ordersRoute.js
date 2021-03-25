const { Router } = require('express');
const controller = require('../controller/ordersController')
const router = Router();


router.get('/', controller.getOrders);
router.get('/:orderId', controller.getOrdersId);
router.post('/', controller.postOrders);
router.put('/:orderId', controller.putOrdersId);
router.delete('/:orderId', controller.deleteOrdersId);

module.exports = router;