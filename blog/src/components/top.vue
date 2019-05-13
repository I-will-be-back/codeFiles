<template>
  <div id="top">
    <div class="title">
      <span class="name">小胖超</span>
      <span v-text="time"></span>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time:this.getTime()
    }
  },
  methods: {
    getTime () {
      let that = this;
      window.setInterval(function() {
        that.time = that.$moment().format('YYYY年 MM月 DD日, hh:mm:ss');
      } ,1000);
    }
  },
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 66px;
}

.name {
  font-size: 30px;
}
</style>
