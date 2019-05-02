const router = require('express').Router();
const { User } = require('../db//models');

//log in - look for user in db, post user to session
router.post('/', (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
        .then(user => {
            if (!user) {
                const error = new Error();
                error.status = 401;
                throw error;
            }
            console.log('we found them!' + user);
            req.session.user = user;
            res.send(user)
        })
        .catch(next)
})

//upon successful log-in, return get the session (or throw a log-in error)
router.get('/', (req, res, next) => {
    if (!req.session.user) {
        const error = new Error('not logged in');
        error.status = 401;
        return next(error);
    }
    res.send(req.session.user);
})


//upon log-out, end the session
router.delete('/', (req, res, next) => {
    req.session.destroy(() => res.sendStatus(204));
});

module.exports = router;
