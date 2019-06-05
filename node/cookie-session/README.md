## why
http 无状态
客户端 服务器 再次请求的时候 知道客户端是谁

## -S
--save 
放 "dependencies":{}
npm install
在json文件里面寻找各个依赖并安装
本地开发 安装的 node_modules
服务器上面 只需要写的代码 不需要上传node_modules

## cookie
- 内容:name 值:value
- 存在客户端
- js 操作: document.cookie
- 后端: 响应头 Set-Cookie: user1=ccc1;path=/user;httpOnly
- 浏览器检查所有存储的 cookie, 把符合当前作用范围的cookie放在 http 请求头发给服务器
- cookie 有可能被用户禁用
- 作用范围: 1.path 2.domain 有关
- path: 规定 cookie 生效的路径 (该路径以及该路径的子路径都会拿到cookie)
/ 所有的路径都会拿到cookie值

## httpOnly: true/false 
- 当为true时不能通过 js操作 获取cookie
- 当为false时能通过 js操作 获取cookie