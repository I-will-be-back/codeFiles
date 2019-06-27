<template>
  <div class="nameAndMore">
    <div class="name">{{data.name}}</div>
    <router-link :to="data.url" class="more">{{data.more}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'nameAndMore',
  props: ['data'],
};
</script>

<style lang="stylus" scoped>
.nameAndMore
  margin 3vh 0
  display flex
  justify-content space-between
  .name
    font-size 1.3rem
    font-weight bold
    &::before
      content ''
      margin-right 2vh
      height 60%
      display inline-block
      border-left 2px #FA8919 solid
  .more
    color gray
    text-decoration none
</style>

