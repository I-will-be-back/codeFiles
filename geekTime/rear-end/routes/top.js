const router = require('koa-router')({ prefix: "/top" })
const Controller = require('../controllers/top')

router.post('/', Controller.create)

router.get('/:id', Controller.search)

module.exports = router;