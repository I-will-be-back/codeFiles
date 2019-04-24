<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition> 
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app{
  min-width: 900px;
}
</style>
