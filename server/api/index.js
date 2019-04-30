const router = require('express').Router();

router.use('/products', require('./product'));

router.use('/orders', require('./order'));

router.use('/auth', require('./auth'));

module.exports = router;
