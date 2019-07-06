const router = require('koa-router')({ prefix: "/topic" })
const Controller = require('../controllers/topic')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
