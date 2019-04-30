const router = require('express').Router();
const { Order, LineItem, Product } = require('../db/models');

// Returns individual order where id === route id
router.get('/:id', (req, res, next) => {
    Order.findByPk(req.params.id, {
        include: [
            {model: LineItem, include: [
                {model: Product}
            ]}
        ]
    })
        .then(order => res.send(order))
        .catch(next);
});

// Returns all oders with line items and respective product details
router.get('/', (req, res, next) => {
    Order.findAll({
        include: [
            {model: LineItem, include: [
                {model: Product}
            ]}
        ]
    })
        .then(orders => res.send(orders))
        .catch(next);
});

module.exports = router;
