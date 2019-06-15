<template>
  <div id="app">
    <counter />
    <counter-brother />
  </div>
</template>

<script>
// 两个组件都要用到count状态, 怎么办?
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'

export default {
  name: 'App',
  components: {
    'counter': Counter,
    'counter-brother': CounterBrother
  }
}
</script>
