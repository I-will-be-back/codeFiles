<template>
  <div class="shortText">
    <p class="bold" :class="size ? 'big' : 'small'" v-text="title"></p>
    <p class="gray" v-text="text"></p>
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
  .big
    font-size 1.2rem
  .small
    font-size 0.95rem
  .gray
    color gray
    font-size 0.8rem
</style>

