<template>
  <div class="recording">
    <div v-text="recDatas.frequency" class="bold"></div>
    <div v-text="recDatas.text" class="gray"></div>
  </div>
</template>

<script>
export default {
  name: 'recording',
  props: ['recDatas'],
};
</script>

<style lang="stylus" scoped>
.recording
  text-align center
  .bold
    font-weight bold
    font-size 2rem
    margin-bottom 1vh
  .gray
    color gray
</style>

