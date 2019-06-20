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

## color
parent state
{
  theme: 'red'
}
theme一层层传递
父组件 -> 子组件 -> 孙组件 -> ...
1. 父组件通过 getChildContext 提供 context 里面的内容
2. 父组件.childContextTypes 提供 context 的类型
3. 子组件.contextTypes 定义接收的类型
this.context获取

问题: 跨层级传递的时候,假如中间某一组件 shouldComponentupdate return false 了之后导致后代不会更新 context 里面的数据。

16.XXX
1. 构造 Provider Consumer
2. 父组件 <Provider value={} /> 提供数据
3. 后代组件<Consumer>{ () => {}}</Consumer>获取数据

state = {
  theme: 'purple',
  handleToggleTheme: this.handleToggleTheme
}
静态属性 无法获取实例的 this