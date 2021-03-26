const { Router } = require('express');
const controller = require('../controller/productsController')
const router = Router();

router.get('/', controller.getProducts);
router.get('/:productId', controller.getProductsById);
router.post('/', controller.postProducts);
router.put('/:productId', controller.updateProductsById);
router.delete('/productId', controller.deleteProductsById);

module.exports = router;