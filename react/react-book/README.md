- DOM 之后MVVM兴起
MVVM 封装了DOM(VUE REACT) 让其更高效
- 组件开发 UI开发
  分为多个组件, 拼装页面
  是一个类
  组件只要实例化一下, 就可以用了答到复用的效果
- 组件可以比喻一个粽子, 里面可以包很多东西
  template render()
  css
  js isLiked
- React 和 Vue 都是 MVVM 的一种
  React用来做后台界面 vue做用户界面
  挂载点 界面跟组件的关系, html -> 组件 -> 界面
  DOM 被封装 组件类
  constructor this.state 数据部分
  模板 render
  setData setState({})
- 模板里数据的细化
  es6字符窜模板 每次编译
  setState this.render();
  状态和模板结合的地方在模板的编译,插入数据
  setState 驱动模板重新编译一下 数据驱动