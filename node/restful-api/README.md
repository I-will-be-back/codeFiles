fullstack 全栈
Front Enginner
Backend / api

restful api
浏览器与服务器通信方式的一种设计风格

- restful 的世界里, 一切皆资源
- url 来唯一定位资源的识别符
  /posts/:id
- 添加一条commment 怎么办? /commments/2
  {
    "id": 2,
    "body": '好巧不巧, 我也在等你',
    "postId": 1
  }
  /comments 设计好URL POST
- 设计有意义的URL
  资源 状态改变
  POST /comments 加一条评论 id:2
  修改一下内容
  PUT /comments/2 body: '好巧不巧'
  操作    SQL方法   HTTP动词
  CREATE  INSERT    POST
  READ    SELECT    GET
  UPDATE  UPDATE    PUT/PATCH 不同点: PUT提交完整的字段{body: '',postId: 1} PATCH只要给一部分{body: ''}
  DELETE  DELETE    DELETE

  状态 切换,使用定义的谓语动词