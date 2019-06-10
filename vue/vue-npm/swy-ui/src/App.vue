<template>
  <div id="app">
    <div class="moor-item">
      <label>Switch</label>
      <moor-switch v-model="lightSwitch">
        开关(开):
      </moor-switch>
    </div>
  </div>
</template>

<script>
import MoorSwitch from './components/MoorSwitch'
export default {
  name: 'app',
  data () {
    return {
      lightSwitch: false
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关:',newValue)
  },
  components: {'moor-switch': MoorSwitch}
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
