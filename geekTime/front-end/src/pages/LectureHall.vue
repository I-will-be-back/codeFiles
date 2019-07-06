<template>
  <div class="lectureHall" ref="lectureHall">
    <div class="content">
      <div class="nav-container">
        <div v-for="(item, index) in navDatas" :key="index" class="nav">
          <img :src="item.image" alt="">
          <p v-text="item.title"></p>
        </div>
      </div>
      <nameAndMore :data="{name: '专栏', more:'查看全部', url: '' }" />
      <subject v-for="(item, index) in columndata" :key="index" :subjectData="item" />
      <aline />
      <nameAndMore :data="{name: '视频课程', more:'查看全部', url: '' }" />
      <subject v-for="(item, index) in videoCoursedata" :key="index + 3" :subjectData="item" />
      <aline />
      <nameAndMore :data="{name: '每日一课', more: '查看全部', url: ''}" />
      <div class="lesson-container">
        <aLesson v-for="(item, index) in lessonDatas" :data="item" :key="index" />
      </div>
      <aline />
      <nameAndMore :data="{name: '微课', more:'查看全部', url: '' }" />
      <subject v-for="(item, index) in microLessondata" :key="index + 6" :subjectData="item" />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import nameAndMore from '../components/NameAndMore';
import subject from '../components/Subject';
import aLesson from '../components/ALesson';
import aline from '../components/common/ALine';

export default {
  name: 'lectureHall',
  components: {
    nameAndMore, subject, aLesson, aline,
  },
  data() {
    return {
      flag: false,
      navDatas: [],
      lessonDatas: [],
      columndata: [],
      videoCoursedata: [],
      microLessondata: [],
    };
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.lectureHall, {
        click: true,
        probeType: 3,
      });
      this.scroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
        if (this.scrollY <= 0) {
          this.flag = true;
        } else {
          this.flag = false;
        }
        this.$emit('scrollEvent', this.flag);
      });
    },
  },
  created() {
    this.$emit('scrollEvent', true);
    this.$http.get('http://localhost:3000/lectureHall/').then((res) => {
      if (res.status === 200) {
        const lectureHallData = res.data;
        this.$emit('fatherData', lectureHallData.topData);
        this.navDatas = lectureHallData.nav;
        this.lessonDatas = lectureHallData.lesson;
        this.lessonDatas = this.lessonDatas.map(alesson => ({
          ...alesson,
          size: false,
        }));
        // console.log(this.lessonDatas);
        lectureHallData.costCourse.forEach((item) => {
          if (item.type === 1) {
            // console.log(111);
            this.columndata.push(item);
          } else if (item.type === 2) {
            this.videoCoursedata.push(item);
          } else if (item.type === 3) {
            this.microLessondata.push(item);
          }
        });
      }
    });
    this.$nextTick(() => {
      this.initScroll();
    });
  },
};
</script>

<style lang="stylus" scoped>
.lectureHall
  margin-top 3vh
  height 100vh
  overflow hidden
.content
  padding-bottom 16vh
  .nav-container
    display flex
    justify-content space-around
    .nav
      width 20%
      text-align center
      img
        width 40%
  .lesson-container
    display flex
    justify-content space-around
    flex-wrap wrap
    margin-bottom 3vh
</style>
