const router = require('koa-router')({ prefix: "/course" })
const Controller = require('../controllers/course')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
