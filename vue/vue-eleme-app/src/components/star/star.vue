<template>
  <span class="star">
    <i v-for="item in yellowStar" :key="item.name" class="yellow"></i>
    <i v-if="halfStar" class="half"></i>
    <i v-for="item in whiteStar" :key="item.name" class="white"></i>
  </span>
</template>

<script>
export default {
  data() {
    return {
      yellowStar: 0,
      halfStar: false,
      whiteStar: 0
    }
  },
  props: ['score'],
  beforeMount () {
    this.yellowStar = Math.floor(this.score)
    
    if (this.score > this.yellowStar) {
      this.halfStar = true
      this.whiteStar = 4 - this.yellowStar
    } else {
      this.whiteStar = 5 - this.yellowStar
    }
    // console.log(this.score)
    // console.log(this.yellowStar)
    // console.log(this.halfStar)
    // console.log(this.whiteStar)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.yellow, .half, .white
  height 18px
  width 18px
  display inline-block
  background-repeat no-repeat
  margin-right 3px
.yellow
  bg-image('star24_on')
.half
  bg-image('star24_half')
.white
  bg-image('star24_off')
</style>
