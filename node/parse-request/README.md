## 请求头
一次http 事务 有啥:
- 请求
请求头 空行 请求体
content-type: 规定我们向服务端发送请求体的格式
1. application/x-www-form-urlencoded
form 表单 默认的 发送请求格式
name=lilei&age=18
2. application/json
以JSON的格式发送
{
  "name":"lihua",
  "age":18
}
- 响应 
响应头 空行 响应体
content-type
通用首部: 请求/响应
