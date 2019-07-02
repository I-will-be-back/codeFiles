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
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import titleComponent from '../components/Title';

export default {
  name: 'lectureHall',
  components: {
    titleComponent,
  },
  data() {
    return {
      titleData: {},
      navData: [],
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
.nav-container
  display flex
  justify-content space-around
  .nav
    width 20%
    text-align center
    img
      width 40%
</style>
