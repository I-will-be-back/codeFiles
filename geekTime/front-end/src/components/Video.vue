<template>
  <div class="video">
    <img :src="data.src" alt="">
    <shortText :size="data.size" :title="data.title" :text="data.text" />
  </div>
</template>

<script>
import shortText from './ShortText';

export default {
  name: 'video',
  components: {
    shortText,
  },
  props: ['data'],
};
</script>

<style lang="stylus" scoped>
.video
  width 45%
  float left
  margin-left 2vh
  margin-bottom 2vh
  display flex
  justify-content space-around
  border 1px solid rgba(0, 0, 0, .1)
  border-radius 5px
</style>
