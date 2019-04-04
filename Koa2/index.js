const koa = require('koa');
const app = new koa();
app.use(async(ctx) => {
  const url = ctx.url;
  const method = ctx.method;
  if(url === '/' && method === 'GET') {
    ctx.body = `
    <form method='POST' action='/'>
      <p>username</p><input name='username'>
      <p>iphone</p><input name='iphone'>
      <p>email</p><input name='email'>
      <button type='submit'>submit</button>
    </form>`;
  } else if(url === '/' && method === 'POST') {
    let postData = await parPostData(ctx);
    ctx.body = postData;
  } else {
    ctx.body = `<h1>404!</h1>`;
  }
});
app.listen(3000, () => {
  console.log('server 3000 is running!');
});

function parPostData (ctx) {
  return new Promise((resolve,reject) => {
    try{
      let postData = '';
      ctx.req.addListener('data', (data) => {
        postData += data;
      });
      ctx.req.on('end', () => {
        postData = parseQueryStr(postData);
        resolve(postData);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function parseQueryStr (parseStr) {
  let json = {};
  let parseList = parseStr.split('&');
  for( let item of parseList) {
    let data = item.split('=');
    json[data[0]] = data[1];
  }
  return json;
  //console.log(json);
}