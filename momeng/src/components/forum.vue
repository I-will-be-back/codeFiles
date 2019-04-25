<template>
  <div class="forumPage">
    <div class="title">{{ title }}</div>
    <div class="post" v-for="item in firstContent" :key="item.name">
      <div class="author">
        <img class="avatar" :src="item.avatar">
        <div class="poster">{{ item.poster }}</div>
      </div>
      <div class="forum">
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ item.time }}<el-button size="mini">回复</el-button></div>
         <!-- 二级评论 -->
        <div class="secondContent" v-for="item2 in secondContent" :key="item2.name">
          <div class="who1" v-text="item2.who1"></div>
          <div class="who2" v-if="item2.ifReply">回复{{ item2.who2 }}</div>
          <div class="reply"> : {{ item2.reply }}</div>
          <div class="time2">{{ item2.time2 }}<el-button size="mini">回复</el-button></div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import moment from "moment"
// moment.locale('CN');

export default {
  data() {
    return {
      title:'这是一个帖子的标题',
      firstContent:[
        {poster:'小胖超',avatar:require('../assets/MoMeng.jpg'),time:moment().format('YYYY年MM月DD日 h:mm'),content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'},
      ],
      secondContent:[
        {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好棒',time2:moment().format('YYYY年MM月DD日 h:mm')},
      ],
    }
  },
}
</script>

<style scoped>
.forumPage{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.title{
  font-size: 30px;
  display: flex;
  justify-content: center;
}

.post{
  display: flex;
  justify-content: flex-start;
  background-color: bisque;
}

.author{
  width: 20%;
  /* display: flex;
  flex-direction: column; */
}

.avatar{
  width: 100px;
  height: 100px;
}

.forum{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.time{
  display: flex;
  justify-content: flex-end;
}

.secondContent{
  display: flex;
  flex-direction: row;
}
</style>
