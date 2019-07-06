const router = require('koa-router')({ prefix: "/nav" })
const Controller = require('../controllers/nav')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
