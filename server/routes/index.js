const { Router } = require('express')

const usersRoute = require('./users.route')
const ordersRoute = require('./orders.route')
const productsRoute = require('./products.route')

const router = Router()

router.use('/users', usersRoute);
router.use('/orders', ordersRoute);
router.use('/products', productsRoute);

module.exports = router
