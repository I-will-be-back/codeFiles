const router = require('koa-router')({ prefix: "/carousel" })
const Controller = require('../controllers/carousel')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
