VUE的大型项目开发, 分成两种任务
- 组件开发工作 业务量开发
- vuex 数据设计
  store 独立于组件之外的, 应用APP的中央数据管理中心
  公司:
  CEO state {count: 0} 共享的状态
  actions 日常动作(工)作， 修改状态
  修改: dispatch 派发 action('name', payload) => action commit('mutation_name') mutations => state 修改数据
  mutations 财务部 跟老板(state)接触
  审核对状态的修改是否符合公司的规定
  组件 读 this.$store.state.count
  写 actions(组件调用动作方法)

- data是组件自有数据, 没有多少, 思考会不会被共享, 应用层共享的, 只要多于一个组件要用, 且关系不是简单的兄弟, 就用vuex
- 共享状态
  vuex state管
  mutations 才能修改
  actions 被触发动作并提交mutations
  getters 对state的包装
  mapActions mapGetters 引入组件