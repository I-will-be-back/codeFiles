<template>
  <div class="study" ref="study">
    <div class="time-container">
      总时长
      <span v-if="day > 0"><span class="time" v-text="day"></span>天</span>
      <span v-if="hour > 0"><span class="time" v-text="hour"></span>小时</span>
      <span class="time" v-text="minute"></span> 分钟 ></div>
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
      day: 0,
      hour: 0,
      minute: 0,
      recDatas: [],
    };
  },
  components: {
    Recording,
  },
  methods: {
    subscripe() {
      // sessionStorage.setItem('selected', JSON.stringify('lectureHall'));
      // this.$router.replace('/lectureHall');
    },
  },
  created() {
    this.$emit('scrollEvent', true);
    this.$http.get('http://localhost:3000/study/1').then((res) => {
      if (res.status === 200) {
        const studyData = res.data;
        this.$emit('fatherData', studyData.topData);
        // console.log(studyData);
        this.day = studyData.studytime.day;
        this.hour = studyData.studytime.hour;
        this.minute = studyData.studytime.minute;
        this.recDatas = [
          { frequency: studyData.recording.number1, text: '笔记' },
          { frequency: studyData.recording.number2, text: '留言' },
          { frequency: studyData.recording.number3, text: '收藏' },
          { frequency: studyData.recording.number4, text: '下载' },
        ];
      }
    });
  },
};
</script>

<style lang="stylus" scoped>
.time-container
  padding-left 3vw
  background-color rgba(100, 0, 0, .1)
  width 38vw
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
