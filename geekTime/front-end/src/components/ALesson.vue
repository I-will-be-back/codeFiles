<template>
  <div class="aLesson">
    <img :src="data.image" alt="" class="image">
    <shortText :size="data.size" :title="data.title" :text="data.text" class="text" />
  </div>
</template>

<script>
import shortText from './ShortText';

export default {
  name: 'aLesson',
  components: {
    shortText,
  },
  props: ['data'],
};
</script>

<style lang="stylus" scoped>
.aLesson
  width 45%
  margin-bottom 2vh
  border 1px solid rgba(0, 0, 0, .1)
  border-radius 5px
  .image
    width 100%
  .text
    margin 0 1vh 1.5vh 1vh
</style>

