<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>导航:
      <router-link :to="{name: 'HelloWorld'}">首页</router-link>|
      <router-link :to="{name: 'Look', params: {id: 2}}">看看</router-link>|
      <span class='look1' @click="go">look1</span>|
      <router-link :to="{name: 'LookTwo', params: {id: 123}}">look2</router-link>
      <router-link :to="{path: '/detail'}">重定向</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go () {
      // 编程式路由跳转
      this.$router.push({name: 'LookOne', params: {name: 'cc'}})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
