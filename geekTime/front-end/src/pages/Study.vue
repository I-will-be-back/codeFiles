<template>
  <div class="study" ref="study">
    <div class="time-container">总时长<span class="time" v-text="time"></span>分钟 ></div>
    <div class="rec-container">
      <Recording v-for="(item, index) in recDatas" :key="index" :recDatas="item" />
    </div>
    <div class="subscription-container">
      <div class="gray" v-if="true">暂无学习内容</div>
      <mt-button class="subscription" @click="subscripe">订阅</mt-button>
    </div>
  </div>
</template>

<script>
import Recording from '../components/Recording';

export default {
  name: 'study',
  data() {
    return {
      time: 27,
      recDatas: [],
    };
  },
  components: {
    Recording,
  },
  methods: {
    subscripe() {
      // sessionStorage.setItem('selected', JSON.stringify('lectureHall'));
      this.$router.replace('/lectureHall');
    },
  },
  created() {
    this.$emit('fatherData', { text: '我的学习' });
    this.$emit('scrollEvent', true);
    this.recDatas = [
      {
        frequency: 0,
        text: '笔记',
      },
      {
        frequency: 0,
        text: '留言',
      },
      {
        frequency: 0,
        text: '收藏',
      },
      {
        frequency: 0,
        text: '下载',
      },
    ];
  },
};
</script>

<style lang="stylus" scoped>
.time-container
  padding-left 3vw
  background-color rgba(100, 0, 0, .1)
  width 31vw
  font-size 1rem
  height 4vh
  line-height 4vh
  border-radius 0 2vh 2vh 0
  margin 2vh 0 2vh 0
  .time
    color #FA8919
.rec-container
  display flex
  justify-content space-around
  background-color rgba(200, 0, 0, .1)
  padding 2vh 0
  margin-bottom 10vh
.subscription-container
  text-align center
  .gray
    color gray
  .subscription
    padding 0 12vw
    border-radius 10vh
    margin-top 2vh
    color white
    background-color #FA8919
</style>
