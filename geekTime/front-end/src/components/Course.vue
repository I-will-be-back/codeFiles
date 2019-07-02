<template>
  <div class="course">
    <div class="left">
      <articleTitle :src="course.src" :content="course.content" />
      <shortText :title="course.title" :text="course.text" :size="course.size" />
    </div>
    <img :src="course.people" alt="" class="right">
  </div>
</template>

<script>
import articleTitle from './ArticleTitle';
import shortText from './ShortText';

export default {
  name: 'course',
  components: {
    articleTitle,
    shortText,
  },
  props: ['course'],
};
</script>

<style lang="stylus" scoped>
.course
  background-color rgba(50, 0, 0, .1)
  display flex
  height 20vh
  margin-bottom 3vh
  .left
    width 60%
  .right
    margin-left 4vh
    height 85%
    width 25%
    padding-right 1vh
</style>
