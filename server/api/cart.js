const router = require('express').Router();

// Creates a cart session using only id as reference
router.post('/', (req, res, next) => {
    const { sessionCart } = req.params;
    console.log('Added sessionCartId' + sessionCart);
    //req.session.sessionCartId = sessionCart.sessionCartId;
    res.sendStatus(200)
});

module.exports = router;
