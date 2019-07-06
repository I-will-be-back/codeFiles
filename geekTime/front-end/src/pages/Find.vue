<template>
  <div class="find" ref="scroll">
    <div class="content">
      <mt-search class="search"
        :show="false"
        cancel-text="取消"
        placeholder="搜索课程、课程内容、每日一课等">
      </mt-search>
      <mt-swipe :auto="2000" class="swipe">
        <mt-swipe-item v-for="(item, index) in swipeImage" :key="index">
          <img :src="item.image" alt="" class="swipe-image">
        </mt-swipe-item>
      </mt-swipe>
      <div class="column">
        <div class="column-left">
          <span>{{column}}&nbsp;></span>
          <articleTitle :src="recommendDatas.icon" :content="recommendDatas.content" />
        </div>
        <img :src="recommendDatas.image" class="column-right" alt="">
      </div>
      <div class="news">
        <nameAndMore :data="{name: '极客新闻', more: '查看全部', url: ''}" />
        <div class="news-article">
          <articleTitle v-for="(item, index) in articleDatas" :key="index"
          :src="item.icon" :content="item.title" />
        </div>
      </div>
      <aline />
      <div class="mall">
        <nameAndMore :data="{name: '极客商城', more: '进入商城', url: ''}" />
        <div class="shop-container">
          <shop v-for="(item, index) in shopDatas" :key="index" :data="item" />
        </div>
      </div>
      <aline />
      <div class="recommended-read">
        <nameAndMore :data="{name: '推荐阅读', more: '全部专栏', url: ''}" />
        <course v-for="(item, index) in readDatas" :course="item" :key="index" class="course" />
        <changeOne />
      </div>
      <aline />
      <div class="popular-course">
        <nameAndMore :data="{name: '热门课程', more: '全部课程', url: ''}" />
        <course v-for="(item, index) in courseDatas" :course="item" :key="index" class="course" />
        <changeOne />
      </div>
      <aline />
      <div class="daily-lesson">
        <nameAndMore :data="{name: '每日一课', more: '查看全部', url: ''}" />
        <div class="lesson-container">
          <aLesson v-for="(item, index) in lessonDatas" :data="item" :key="index" />
        </div>
        <changeOne />
      </div>
      <aline />
      <div class="hot-topics">
        <nameAndMore :data="{name: '热点专题', more: '查看全部', url: ''}" />
        <div class="hot-image">
          <img v-for="(item, index) in topicImage" :src="item.image" :key="index" alt="">
        </div>
      </div>
      <aline />
      <div class="video-mix">
        <nameAndMore :data="{name: '视频合辑', more: '查看全部', url: ''}" />
        <div class="video-container">
          <videoComponent v-for="(item, index) in videoDatas"
          :key="index"
          :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import nameAndMore from '../components/NameAndMore';
import articleTitle from '../components/ArticleTitle';
import aline from '../components/common/ALine';
import shop from '../components/Shop';
import course from '../components/Course';
import changeOne from '../components/ChangeOne';
import videoComponent from '../components/Video';
import aLesson from '../components/ALesson';

export default {
  name: 'find',
  components: {
    nameAndMore,
    articleTitle,
    aline,
    shop,
    course,
    changeOne,
    videoComponent,
    aLesson,
  },
  data() {
    return {
      column: '',
      scrollY: 0,
      flag: false,
      swipeImage: [],
      iconDatas: [],
      recommendDatas: {},
      articleDatas: [],
      shopDatas: [],
      readDatas: [],
      courseDatas: [],
      lessonDatas: [],
      topicImage: [],
      videoDatas: [],
    };
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: 3,
      });
      this.scroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
        // console.log(this.scrollY);
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
    this.column = '卖桃者说';
    this.$http.get('http://localhost:3000/find/1').then((res) => {
      if (res.status === 200) {
        const findData = res.data;
        this.$emit('fatherData', findData.topData);
        // console.log(findData);
        this.swipeImage = findData.carousel;
        this.iconDatas = findData.icon;
        this.recommendDatas = findData.recommend;
        this.recommendDatas = {
          ...this.recommendDatas,
          icon: this.iconDatas[0].image,
        };
        this.articleDatas = findData.news;
        this.articleDatas = this.articleDatas.map(article => ({
          ...article,
          icon: this.iconDatas[0].image,
        }));
        this.shopDatas = findData.shop;
        this.shopDatas = this.shopDatas.map(item => ({
          ...item,
          size: false,
        }));
        this.readDatas = findData.read;
        this.readDatas = this.readDatas.map(item => ({
          ...item,
          icon: this.iconDatas[1].image,
          size: true,
        }));
        this.courseDatas = findData.course;
        this.courseDatas = this.courseDatas.map(item => ({
          ...item,
          icon: this.iconDatas[1].image,
          size: true,
        }));
        this.lessonDatas = findData.lesson;
        this.lessonDatas.map(alesson => ({
          ...alesson,
          size: false,
        }));
        this.topicImage = findData.topic;
        this.videoDatas = findData.video;
        this.videoDatas = this.videoDatas.map(item => ({
          ...item,
          size: false,
          text: `共${item.number}个视频`,
        }));
      }
    });
    // 页面渲染完成才能执行
    this.$nextTick(() => {
      this.initScroll();
    });
  },
};
</script>

<style lang="stylus" scoped>
.find
  display flex
  flex-direction column
  height 100vh
  overflow hidden
.content
  padding-bottom 16vh
  // 搜索框
  .search
    margin-top 1vh
    height 8vh
  // 轮播图
  .swipe
    margin-top 2vh
    height 20vh
    width 100%
    border-radius 5px
    background-color gray
    .swipe-image
      width 100%
      height 100%
  .column
    display flex
    justify-content space-around
    padding 1vh 0
    margin-top 3vh
    height 9vh
    border 1px solid rgba(0, 0, 0, .1)
    border-radius 5px
    .column-left
      display flex
      flex-direction column
      height 90%
      justify-content space-between
      span
        display inline-block
        font-weight 600
        font-size 1.1rem
    .column-right
      margin-top 1vh
      width 6vh
      height 6vh
      border 4px solid rgba(0, 0, 0, .1)
      border-radius 50%
  .news-article
    margin-left 10px
    display flex
    flex-direction column
    justify-content space-between
    height 16vh
  .hot-image
    display flex
    justify-content space-around
    height 12vh
    img
      width 45%
      border-radius 5px
  .shop-container
    display flex
    justify-content space-around
  .lesson-container
    display flex
    justify-content space-around
    flex-wrap wrap
    margin-bottom 2vh
  .video-container
    display flex
    justify-content space-around
    flex-wrap wrap
</style>
