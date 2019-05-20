// http
const http = require('http');
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
  // 搭建自己的服务器
  if (req.url == '/favicon.ico') return;
  const reqObj = url.parse(req.url);
  // get 请求 在query属性
  const queryObject = qs.parse(reqObj.query);
  console.log(reqObj); 
  console.log(queryObject);
  // mime 类型
  res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
  res.end(JSON.stringify(queryObject));
})
.listen(3000, () => {
  console.log('3000服务已启动!');
});