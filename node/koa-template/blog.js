const Koa = require('koa');
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path');

const app = new Koa();
// ejs 提供了转 html 的中间件
// 模板引擎在哪个位置
app.use(
  views(
    path.join(__dirname, './view'), {
      extension: 'ejs'
    }
  )
)

const user = {
  name: 'ALiang',
  posts: [{id:0, title: '流动的SVG线条'},{id:1, title: 'React.js源码解析'}]
}
const posts = [
  {
    id: 0,
    content: '用 SVG + CSS 实现'
  },
  {
    id: 1,
    content: 'React 天下第一'
  }
]
app.use(async (ctx) => {
  // req res
  // /user 用户的主页
  // req.url 解析出请求的地址
  if (ctx.path === '/user') {
    // 返回user页面 ejs
    await ctx.render('user', {
      user
    });
  } else if (ctx.path === '/post') {
    // ctx.query是 get 请求的 查询参数 ?name=a&age=b {name:a age:b}
    const { id } = ctx.query;
    const post = posts.find(item => item.id == id);
    await ctx.render('post', { post });
  } else {
    ctx.body = '无法处理该路径' + ctx.request.url;
  }
});
//app.listen 就是 原生http.listern
app.listen(8080, () => {
  console.log('server is running 8080');
});