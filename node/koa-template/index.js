const Koa = require('koa');

// 应用的实例
const app = new Koa();
const admin = new Koa();
// req res ctx封装了req,res
app.use(async (ctx, next) => {
  console.log(1);
  // koa 没有回应 自己处理了 not found
  await next();
  console.log(2);
});
app.use(async (ctx, next) => {
  console.log(3);
  ctx.body = `hello Koa`;
  await next();
  ctx.body = `hello Koa3`;
});
app.use(async (ctx, next) => {
  console.log(4);
  ctx.body = `hello Koa2`;
  await next();
});
app.listen(3000, () => {
  console.log('server is running 3000');
});
admin.listen(4000, () => {
  // console.log('server is running 4000');
});