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
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      <div class="column">
        {{column}}
      </div>
      <div class="news">
        <nameAndMore :data="{name: '极客新闻', more: '查看全部', url: ''}" />
        <ul>
          <li v-for="(item, index) in news" :key="index" v-text="item"></li>
        </ul>
      </div>
      <div class="line"></div>
      <img src="" alt="" class="link-image">
      <div class="mall">
        <nameAndMore :data="{name: '极客商城', more: '进入商城', url: ''}" />
        <ul>
          <li>
            书
            <!-- <img src="" alt="">
            {{}}
            {{}}
            {{}} -->
          </li>
        </ul>
      </div>
      <img src="" alt="" class="link-image">
      <div class="line"></div>
      <div class="advisory">资讯</div>
      <div class="recommended-read">
        <nameAndMore :data="{name: '推荐阅读', more: '全部专栏', url: ''}" />
        <ul>
          <li></li>
        </ul>
        <div>换一换</div>
      </div>
      <div class="line"></div>
      <div class="popular-course">
        <nameAndMore :data="{name: '热门课程', more: '全部课程', url: ''}" />
        <ul>
          <li></li>
        </ul>
        <div>换一换</div>
      </div>
      <div class="line"></div>
      <div class="daily-lesson">
        <nameAndMore :data="{name: '每日一课', more: '查看全部', url: ''}" />
        <ul>
          <li></li>
        </ul>
        <div>换一换</div>
        <img src="" alt="">
      </div>
      <div class="line"></div>
      <div class="hot-topics">
        <nameAndMore :data="{name: '热点专题', more: '查看全部', url: ''}" />
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="video-mix">
        <nameAndMore :data="{name: '视频合辑', more: '查看全部', url: ''}" />
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import nameAndMore from '../components/NameAndMore';

export default {
  name: 'find',
  components: {
    nameAndMore,
  },
  data() {
    return {
      column: '',
      news: [],
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
    this.news = [
      '蚂蚁金服CTO程立: 数字金融关键技术的挑战',
      'VIPKID用户增长200倍背后的技术管理方法',
      '人生中的3钟成功思维',
      '观点:为什么不选择GO语言',
    ];
    // 页面渲染完成才能执行
    this.$nextTick(() => {
      /* eslint-disable */
      this._initScroll();
    });
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/border-half';
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
  .search
    height 8vh
  .swipe
    height 20vh
    width 100%
    border-radius 5px
    background-color gray
  .line
    border-1px()
</style>
