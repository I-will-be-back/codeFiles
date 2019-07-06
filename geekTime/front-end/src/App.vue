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
    this.$http.get('http://localhost:3000/top/3').then((res) => {
      if (res.status === 200) {
        this.titleData = {
          flag: false,
          text: '',
          img1: res.data.data.image1,
          img2: res.data.data.image2,
          visibility1: true,
          visibility2: true,
        };
      }
    });
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
