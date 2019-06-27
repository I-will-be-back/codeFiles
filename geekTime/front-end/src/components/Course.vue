<template>
  <div class="course">
    <articleTitle :src="course.src" :content="course.content" />
    <shortText :title="course.title" :text="course.text" :size="course.size" />
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

</style>
