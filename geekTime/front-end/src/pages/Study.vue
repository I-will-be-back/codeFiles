<template>
  <div class="study" ref="study">
    <div class="aaa">
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
      sadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsaddsadsadd
    </div>
  </div>
</template>

<script>
export default {
  name: 'study',
  methods: {
    _initScroll() {
      this.findScroll = new BScroll(this.$refs.aaa, {
        click: true,
        // scrollY: true,
      });
    },
  },
  created() {
    // 页面渲染完成才能执行
    this.$nextTick(() => {
      /* eslint-disable */
      this._initScroll();
    });
  },
};
</script>

<style lang="stylus" scoped>
.study
  height 200px
  // line-height 500px
  width 200px
  overflow hidden
  .aaa
    height 700px
    width 200px
    background-color red
</style>
