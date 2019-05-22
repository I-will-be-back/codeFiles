<template>
  <div class="forumPage">
    <div class="title">{{ title }}</div>
    <div class="post" v-for="(item,firstIndex) in firstContent" :key="item.name">
      <div class="author">
        <img class="avatar" :src="item.avatar">
        <div class="poster">{{ item.poster }}</div>
      </div>
      <div class="forum">
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ item.time }}<el-button class="replyButton1" @click="firstReply(null,firstIndex,false)" size="mini">回复</el-button></div>
         <!-- 二级评论 -->
        <div class="secondContent" v-for="item2 in item.secondContent" :key="item2.name">
          <div class="secondContentMain">
            <span class="who1" v-text="item2.who1"></span>
            <span class="who2" v-if="item2.ifReply">回复{{ item2.who2 }}</span>
            <span class="reply">:{{ item2.reply }}</span>
          </div>
          <div class="time2">{{ item2.time2 }}<el-button @click="firstReply(item2,firstIndex,true)" class="replyButton2" size="mini">回复</el-button></div>
        </div>
        <el-pagination @size-change="handleSizePage" @current-change="handleCurrentChange" 
          :current-page="currentPage" background layout="prev ,pager , next" :total="totalpage *10">
        </el-pagination>
        <el-collapse-transition>
            <div v-if="item.show" class="testshow">
              <el-input 
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea1">
              </el-input>
              <el-button @click="addReply()" size="mini">确定</el-button>
            </div>
        </el-collapse-transition>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      currentPage : 1 ,
      users : [] ,
      totalpage : 0,
      ifTrue: true,
      textarea1:'',
      temObject:'',
      index:0,
      title:'这是一个帖子的标题',
      firstContent:[
        {show:false,poster:'小胖超',avatar:require('../assets/MoMeng.jpg'),time:this.$moment().format('YYYY年MM月DD日 h:mm'),content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          secondContent:[
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好sd棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好dsf棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你dfg好棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你fdg好棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好fdg棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好fdg棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好gh棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你dfsag好棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好sad棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
        ]},
        //  {show:false,poster:'小胖超',avatar:require('../assets/MoMeng.jpg'),time:moment().format('YYYY年MM月DD日 h:mm'),content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        //   secondContent:[
        //   {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈棒',time2:moment().format('YYYY年MM月DD日 h:mm')},
        // ]},
      ],
    }
  },
  mounted (){
    this.initUsers();
    this.inittotalpage ();
  },
  methods: {
     // 初始化渲染的数组
    initUsers : function(){
       this.users = this.firstContent[0].secondContent.slice(0,3)
       console.log(this.users)
    },
    // 初始化总页数
    inittotalpage  : function(){
      
      this.totalpage = this.firstContent[0].secondContent.length/3
      console.log(this.totalpage)
    },
   // 改变页面 这时候数据也会改变
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(this.currentPage)
      this.users = this.firstContent[0].secondContent.slice((this.currentPage-1)*3,this.currentPage*3);
      console.log(this.users)
    },
    handleSizePage(){

    },
    // 一级评论回复
    shows () {
      this.firstContent[this.index].show = !this.firstContent[this.index].show;
    },
    firstReply (aObject,aIndex,aif) {
      if(this.index !== aIndex) {
        this.firstContent[this.index].show = false;
      }
      this.ifTrue = aif;
      this.index = aIndex;
      this.shows();
      this.temObject = aObject;
    },
    addReply () {
      //who1获取当前的用户名
      if(this.ifTrue) {
        this.firstContent[this.index].secondContent.push({who1:Math.floor(Math.random() * 10),ifReply:true,who2:this.temObject.who1,reply:this.textarea1,time2:this.$moment().format('YYYY年MM月DD日 h:mm')});
      } else {
        this.firstContent[this.index].secondContent.push({who1:Math.floor(Math.random() * 10),ifReply:false,who2:'',reply:this.textarea1,time2:this.$moment().format('YYYY年MM月DD日 h:mm')});
      }
      this.textarea1 = '';
      this.shows();
    },
  }
}
</script>

<style scoped>
.forumPage{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
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
  margin-top: 20px;
}

.author{
  width: 20%;
}

.avatar{
  width: 100px;
  height: 100px;
}

.poster{
  font-size: 15px;
}

.forum{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.time,.time2{
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
}

.time button,.time2 button {
  font-size: 12px;
  padding: 0;
  background-color: rgba(0, 0,0,0)
}

.secondContent{
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
}

.secondContentPagination{
  display: flex;
  flex-direction:row;
  justify-content: flex-start;
}

/* #aaa{
  color: red;
  background-color: red;
}

#aaa .el-collapse-item__arrow{
  display: none; 
  color: red;
  background-color: red;
} */
</style>
