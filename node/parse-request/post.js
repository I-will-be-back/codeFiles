const http = require('http');
// 创建一个监听在8080端口的服务
const userLists = [{name:'1'}, {name: '2'}];
http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (method.toLowerCase() === 'post' && url === '/user/lists') {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      // "Content-Type": "";
      res.end(data);
    });
    // res.writeHead(200, {
    //   "Content-Type": "application/json"
    // });
    // res.end(JSON.stringify(userLists));
  } else {
    res.end('方式不对！');
  }
}).listen(8080, () => {
  console.log('server is running 8080!');
});
