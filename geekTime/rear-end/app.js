const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');

const index = require('./routes/index');
// const top = require('./routes/top');
// const carousel = require('./routes/carousel');
// const recommend = require('./routes/recommend');
// const news = require('./routes/news');
// const shop = require('./routes/shop');
// const read = require('./routes/read');
// const course = require('./routes/course');
// const lesson = require('./routes/lesson');
// const topic = require('./routes/topic');
// const video = require('./routes/video');
// const icon = require('./routes/icon');
// const nav = require('./routes/nav');
// const costcourse = require('./routes/costcourse');
// const studytime = require('./routes/studytime');
// const recording = require('./routes/recording');
// const user = require('./routes/user');
// const userfunction = require('./routes/userfunction');

// error handler
onerror(app)

// 使用koa-cors
app.use(cors());

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods());
// app.use(top.routes(), top.allowedMethods());
// app.use(carousel.routes(), carousel.allowedMethods());
// app.use(recommend.routes(), recommend.allowedMethods());
// app.use(news.routes(), news.allowedMethods());
// app.use(shop.routes(), shop.allowedMethods());
// app.use(read.routes(), read.allowedMethods());
// app.use(course.routes(), course.allowedMethods());
// app.use(lesson.routes(), lesson.allowedMethods());
// app.use(topic.routes(), topic.allowedMethods());
// app.use(video.routes(), video.allowedMethods());
// app.use(icon.routes(), icon.allowedMethods());
// app.use(nav.routes(), nav.allowedMethods());
// app.use(costcourse.routes(), costcourse.allowedMethods());
// app.use(studytime.routes(), studytime.allowedMethods());
// app.use(recording.routes(), recording.allowedMethods());
// app.use(user.routes(), user.allowedMethods());
// app.use(userfunction.routes(), userfunction.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
