const router = require('koa-router')({ prefix: "/studytime" })
const Controller = require('../controllers/studytime')

router.post('/', Controller.create);

router.get('/:id', Controller.search);

module.exports = router;
