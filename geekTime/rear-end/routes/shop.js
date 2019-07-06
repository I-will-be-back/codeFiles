const router = require('koa-router')({ prefix: "/shop" })
const Controller = require('../controllers/shop')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
