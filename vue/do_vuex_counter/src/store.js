import Vue from 'vue'
import Vuex from 'vuex'

// this代表Vue全局实例 this.$store

Vue.use(Vuex) // 启动Vuex,可拔插的

// 读取
const state = {
  count: 0
}

// 修改要管起来 要严谨
const mutations = {
  // 按我的方式来改
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

// 相当于组件中的computed
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  }
}

// 组件只能跟actions交流
// 组件不可以直接跟mutations交流
const actions = {
  increment ({commit}) {
    commit('increment')
  },
  decrement ({commit}) {
    // console.log(commit)
    commit('decrement')
  },
  incrementIfOdd ({commit, state}) {
    // 将组件逻辑放到action
    // 是否是奇数
    // state.count % 2 !== 0
    if (state.count % 2 !== 0) commit('increment')
  },
  incrementAsync ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 2000)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
