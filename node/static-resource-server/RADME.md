## 静态资源
不会随着服务运行而改变的内容: html css js image等
1. 如果有index.html则打开
2. 否则列出所有文件
3. 请求路径和磁盘路径 一一对应

请求:
/static/*.* 磁盘位置static目录下面 一一对应
1. 拿到 req.url
2. 读取 磁盘下面同一个位置 返回
3. 静态资源 通常会放在某一个下面 /static/ 所以请求都以某个目录开头^

## 打开方式
file:// 本地文件读取协议 ./xx.png
http://localhost:8080/ http协议
html 里面引入的资源 都会发出请求

## 上传图片
### formidable
- 处理请求的第三方包
- fileds 非input[type="file"]的提交项
- files input[type="file"]的提交项
- 都是根据input的 name 属性来获取值