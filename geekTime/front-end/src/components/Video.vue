<template>
  <div class="video">
    <img :src="data.icon" alt="" class="image">
    <shortText :size="data.size" :title="data.title" :text="data.text" class="text" />
  </div>
</template>

<script>
import shortText from './ShortText';

export default {
  name: 'videoComponent',
  components: {
    shortText,
  },
  props: ['data'],
};
</script>

<style lang="stylus" scoped>
.video
  width 45%
  height 12vh
  display flex
  justify-content space-around
  margin-bottom 2vh
  border 1px solid rgba(0, 0, 0, .1)
  border-radius 5px
  .image
    height 4vh
    margin-top 4vh
  .text
    margin-top 1.5vh
</style>
