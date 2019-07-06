const router = require('koa-router')({ prefix: "/video" })
const Controller = require('../controllers/video')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
