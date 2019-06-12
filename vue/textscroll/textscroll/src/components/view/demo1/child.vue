<template>
  <div class="container">
    {{sendMsg}}
  </div>
</template>

<script>
export default {
  name: 'child',
  props: {
    sendMsg: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      
    }
  },
}
</script>