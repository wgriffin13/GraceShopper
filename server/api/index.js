const router = require('express').Router();

router.use('/products', require('./product'));

router.use('/orders', require('./order'));

module.exports = router;
