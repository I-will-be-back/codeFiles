<template>
  <div class="postListPage">
    <router-link :to="{path:item.href}" class="post" v-for="item in post" :key="item.name">
      <div class="postTop">
        <span class="author" v-text="item.author"></span>
        <span class="time" v-text="item.time"></span>
      </div>
      <div class="title" v-text="item.title"></div>
      <div class="content" v-text="item.content"></div>
    </router-link>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>  
</template>

<script>
import moment from "moment"
export default {
  data() {
    return {
      post:[{href:'/forum',title:'这是一个标题',content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',author:'小胖超',time:moment().format('L')},
      {href:'/forum',title:'这是一个标题',content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',author:'小胖超',time:moment().format('L')},
      {href:'/forum',title:'这是一个标题',content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',author:'小胖超',time:moment().format('L')}
      ],
    }
  },
}
</script>

<style scoped>
.postListPage{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post{
  text-decoration:none;
  color: black;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.postTop{
  width: 98%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}

.title{
  width: 98%;
  display: flex;
  justify-content: flex-start;
  font-size: 30px;
}

.content{
  width: 98%;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
}

</style>
