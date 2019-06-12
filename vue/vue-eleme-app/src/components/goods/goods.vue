
<template>
  <div>
    <div class="goods">
      <!-- ref相当于获取DOM结构 -->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" :key="index" class="menu-item" 
          :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)">
          <span class="text border-1px">
            <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Goods',
  data () {
    return {
      goods:[],
      classMap:[],//这里可以不用声明
    
    }
  },
  methods: {
    _initScroll () {
      //把ref为menuWrapper的DOM节点上加上滑动
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click: true//可以滑动，同时不影响上面的点击事件
      })
    }
  },
  created() {
   this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
   this.$http.get('https://www.easy-mock.com/mock/5cf2951d537bd6458373ef04/example_copy/vue-element-goods')
   .then(res=>{
     //console.log(res);
     if (res.data.errno === 0) {
       this.goods = res.data.data
       //页面渲染完成以后才能执行
       this.$nextTick(()=>{
         this._initScroll();
       })
     }
   })
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.goods
  display flex
  position absolute
  top 140px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
      .text
        border-none()
        .icon
          display inline-block
          vertical-align top 
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease {
          bg-image('decrease_3');
          }

          &.discount {
            bg-image('discount_3');
          }

          &.guarantee {
            bg-image('guarantee_3');
          }

          &.invoice {
            bg-image('invoice_3');
          }

          &.special {
            bg-image('special_3');
          }

</style>