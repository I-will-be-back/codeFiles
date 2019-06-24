<template>
  <mt-tabbar :fixed="true" class="tabBar" v-model="selected">
    <mt-tab-item v-for="(item, index) in images"
      :key="index"
      :id="item.id"
      @click.native="select(item)"
      :class="item.clicked ? 'selected' : ''">
      <img slot="icon" :src="item.clicked ? item.active : item.noActive">{{item.id}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'tabBar',
  data() {
    return {
      images: [],
      selected: '',
    };
  },
  watch: {
    selected(newVal) {
      // 一旦标签栏变化，把selected的值存到sessionStorage，保存当前值
      // sessionStorage.setItem('selected', JSON.stringify(newVal));
      if (newVal === '发现') {
        this.$router.replace('/');
      } else if (newVal === '讲堂') {
        this.$router.replace('/lectureHall');
      } else if (newVal === '学习') {
        this.$router.replace('/study');
      } else if (newVal === '我的') {
        this.$router.replace('/mine');
      }
    },
  },
  // 获取图片数据
  created() {
    this.images = [
      /* eslint-disable */
      {
        id: '发现',
        noActive:  require('../../assets/images/tabBar/find.png'),
        active: require('../../assets/images/tabBar/find-active.png'),
        clicked: true
      },
      {
        id: '讲堂',
        noActive:  require('../../assets/images/tabBar/lectureHall.png'),
        active: require('../../assets/images/tabBar/lectureHall-active.png'),
        clicked: false
      },
      {
        id: '学习',
        noActive:  require('../../assets/images/tabBar/study.png'),
        active: require('../../assets/images/tabBar/study-active.png'),
        clicked: false
      },
      {
        id: '我的',
        noActive:  require('../../assets/images/tabBar/mine.png'),
        active: require('../../assets/images/tabBar/mine-active.png'),
        clicked: false
      },
    ];
  },
  methods: {
    // 点击切换图片
    select(item) {
      for (let image of this.images) {
        image.clicked = false;
      }
      item.clicked = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
.selected
  color #FA8919 !important
</style>
