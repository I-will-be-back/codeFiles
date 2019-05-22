<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style scoped>
#app{
  min-width: 900px;
}
</style>

<style lang="stylus">
/* 全局的页面进入和退出效果 */
.fade-enter 
  opacity 0

.fade-enter-active
  opacity 1
  transition opacity .5s

.fade-leave
  opacity 1

.fade-leave-active
  opacity 0
  transition opacity .5s
</style>

