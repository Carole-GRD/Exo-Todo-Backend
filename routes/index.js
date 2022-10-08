const listRouter = require('./list-router');


const router = require('express').Router();

// router.use('/list', (req, res) => res.sendStatus(501));
router.use('/list', listRouter);


module.exports = router;