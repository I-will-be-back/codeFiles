<template>
  <div class="articleTitle">
    <img :src="src" alt="" class="img">
    <span v-text="content" class="content"></span>
  </div>
</template>

<script>
export default {
  name: 'articleTitle',
  props: ['src', 'content'],
};
</script>

<style lang="stylus" scoped>
.img
  width 1.8vh
  height 1.8vh
.content
  margin-left 5px
  display inline-block
  // color gray
  font-size 0.85rem
</style>

