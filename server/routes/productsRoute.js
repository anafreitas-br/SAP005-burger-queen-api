const { Router } = require('express');
const controller = require('../controller/productsController')
const router = Router();

router.get('/', controller.getProducts);
router.get('/:id', controller.getProductsById);
router.post('/', controller.postProducts);
router.put('/:id', controller.updateProductsById);
router.delete('/:id', controller.deleteProductsById);

module.exports = router;

//teste