const { Router } = require('express');
const controller = require('../controller/productsController')
const router = Router();

router.get('/', controller.getProducts);
router.get('/:productId', controller.getProductsId);
router.post('/', controller.postProducts);
router.put('/:productId', controller.putProductsId);
router.delete('/productId', controller.deleteProductsId);

module.exports = router;