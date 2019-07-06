const router = require('koa-router')({ prefix: "/recording" })
const Controller = require('../controllers/recording')

router.post('/', Controller.create);

router.get('/:id', Controller.search);

module.exports = router;
