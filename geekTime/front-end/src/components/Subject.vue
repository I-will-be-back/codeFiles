<template>
  <div class="subject">
    <div class="left">
      <img :src="subjectData.image" alt="" class="left-image">
    </div>
    <div class="right">
      <div v-text="subjectData.text" class="first"></div>
      <div class="second">
        <span v-text="subjectData.who" class="small bgc"></span>
        <span v-text="subjectData.introduction" class="small bgc"></span>
      </div>
      <div class="third">
        <span class="small gray">{{ subjectData.number1 }}讲 | {{ subjectData.number2 }}人已学习</span>
      </div>
      <div class="fourth">
        <span v-text="subjectData.label"
        v-if="subjectData.label ? true : false" class="small label"></span>
        <span class="orange">￥{{ subjectData.newPrice }}</span>
        <span v-if="subjectData.oldPrice ? true : false"
        class="small line gray">￥{{ subjectData.oldPrice }}</span>
        <span class="orange way small" v-text="subjectData.way"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subject',
  props: ['subjectData'],
};
</script>

<style lang="stylus" scoped>
.subject
  display flex
  height 18vh
  justify-content space-between
  margin-bottom 3vh
  .left
    width 27%
    .left-image
      width 100%
      height 100%
  .right
    width 70%
    .first
      font-weight bold
      font-size 1.2rem
    .small
      font-size 0.8rem
    .bgc
      padding 2px
      background-color rgba(0, 0, 0, .1)
    .gray
      color gray
    .orange
      color #FA8919
    .second
      margin-top 1vh
    .third
      margin-top 0.5vh
    .fourth
      margin-top 3vh
      .label
        color red
        border 1px red solid
      .line
        text-decoration line-through
      .way
        float right
        font-weight 600
        padding 3px 8px
        background-color rgba(50, 0, 0, .1)
        border-radius 8px
</style>
