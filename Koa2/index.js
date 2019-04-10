const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  if(ctx.url === '/index') {
    ctx.cookies.set(
      'name', 'carryChao', {
        domain:'127.0.0.1',
        //path:'/index',
        maxAge:1000*60*60
      });
    ctx.body = 'dsad';
  } else {
    if(ctx.cookies.get('name')) {
      ctx.body = ctx.cookies.get('name');
    } else {
      ctx.body = 'cookies is none';
    }
  }
});

app.listen(3000, () => {
  console.log('server is running');
});