<template>
  <div class="title">
    <span v-text="titleData.text" v-show="titleData.visibility1"></span>
    <div>
      <img :src="titleData.img1" v-show="titleData.visibility2" alt="">
      <img :src="titleData.img2" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'titleComponent',
  props: ['titleData'],
};
</script>

<style lang="stylus" scoped>
.title
  display flex
  justify-content space-between
  margin-bottom 2vh
  span
    font-weight bold
    font-size 2rem
</style>
