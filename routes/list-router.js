const listController = require('../controllers/list-controller');


const listRouter = require('express').Router();

listRouter.route('/')
    // .get((req, res) => { res.sendStatus(501) });
    .get(listController.getAll)
    // .delete(listController.deleteMany)
    .post(listController.create);

listRouter.route('/:id')
    .get(listController.getById)
    .delete(listController.delete);


module.exports = listRouter;