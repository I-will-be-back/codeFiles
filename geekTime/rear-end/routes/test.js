const router = require('koa-router')({
  prefix: "/user"
})
const UserController = require('../controllers/test')

router.post('/', UserController.create)

router.get('/:id', UserController.detail)

module.exports = router
