const router = require('koa-router')({
  prefix: "/user"
})
const UserController = require('../controllers/user')

router.post('/', UserController.create)

router.get('/:id', UserController.detail)

module.exports = router
