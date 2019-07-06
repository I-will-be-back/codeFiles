const router = require('koa-router')({ prefix: "/costcourse" })
const Controller = require('../controllers/costcourse')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
