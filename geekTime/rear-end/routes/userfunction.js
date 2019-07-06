const router = require('koa-router')({ prefix: "/userfunction" })
const Controller = require('../controllers/userfunction')

router.post('/', Controller.create);

router.get('/', Controller.search);

module.exports = router;
