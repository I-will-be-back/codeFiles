const router = require('koa-router')()
// const FindController = require('../controllers/find');


router.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'welcome to geektime!'
  })
})

// router.get('/find/:id', FindController.detail)

module.exports = router
