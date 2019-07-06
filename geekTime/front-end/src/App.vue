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
      this.titleData.text = data.title;
      this.titleData.img1 = data.image1;
      this.titleData.img2 = data.image2;
    },
  },
  created() {
    this.titleData = {
      flag: false,
      text: '',
      img1: '',
      img2: '',
      visibility1: true,
      visibility2: true,
    };
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
