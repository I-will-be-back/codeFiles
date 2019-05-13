<template>
  <div id="app">
    <top />
    <div id="main">
      <leftnav />
      <router-view></router-view>
    </div>
    <copyright />
  </div>
</template>

<script>
import top from '@/components/top.vue';
import copyright from '@/components/copyright.vue';
import leftnav from '@/components/leftnav.vue';

export default {
  name: 'app',
  components: {
    copyright,leftnav,top
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-width: 600px;
}

#main {
  display: flex;
}
</style>
