const router = require('express').Router();
const { Category } = require('../db/models');

//GET /api/categories
router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => res.send(categories))
    .catch(next);
});

module.exports = router;
