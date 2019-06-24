<template>
  <div class="find" ref="find">
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
      <div class="twoLayout">
        <span class="name">极客新闻</span>
        <span class="more">查看全部</span>
      </div>
      <ul>
        <li v-for="(item, index) in news" :key="index" v-text="item"></li>
      </ul>
    </div>
    <div class="line"></div>
    <img src="" alt="" class="link-image">
    <div class="mall">
      <div class="twoLayout">
        <span class="name">极客商城</span>
        <span class="more">进入商城</span>
      </div>
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
      <div class="twoLayout">
        <span class="name">推荐阅读</span>
        <span class="more">全部专栏</span>
      </div>
      <ul>
        <li></li>
      </ul>
      <div>换一换</div>
    </div>
    <div class="line"></div>
    <div class="popular-course">
      <div class="twoLayout">
        <span class="name">热门课程</span>
        <span class="more">全部课程</span>
      </div>
      <ul>
        <li></li>
      </ul>
      <div>换一换</div>
    </div>
    <div class="line"></div>
    <div class="daily-lesson">
      <div class="twoLayout">
        <span class="name">每日一课</span>
        <span class="more">查看全部</span>
      </div>
      <ul>
        <li></li>
      </ul>
      <div>换一换</div>
      <img src="" alt="">
    </div>
    <div class="line"></div>
    <div class="hot-topics">
      <div class="twoLayout">
        <span class="name">热点专题</span>
        <span class="more">查看全部</span>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="video-mix">
      <div class="twoLayout">
        <span class="name">视频合辑</span>
        <span class="more">查看全部</span>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'find',
  data() {
    return {
      column: '',
      news: [],
    };
  },
  methods: {
    _initScroll() {
      this.findScroll = new BScroll(this.$refs.find, {
        click: true,
        // scrollY: true,
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
.find
  display flex
  flex-direction column
  width 100%
  height 200vh
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
  .twoLayout
    display flex
    justify-content space-between
    .name
      font-size 1.3rem
      font-weight bold
    .more
      color gray
  .line
    border-1px()
</style>
