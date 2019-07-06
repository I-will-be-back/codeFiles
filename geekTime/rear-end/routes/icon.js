const router = require('koa-router')({ prefix: "/icon" })
const Controller = require('../controllers/icon')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
