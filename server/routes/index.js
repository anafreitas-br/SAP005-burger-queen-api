const { Router } = require('express')

const usersRoute = require('./usersRoute')
const ordersRoute = require('./ordersRoute')
const productsRoute = require('./productsRoute')

const router = Router()

router.use('/users', usersRoute);
router.use('/orders', ordersRoute);
router.use('/products', productsRoute);

module.exports = router
