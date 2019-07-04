<template>
  <div id="app" ref="app">
    <titleComponent :titleData="titleData" />
    <router-view @scrollEvent="sroEvent" @fatherData="receiveData" />
    <tabBar />
  </div>
</template>

<script>
import titleComponent from '@/components/Title';
import tabBar from '@/components/common/TabBar';

export default {
  name: 'App',
  components: {
    tabBar, titleComponent,
  },
  data() {
    return {
      titleData: {},
    };
  },
  methods: {
    sroEvent(data) {
      // console.log(data);
      this.titleData.flag = data;
    },
    receiveData(data) {
      this.titleData.text = data.text;
    },
  },
  created() {
    /* eslint-disable */
    this.titleData = {
      flag: false,
      text: '',
      img1: require('./assets/images/find/shake.png'),
      img2: require('./assets/images/find/bar-chart.png'),
      visibility1: true,
      visibility2: true,
    };
    /* eslint-disable */
  },
};
</script>

<style lang="stylus">
#app
  margin 0
  padding 0
  // height 50vh
  overflow hidden
</style>
