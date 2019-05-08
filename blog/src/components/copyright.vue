<template>
  <div id="copyright">
    <hr>
    Copyright© {{ year }} 小胖超<br>
    赣ICP备19005979号
  </div>
</template>

<script>
export default {
  name: 'copyright',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
}
</script>

<style lang="less" scoped>
#copyright{
  font-size: 13px;
}
</style>
