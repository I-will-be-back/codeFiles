<template>
  <div class="shop">
    <div class="image">
      <img :src="data.image" alt="">
    </div>
    <shortText :title="data.title" :text="data.dec" :size="data.size" />
    <div class="money">￥{{data.price}}</div>
  </div>
</template>

<script>
import shortText from '../components/ShortText';

export default {
  name: 'shop',
  components: {
    shortText,
  },
  props: ['data'],
};
</script>

<style lang="stylus" scoped>
.shop
  width 29%
.image
  display flex
  justify-content center
  align-items center
  background-color rgba(0, 0, 0, .1)
  height 16vh
  margin-bottom 2vh
  img
    height 80%
.money
  color #FA8919
  font-size 0.85rem
</style>

