<template>
  <div class="course">
    <div class="left">
      <articleTitle :src="course.src" :content="course.content" class="title" />
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
  height 18vh
  margin-bottom 3vh
  .left
    margin-left 2vw
    width 55%
    .title
      margin 2vh 0 .5vh 0
  .right
    margin-left 6vh
    height 97%
    width 25%
</style>
