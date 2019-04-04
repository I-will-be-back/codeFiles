const koa = require('koa');
const app = new koa();
app.use(async(ctx) => {
  ctx.body = 'I am hellowold';
});
app.listen(3000);