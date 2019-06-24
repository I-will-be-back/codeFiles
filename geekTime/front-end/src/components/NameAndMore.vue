<template>
  <div class="nameAndMore">
    <span class="name">{{data.name}}</span>
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
  display flex
  justify-content space-between
  .name
    font-size 1.3rem
    font-weight bold
  .more
    color gray
    text-decoration none
</style>

