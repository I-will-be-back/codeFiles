<template>
  <div class="mine">
    <div class="top">
      <div class="image">
        <img src="../assets/images/mine/mine.png" alt="">
      </div>
      <div>
        <div class="user" v-text="user"></div>
        <div class="tel" v-text="tel"></div>
      </div>
    </div>
    <mt-cell v-for="(item,index) in mineDatas" :key="index" :title="item.title"
    icon="back" :value="item.value" is-link>
      <img slot="icon" :src="item.src" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
      user: '',
      tel: '',
      mineDatas: [],
    };
  },
  created() {
    this.$emit('fatherData', {});
    this.user = 'I_will_be_back';
    this.tel = '181****7701';
    this.mineDatas = [
      /* eslint-disable */
      {
        src: require('../assets/images/mine/account.png'),
        title: '账户',
        value: 0.0,
      },
      {
        src: require('../assets/images/mine/purchased.png'),
        title: '已购',
        // value: '',
      },
      {
        src: require('../assets/images/mine/fightGroup.png'),
        title: '我的拼团',
        // value: '',
      },
      {
        src: require('../assets/images/mine/community.png'),
        title: '我的社群',
        // value: '',
      },
      {
        src: require('../assets/images/mine/calendar.png'),
        title: '我的每日一课',
        // value: '',
      },
      {
        src: require('../assets/images/mine/certificate.png'),
        title: '礼券',
        value: 2,
      },
      {
        src: require('../assets/images/mine/share.png'),
        title: '分享有赏',
        // value: '',
      },
      {
        src: require('../assets/images/mine/invite.png'),
        title: '邀请好友',
        value: '得30元',
      },
      {
        src: require('../assets/images/mine/help.png'),
        title: '帮助与反馈',
        // value: '',
      },
      {
        src: require('../assets/images/mine/setting.png'),
        title: '设置',
        // value: '',
      },
      /* eslint-disable */
    ];
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
