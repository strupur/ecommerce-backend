const router = require('express').Router();

const orderController = require('../controllers/order.controllers');

router.post('/orders', orderController.createOrder);

module.exports = router;