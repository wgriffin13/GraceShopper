const router = require('express').Router();
const { Product } = require('../db/models');

//GET /api/products
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

//POST /api/products
router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.send(product))
    .catch(next);
});

//PUT /api/products
router.put('/', (req, res, next) => {
  Product.findByPk(req, params.id)
    .then(product => product.update(req.body))
    .then(product => res.send(product))
    .catch(next);
});

//DELETE /api/products
router.delete('/', (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
