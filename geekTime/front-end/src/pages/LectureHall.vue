<template>
  <div class="lectureHall" ref="lectureHall">
    <div class="content">
      <titleComponent :titleData="titleData" />
      <div class="nav-container">
        <div v-for="(item, index) in navData" :key="index" class="nav">
          <img :src="item.img" alt="">
          <p v-text="item.text"></p>
        </div>
      </div>
      <nameAndMore :data="{name: '专栏', more:'查看全部', url: '' }" />
      <subject v-for="(item, index) in subjectData" :key="index" :subjectData="item" />
      <aline />
      <nameAndMore :data="{name: '视频课程', more:'查看全部', url: '' }" />
      <subject v-for="(item, index) in subjectData" :key="index + 3" :subjectData="item" />
      <aline />
      <nameAndMore :data="{name: '每日一课', more: '查看全部', url: ''}" />
      <div class="lesson-container">
        <aLesson v-for="(item, index) in lessonDatas" :data="item" :key="index" />
      </div>
      <aline />
      <nameAndMore :data="{name: '微课', more:'查看全部', url: '' }" />
      <subject v-for="(item, index) in subjectData" :key="index + 6" :subjectData="item" />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import titleComponent from '../components/Title';
import nameAndMore from '../components/NameAndMore';
import subject from '../components/Subject';
import aLesson from '../components/ALesson';
import aline from '../components/common/ALine';

export default {
  name: 'lectureHall',
  components: {
    titleComponent, nameAndMore, subject, aLesson, aline,
  },
  data() {
    return {
      titleData: {},
      navData: [],
      subjectData: [],
      lessonDatas: [],
    };
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.lectureHall, {
        click: true,
      });
    },
  },
  created() {
    /* eslint-disable */
    this.titleData = {
      text: '讲堂',
      img1: require('../assets/images/find/shake.png'),
      img2: require('../assets/images/find/bar-chart.png'),
      visibility1: true,
      visibility2: true,
    };
    this.navData = [
      {
        img: require('../assets/images/lectureHall/icon1.png'),
        text: '专栏',
      },
      {
        img: require('../assets/images/lectureHall/icon2.png'),
        text: '视频教程',
      },
      {
        img: require('../assets/images/lectureHall/icon3.png'),
        text: '每日一课',
      },
      {
        img: require('../assets/images/lectureHall/icon1.png'),
        text: '微课',
      },
    ];
    this.subjectData = [
      {
        image: require('../assets/images/person/person1.jpg'),
        text: '编辑训练营',
        who: '总编室',
        introduction: '极客邦科技总编室',
        number1: 43,
        number2: 2811,
        newPrice: 68,
        oldPrice: 99,
        way: '试读',
      },
      {
        image: require('../assets/images/person/person2.jpg'),
        text: '编辑训练营',
        who: '总编室',
        introduction: '极客邦科技总编室',
        number1: 43,
        number2: 2811,
        label: '限时',
        newPrice: 68,
        way: '试读',
      },
      {
        image: require('../assets/images/person/person3.jpg'),
        text: '编辑训练营',
        who: '总编室',
        introduction: '极客邦科技总编室',
        number1: 43,
        number2: 2811,
        label: '限时',
        newPrice: 68,
        oldPrice: 99,
        way: '试读',
      }
    ];
    this.lessonDatas = [
      {
        size: false,
        title: '创业型公司2周年自研通用扩展自动...',
        text: '沈剑 58速递CTO',
        src: require('../assets/images/swipe/swipe5.jpg'),
      },
      {
        size: false,
        title: '创业型公司2周年自研通用扩展自动...',
        text: '沈剑 58速递CTO',
        src: require('../assets/images/swipe/swipe5.jpg'),
      },
      {
        size: false,
        title: '创业型公司2周年自研通用扩展自动...',
        text: '沈剑 58速递CTO',
        src: require('../assets/images/swipe/swipe5.jpg'),
      },
      {
        size: false,
        title: '创业型公司2周年自研通用扩展自动...',
        text: '沈剑 58速递CTO',
        src: require('../assets/images/swipe/swipe5.jpg'),
      },
    ];
    /* eslint-disable */
    this.$nextTick(() => {
      /* eslint-disable */
      this._initScroll();
      /* eslint-disable */
    });
  },
};
</script>

<style lang="stylus" scoped>
.lectureHall
  height 100vh
  .content
    height 320vh
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
      flex-wrap wrap      
</style>
