前端路由实现, 核心本质是 不刷新页面, 但是可以在页面上显示不同的内容 单页面应用的本质
1. hash 实现
url #hash 部分改变, 不会刷新页面
传统的URL, /path?queryString 重刷页面,页面打开慢,独立的http请求
怎么利用它呢?  动态的加载组件及发起请求
js DHTML

- 单页应用避免了传统后端路由每次跳转都刷新页面,给用户带来的慢,白屏(多了HTTP请求),前端路由,立即加载 路由对应的组件,其中最简单的方式是hashchange

## router-link组件
to="#/" props
home slot
