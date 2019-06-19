<template>
  <div class="seller">
    <div class="small bold title">{{seller.name}}</div>
    <div class="totalScore">
      <star :star="{'score': seller.score, 'height': 15, 'width': 15}" class="starSmall"></star>
      <span class="smaller">&nbsp;({{seller.ratingCount}})&nbsp;&nbsp;</span>
      <span class="smaller">月售{{seller.sellCount}}单</span>
    </div>
    <div class="information">
      <div class="first">
        <span class="smaller gray">起送价</span><br /><span class="big bold">{{seller.minPrice}}</span><span class="smaller">元</span>
      </div>
      <div class="line"></div>
      <div class="second">
        <span class="smaller gray">商家配送</span><br /><span class="big bold">{{seller.deliveryPrice}}</span><span class="smaller">元</span>
      </div>
      <div class="line"></div>
      <div class="third">
        <span class="smaller gray">平均配送时间</span><br /><span class="big bold">{{seller.deliveryTime}}</span><span class="smaller">分钟</span>
      </div>
    </div>
    <div class="underline"></div>
    <div class="notice">
      <span class="bold">公告与活动</span>
      <div class="red smaller bold activity">{{seller.bulletin}}</div>
    </div>
    <ul>
      <li class="offer" v-for="(item, index) in seller.supports" :key="index">
        <span class="icon" :class="classMap[item.type]"></span>
        <span class="description">{{item.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import star from '@/components/star/star'
export default {
  name: 'seller',
  props:['seller'],
  components: {
    star
  },
  data () {
    return {
      classMap: [],
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
.icon
  display inline-block
  width 16px
  height 16px
  vertical-align top
  margin-left 25px
  background-size 16px 16px
  background-repeat no-repeat
.decrease
  bg-image('decrease_3')
.discount
  bg-image('discount_3')
.guarantee
  bg-image('guarantee_3')
.invoice
  bg-image('invoice_3')
.special
  bg-image('special_3')

.smalll
  font-size 16px
.smaller
  font-size 14px
.bold
  font-weight 600
.red
  color red
.gray
  color gray
.big
  font-size 30px
.title
  margin 20px 0 8px 15px
.first, .second, .third
  float left
  text-align center
  width 33%
.totalScore
  margin 0 0 30px 15px
.line
  float left
  width 1px
  height 40px
  margin-top 8px
  background-color rgba(7, 17, 27, 0.1)
.information
  height 60px
  margin-bottom 10px
.underline
  width 100%
  opacity 0.1
  height 20px
  background gray
.notice
  margin-top 20px
.activity
  margin-top 10px
  margin-left 25px
  line-height 25px
.offer
  margin 20px 0 0 0
</style>
