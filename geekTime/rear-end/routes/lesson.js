const router = require('koa-router')({ prefix: "/lesson" })
const Controller = require('../controllers/lesson')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
