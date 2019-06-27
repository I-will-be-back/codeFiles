<template>
  <div class="shop">
    <img :src="data.src" alt="" class="image">
    <shortText :title="data.title" :text="data.text" :size="data.size" />
    <p class="money">￥{{data.money}}</p>
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
.image
  background-color gray
  height 15vh
.money
  color #FA8919
</style>

