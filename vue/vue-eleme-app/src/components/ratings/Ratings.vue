<template>
  <div class="ratings">
    <div class="rates">
      <div class="score">
        <span class="yellow">{{seller.score}}</span>
        <span class="bold">综合评分</span>
        <span class="small">高于周边商家{{seller.rankRate}}%</span>
      </div>
      <div class="line"></div>
      <div class="otherScore">
        <span class="scoreTitle">服务态度</span><star :star="{'score': seller.serviceScore}"></star><span class="serviceScore">{{seller.serviceScore}}</span><br />
        <span class="scoreTitle">商品评分</span><star :star="{'score': seller.foodScore}"></star><span class="serviceScore">{{seller.foodScore}}</span><br />
        <span class="scoreTitle">送达时间</span><span class="deliveryTime">{{seller.deliveryTime}}分钟</span>
      </div>
    </div>
    <div class="underline"></div>
    <div class="comment">
      <span class="commentTitleAll pads">全部{{allLength}}</span>
      <span class="commentTitleM pads">满意{{rateType}}</span>
      <span class="commentTitleB pads">不满意{{allLength-rateType}}</span>
      <!-- <div><img src="" alt="">只看有内容的评价</div> -->
      <ul class="allComment">
        <li class="everyComment" v-for="(item, index) in ratings" :key="index">
          <div class="onepxline"></div>
          <img :src="item.avatar" class="avatar" alt="">
          <div class="userComment">
            <span class="username">{{item.username}}</span><span class="nowTime">{{item.rateTime}}</span><br/>
            <star :star="{'score': item.score, 'height': 12, 'width': 12}" class="starSmall"></star><span class="deliveryTime">{{item.deliveryTime}}</span><br/>
            <span class="bold">{{item.text}}</span><br />
            <!-- <img> -->
            <span class="dianzhan" v-for="(recommend, index) in item.recommend" :key="index">{{recommend}}</span> 
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
export default {
  name: 'ratings',
  data () {
    return {
      allLength: 0,
      rateType: 0,
      ratings: []
    }
  },
  components: {
    'star': star
  },
  props: ['seller'],
  methods: {
    add0 (m) {
      return m < 10 ? '0' + m : m
    },
    format (timeChuo) {
      let time = new Date(timeChuo);
      let y = time.getFullYear();
      let m = time.getMonth()+1;
      let d = time.getDate();
      let h = time.getHours();
      let mm = time.getMinutes();
      let s = time.getSeconds();
      return y+'-'+ this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
    }
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-rating')
    .then(res => {
      console.log(res)
      if (res.data.errno === 0) {
        this.ratings = res.data.data
        this.allLength = this.ratings.length
        for(let i = 0;i < this.allLength; i++) {
          this.ratings[i].rateTime = this.format(this.ratings[i].rateTime)
          if (this.ratings[i].rateType === 0) {
            this.rateType++
          }
        }
        this.$nextTick(() => { //页面渲染完成才能执行
          // this._initScroll()
        })
      }
    })
  },
  mounted() {
    console.log(this.seller)
  },
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.rates
  height 100px
  margin-top 20px
  border-1px(rgba(7, 17, 27, 0.1))
.score
  float left
  width 35%
  display flex
  flex-direction column
  align-items center
  // border-1px(rgba(7, 17, 27, 0.1))
  .yellow
    font-size 30px
    color yellow
    margin-bottom 12px
  .bold
    font-weight bold
    margin-bottom 12px
    font-size 13px
  .small
    color gray
    font-size 12px
    margin-bottom 12px
.line
  float left
  width 1px
  height 70px
  margin-top 10px
  background-color rgba(7, 17, 27, 0.1)
  // border-1px(rgba(7, 17, 27, 0.1))
.otherScore 
  float right
  width 59%
  /* display: flex;
  flex-direction: column;
  align-items: center; */
.scoreTitle
  display inline-block
  margin-bottom 12px
  margin-right 10px
  font-size 15px
  font-weight bold
.serviceScore
  font-size 16px
  color yellow
.deliveryTime
  color gray
  font-size 14px
.underline
  height 20px
  border-1px(rgba(7, 17, 27, 0.1))
  background-color gray
  opacity 0.1
.comment
  margin-top 20px
  .pads
    display inline-block
    margin-left 10px
    margin-bottom 10px
    height 35px
    line-height 35px
    width 80px
    background #fff
    text-align center
    font-size 14px
  .commentTitleAll
    color white
    background-color blue
  .commentTitleM
    background-color blue
  .commentTitleB
    background-color gray
.allComment
  display flex
  flex-direction column
  .onepxline
    height 1px
    width 100%
    border-1px(rgba(7, 17, 27, 0.1))
    margin-bottom 20px
    margin-top 20px
  .avatar
    width 5%
    width 25px
    height 25px
    border-radius 50%
    float left
    margin-left 10px
    margin-right 10px
  .userComment
    float right
    width 86%
    .username
      font-size 14px
    .nowTime
      font-size 13px
      color gray
      float right
      margin-right 10px
    .starSmall
      // height 10px
    .bold
      display inline-block
      margin-top 10px
      font-weight bold
      font-size 13px
      letter-spacing 1px
    .dianzhan
      border 1px solid gray
      font-size 12px
      color gray 
      height 18px
      line-height 18px
      text-align center
      display inline-block
      padding 0 8px
      margin-right 10px
      margin-top 10px
</style>
