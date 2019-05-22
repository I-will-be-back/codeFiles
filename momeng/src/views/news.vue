<template>
  <div class="article">
    <div class="author">{{ author }}</div>
    <div class="title">{{ title }}</div>
    <div class="time">{{ time}}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
import moment from "moment"
export default {
  data() {
    return {
      author:'小胖超',
      title:'这是一篇文章就撒风华绝代风华绝代书法家看电视发挥科技',
      time:moment().format('L'),
      content:'哈哈哈哈哈哈哈哈发动机更换发动机挂号费的空间更不能发的数据防火防盗设计费那个空间动机不能够疯狂就不能发顾客就不能发动机你发的空间给你发的几年',
    }
  },
}
</script>

<style scoped>
.article{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.author{
  width: 50%;
  margin-top: 20px;
  margin-bottom: 10px;
}

.title{
  width: 50%;
  font-size: 30px;
}

.time{
  width: 50%;
  margin-top: 10px;
  margin-bottom: 20px;
}

.content{
  width: 50%;
  font-size: 20px;
}
</style>

