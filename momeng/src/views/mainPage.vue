<template>
  <div id="mainPage">
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
  name:'mainPage',
  data() {
    return {
      
    }
  },
  components: {
    topNav, copyright 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>
