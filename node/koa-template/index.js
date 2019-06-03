const Koa = require('koa');

// 应用的实例
const app = new Koa();
const admin = new Koa();
// req res ctx封装了req,res
app.use(async (ctx, next) => {
  console.log(new Date());
  // koa 没有回应 自己处理了 not found
  await next();
});
app.use(async (ctx) => {
  ctx.body = `hello Koa`;
});
app.listen(3000, () => {
  console.log('server is running 3000');
});
admin.listen(4000, () => {
  // console.log('server is running 4000');
});