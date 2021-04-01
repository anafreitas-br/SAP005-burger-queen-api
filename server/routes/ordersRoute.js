const { Router } = require('express');
const controller = require('../controller/ordersController')
const router = Router();


router.get('/', controller.getOrders);
router.get('/:id', controller.getOrdersById);
router.post('/', controller.postOrders);
router.put('/:id', controller.updateOrdersById);
router.delete('/:id', controller.deleteOrdersById);

module.exports = router;

//teste