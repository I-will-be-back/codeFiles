<template>
  <div class="shortText">
    <div class="bold" :class="size ? 'big' : 'small'" v-text="title"></div>
    <div class="gray" v-text="text"></div>
  </div>
</template>

<script>
export default {
  name: 'shortText',
  props: ['title', 'text', 'size'],
};
</script>

<style lang="stylus" scoped>
.shortText
  .bold
    font-weight 600
    margin-top 0.5vh
  .big
    font-size 1rem
  .small
    font-size 0.8rem
    margin-top 0.5vh
  .gray
    color gray
    font-size 0.8rem
    margin-top 0.5vh
</style>

