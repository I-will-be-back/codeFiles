<template>
  <span class="star">
    <i v-for="(item, index) in 5" :key="index" :class="starType[index]" class="iconStyle" :style="{'height': height + 'px', 'width': width + 'px'}"></i>
  </span>
</template>

<script>
export default {
  data() {
    return {
      starScore: 0,
      height: 0,
      width: 0
    }
  },
  props: ['star'],
  computed: {
    starType () {
      let array = []
      for (let i = 0; i < 5; i++) {
        if (this.starScore >= 1) {
          this.starScore -= 1
          array.push('on') 
        } else if (this.starScore > 0) {
          this.starScore -= 1
          array.push('half') 
        } else {
          array.push('off') 
        }
      }
      return array
    }
  },
  mounted () {
    this.starScore = this.star.score
    this.height = this.star.height || 18
    this.width = this.star.width || 18
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.iconStyle
  background-size contain
  display inline-block
  background-repeat no-repeat
  margin-right 3px
.on
  bg-image('star24_on')
.half
  bg-image('star24_half')
.off
  bg-image('star24_off')
</style>
