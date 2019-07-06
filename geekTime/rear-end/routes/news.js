const router = require('koa-router')({ prefix: "/news" })
const Controller = require('../controllers/news')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
