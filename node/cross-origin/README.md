## 跨域
浏览器的安全策略
协议 域名 端口 有一个不一致的时候就存在跨域

## cors
cross origin resource share
1. 一个标准， 规定了一些http的首部字段, 让服务器允许哪些网站可以访问
2. 规定如果是非简单请求, 浏览器会先发一个预检请求，服务端知道是否允许跨域，如果允许才会发出正式的请求
3. 非简单请求

## jsonp 原理
1. script 标签可以跨域
2. 加载进来的内容会被当做js执行
3. 后端先获取到前端发出的 callback 在 callback里面插入自己想要的返回内容
4. 前端拿到返回的内容当做 js 执行
```js
getUSer(
  {
    name: 'abc',
    age: 18
  }
)
```
5. 预先定义还一个函数
6. 缺点: 只能get请求
7. 写一个 promise 风格的jsonp函数
```js
jsonp(url, param = {})
.then(res => {
  console.log(res)
})
```
8. param = {type: 'man', age: 18}

- 一个全局的方法
- 插入一个script标签, 根据方法名 param拼接url
- 根据 js 的加载情况判断请求是否成功 返回数据
- script标签上面有事件