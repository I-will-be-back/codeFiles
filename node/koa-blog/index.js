const Koa = require('koa')
// 配置模板引擎 ejs
const views = require('koa-views')
const koaStatic = require('koa-static')
const path = require('path')
const signinRouter = require('./routers/signin.js')
const { PORT } = require('./config/default.js')
const app = new Koa()

// 1.位置 2.对象
app.use(koaStatic(path.join(__dirname, './public')))
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(signinRouter.routes())

app.listen(PORT, () => {
  console.log(`server is runnning ${PORT}`)
})