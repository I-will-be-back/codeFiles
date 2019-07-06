const router = require('koa-router')({ prefix: "/read" })
const Controller = require('../controllers/read')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
