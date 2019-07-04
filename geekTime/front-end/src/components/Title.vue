<template>
  <div class="title">
    <span v-text="titleData.text" v-show="titleData.visibility1"
    :class="titleData.flag ? 'bold' : 'center'"></span>
    <div class="image-container">
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
  padding 1vh 0
  height 4.5vh
  .bold
    font-weight bold
    font-size 2rem
  .center
    font-size 1.3rem
    font-weight bold
    position absolute
    left 45%
  .image-container
    position absolute
    top 2vh
    right 0
</style>
