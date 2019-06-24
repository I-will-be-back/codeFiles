<template>
  <div id="app" ref="app">
    <router-view/>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar';

export default {
  name: 'App',
  components: {
    tabBar,
  },
};
</script>

<style lang="stylus">
#app
  margin 0
  padding 0
  // height 50vh
  overflow hidden
</style>
