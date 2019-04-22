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
import copyright from '@/views/copyright.vue'
import home from '@/views/home.vue'

export default {
  name: 'main',
  components: {
    leftnav,copyright,home
  }
}
</script>

<style lang="less">

</style>
