<template>
  <div id="copyright">
    <el-divider></el-divider>
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
* {
  margin: 0;
  padding: 0;
}
#copyright{
  font-size: 13px;
}
</style>
