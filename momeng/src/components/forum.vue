<template>
  <div>
    <div class="title">{{ title }}</div>
    <div v-for="item in firstContent" :key="item.name">
      <img class="avatar" :src="item.avatar">
      <div class="poster">{{ item.poster }}</div>
      <div class="time">{{ item.time }}</div>
      <div class="content">{{ item.content }}</div>
      <!-- 二级评论 -->
      <div v-for="item in secondContent" :key="item.name">
        <div class="who1"></div>
        <div class="who2" v-if="ifa"></div>
      </div>
    </div>
  </div> 
</template>

<script>
import moment from "moment"

export default {
  data() {
    return {
      title:'这是一个帖子的标题',
      firstContent:[
        {poster:'小胖超',avatar:require('../assets/MoMeng.jpg'),time:moment().format('L'),content:'哈哈哈哈'},
      ],
      secondContent:[

      ],
    }
  },
}
</script>

<style scoped>
.avatar{
  width: 100px;
  height: 100px;
}
</style>
