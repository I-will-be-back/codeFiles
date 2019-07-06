<template>
  <div class="mine">
    <div class="top">
      <div class="image">
        <img :src="avatar" alt="">
      </div>
      <div>
        <div class="user" v-text="username"></div>
        <div class="tel" v-text="tel"></div>
      </div>
    </div>
    <mt-cell v-for="(item,index) in mineDatas" :key="index" :title="item.text"
    icon="back" :value="item.more" is-link>
      <img slot="icon" :src="item.icon" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
      avatar: '',
      username: '',
      tel: '',
      mineDatas: [],
    };
  },
  created() {
    this.$http.get('http://localhost:3000/mine/1').then((res) => {
      if (res.status === 200) {
        const mineData = res.data;
        this.$emit('fatherData', mineData.topData);
        this.avatar = mineData.user.avatar;
        this.username = mineData.user.name;
        this.tel = mineData.user.tel;
        this.mineDatas = mineData.userfunction;
      }
    });
  },
};
</script>

<style lang="stylus" scoped>
.top
  display flex
  padding-bottom 2vh
  .image
    background-color rgba(0, 0, 0, .1)
    height 10vh
    width 10vh
    border-radius 50%
    display flex
    justify-content center
    align-items center
    margin-right 5vw
  .user
    font-size 1.3rem
    font-weight bold
    margin 1vh 0
  .tel
    color gray
    font-size 0.9rem
</style>
