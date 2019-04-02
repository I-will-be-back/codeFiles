<template>
  <div class="hello">
    <h1>{{ msg }}-{{$route.params.newAddress}}</h1>
    <h3>{{$store.state.count}}</h3>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>
<script>
import store from '@/vuex/store'
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am JSchao'
    }
  },
  store
}
</script>
<style scoped>
</style>