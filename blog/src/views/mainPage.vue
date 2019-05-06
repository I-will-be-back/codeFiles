<template>
  <div>
    <leftnav />
    <router-link to="/">Home</router-link>
    <router-view />
    <copyright />
  </div>
</template>

<script>
import leftnav from '@/views/leftnav.vue'
import copyright from '@/components/copyright.vue'
//import home from '@/views/home.vue'

export default {
  name: 'mainPage',
  components: {
    leftnav,copyright
  }
}
</script>

<style lang="less">

</style>
