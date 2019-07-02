<template>
  <div class="find" ref="scroll">
    <div class="content">
      <div class="title">
        <span>发现</span>
        <div>
          <img src="../assets/images/find/shake.png" alt="">
          <img src="../assets/images/find/bar-chart.png" alt="">
        </div>
      </div>
      <mt-search class="search"
        :show="false"
        cancel-text="取消"
        placeholder="搜索课程、课程内容、每日一课等">
      </mt-search>
      <mt-swipe :auto="2000" class="swipe">
        <mt-swipe-item v-for="(item, index) in swipeImage" :key="index">
          <img :src="item" alt="" class="swipe-image">
        </mt-swipe-item>
      </mt-swipe>
      <div class="column">
        <div class="column-left">
          <span>{{column}}&nbsp;></span>
          <articleTitle :src="articleDatas[0][0]" :content="articleDatas[1][0]" />
        </div>
        <img src="../assets/images/person/person1.jpg" class="column-right" alt="">
      </div>
      <div class="news">
        <nameAndMore :data="{name: '极客新闻', more: '查看全部', url: ''}" />
        <div class="news-article">
          <articleTitle v-for="index in 4" :key="index"
          :src="articleDatas[0][0]" :content="articleDatas[1][index]" />
        </div>
      </div>
      <aline />
      <imageLink index=0 />
      <div class="mall">
        <nameAndMore :data="{name: '极客商城', more: '进入商城', url: ''}" />
        <div class="shop-container">
          <shop v-for="(item, index) in shopDatas" :key="index" :data="item" />
        </div>
      </div>
      <aline />
      <imageLink index=1 />
      <!-- <div class="advisory">资讯</div> -->
      <div class="recommended-read">
        <nameAndMore :data="{name: '推荐阅读', more: '全部专栏', url: ''}" />
        <course v-for="(item, index) in courseDatas" :course="item" :key="index" class="course" />
        <changeOne />
      </div>
      <aline />
      <imageLink index=2 />
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
        <img src="" alt="">
      </div>
      <aline />
      <div class="hot-topics">
        <nameAndMore :data="{name: '热点专题', more: '查看全部', url: ''}" />
        <img v-for="(item, index) in 2"
        :src="swipeImage[index]"
        :key="index" alt=""
        style="height: 10vh;margin-left: 2.5vh">
      </div>
      <aline />
      <div class="video-mix">
        <nameAndMore :data="{name: '视频合辑', more: '查看全部', url: ''}" />
        <div class="video-container">
          <videoComponent v-for="(item, index) in videoDatas"
          :key="index"
          :data="item"
          class="video-child" />
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
import imageLink from '../components/ImageLink';
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
    imageLink,
    shop,
    course,
    changeOne,
    videoComponent,
    aLesson,
  },
  data() {
    return {
      column: '',
      swipeImage: [],
      shopDatas: [],
      articleDatas: [],
      courseDatas: [],
      videoDatas: [],
      lessonDatas: [],
    };
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
      });
    },
  },
  created() {
    this.column = '卖桃者说';
    /* eslint-disable */
    this.swipeImage = [
      require('../assets/images/swipe/swipe1.jpg'),
      require('../assets/images/swipe/swipe2.jpg'),
      require('../assets/images/swipe/swipe3.jpg'),
      require('../assets/images/swipe/swipe4.jpg'),
      require('../assets/images/swipe/swipe5.jpg'),
    ];
    this.shopDatas = [
      {
        src: require('../assets/images/book/book1.png'),
        size: false,
        title: '[热]测试工程师',
        text: '全栈技术进阶与实战',
        money: 69,
      },
      {
        src: require('../assets/images/book/book2.png'),
        size: false,
        title: '超大防水鼠标垫',
        text: '极客时间精选',
        money: 39,
      },
      {
        src: require('../assets/images/book/book3.png'),
        size: false,
        title: '充值礼品卡',
        text: '90充100',
        money: 90,
      },
    ];
    this.articleDatas = [
      [
        require('../assets/images/find/play.png'),
        require('../assets/images/find/text.png'),
      ],
      [
        '第38期|为什么获得提拔的不是你?',
        '蚂蚁金服CTO程立: 数字金融关键技术的挑战',
        'VIPKID用户增长200倍背后的技术管理方法',
        '人生中的3钟成功思维',
        '观点:为什么不选择GO语言',
      ],
    ];
    this.courseDatas = [
      {
        content: '趣味网络协议',
        size: true,
        title: '第26讲|云中的网络安全:虽然不是土豪',
        text: '刘超|网易研究院云计算技术部...',
        src: this.articleDatas[0][1],
        people: require('../assets/images/person-opacity/person1.png'),
      },
      {
        size: true,
        content: '从0开始学习为服务',
        title: '32|微服务混合云部署实践',
        text: '胡忠想|微博技术专家',
        src: this.articleDatas[0][1],
        people: require('../assets/images/person-opacity/person2.png'),
      },
      {
        size: true,
        content: '软件工程之类',
        title: '16|怎样才能写出好项目文档?',
        text: '宝玉|Groipon资深工程师,微...',
        src: this.articleDatas[0][1],
        people: require('../assets/images/person-opacity/person3.png'),
      }
    ];
    this.videoDatas = [
      {
        size: false,
        title: '十年',
        text: '公6个视频',
        src: require('../assets/images/lectureHall/icon1.png'),
      },
      {
        size: false,
        title: '十年',
        text: '公6个视频',
        src: require('../assets/images/lectureHall/icon1.png'),
      },
      {
        size: false,
        title: '十年',
        text: '公6个视频',
        src: require('../assets/images/lectureHall/icon1.png'),
      },
      {
        size: false,
        title: '十年',
        text: '公6个视频',
        src: require('../assets/images/lectureHall/icon1.png'),
      },
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
    // 页面渲染完成才能执行
    this.$nextTick(() => {
      /* eslint-disable */
      this._initScroll();
    });
  },
};
</script>

<style lang="stylus" scoped>
.scroll
  height 200vh
.find
  display flex
  flex-direction column
  width 100%
  height 100vh
  overflow hidden
  .title
    display flex
    justify-content space-between
    span
      font-weight bold
      font-size 2rem
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
      border-radius 50%
  .news-article
    margin-left 10px
    display flex
    flex-direction column
    justify-content space-between
    height 16vh
  .shop-container
    display flex
    justify-content space-around
  .video-container
    padding-bottom 30vh
  .lesson-container
    display flex
    flex-wrap wrap
</style>
