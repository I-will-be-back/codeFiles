<template>
  <div class="container">
    <child :send-msg="text"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'father',
  data() {
    return {
      text: {
        message: '我很帅',
        date: '2019-6-11',
        age: '18'
      }
    }
  },
  components: {
    child
  }
}
</script>