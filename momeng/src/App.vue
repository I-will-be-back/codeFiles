<template>
  <div id="app">
    <topNav />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <copyright />
  </div>
</template>

<script>
import topNav from '@/components/topNav.vue';
import copyright from '@/components/copyright.vue';

export default {
  name: 'App',
  components: {
    topNav, copyright 
  }
}

</script>

<style scoped>
#app{
  min-width: 900px;
}

/* 进入和退出效果 */
.fade-enter {
  opacity:0;
}

.fade-enter-active{
  opacity:1;
  transition:opacity .5s;
}
 
.fade-leave{
  opacity:1;
}

.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
