<template>
  <div class="aLesson">
    <img :src="data.src" alt="" class="image">
    <shortText :size="data.size" :title="data.title" :text="data.text" />
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
  width 40%
  margin 0 2.2vh
  // float left
  .image
    height 10vh
</style>

