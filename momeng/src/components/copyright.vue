<template>
  <div id="copyright">江西陌梦教育科技有限公司 小胖超 ©copyright {{ nowYear }}</div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      nowYear: new Date().getFullYear()
    }
  },
})
</script>

<style lang="stylus" scoped>
#copyright
  display flex
  justify-content center
  width 100%
</style>
