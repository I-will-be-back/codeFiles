## 挂载阶段
第一次渲染
componentWillMount -> render -> componentDidMount
## 更新阶段 
componentWillUpdate -> render -> componentDidUpdate

shouldComponentUpdate
true 更新
false 不更新

componentWillUnmount
清理
  定时器 
  全局的事件绑定
