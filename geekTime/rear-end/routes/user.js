const router = require('koa-router')({ prefix: "/user" })
const Controller = require('../controllers/user')

router.post('/', Controller.create);

router.get('/:id', Controller.search);

module.exports = router;
