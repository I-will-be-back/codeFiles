const koa = require('koa')
const Router = require('koa-router')
const app = new koa()
const router = new Router()
// /user 用户界面
// /post 文章页面
router.get('/', async (ctx) => {
  ctx.type = 'html'
  ctx.body = `
  <a href="/user">user</a>
  <a href="/post">post</a>
  `
})
router.get('/user', async (ctx) => {
  ctx.cookies.set('user', 'ccc', {
    path: '/user',
    httpOnly: false
  })
  ctx.cookies.set('user1', 'ccc1')
  ctx.cookies.set('name2', 'value2', {
    path: '/user/abc'
  })
  ctx.body = 'user'
})
router.get('/post', async (ctx) => {
  ctx.body = 'post'
})
router.get('/user/abc', async (ctx) => {
  ctx.body = '/user/abc'
})
app.use(router.routes())
app.listen(9999, () => {
  console.log('server is running 9999')
})