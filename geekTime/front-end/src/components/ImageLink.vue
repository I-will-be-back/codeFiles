<template>
  <img :src="image[index]" alt="" class="imageLink">
</template>

<script>
export default {
  name: 'imageLink',
  props: ['index'],
  data() {
    return {
      image: [],
    };
  },
  created() {
    /* eslint-disable */
    this.image = [
      require('../assets/images/swipe/swipe2.jpg'),
      require('../assets/images/swipe/swipe3.jpg'),
      require('../assets/images/swipe/swipe4.jpg'),
    ];
    /* eslint-disable */
  },
};
</script>

<style lang="stylus" scoped>
.imageLink
  width 100%
  height 16vh
</style>
