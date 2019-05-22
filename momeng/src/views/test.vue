<template>
  <div class="block">
    <div>sadasd
        <div v-for="(user,index) in firstContent" :key="index">
          <div v-for="(item,indexs) in user.secondContent" :key="indexs">
            {{ item.reply}}
          </div>
        </div>
         <el-pagination @size-change="handleSizePage" @current-change="handleCurrentChange" 
          :current-page="currentPage" background layout="prev ,pager , next" :total="totalpage *10">
        </el-pagination>
    </div>
  </div> 
</template>

<script>
export default {
  data () {
    return {
     firstContent:[
        {show:false,poster:'小胖超',avatar:require('../assets/MoMeng.jpg'),time:this.$this.$moment().format('YYYY年MM月DD日 h:mm'),content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          secondContent:[
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好sd棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好dsf棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术哈哈超',reply:'你dfg好棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你fdg好棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好fdg棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好fdg棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好gh棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你dfsag好棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')},
          {who1:'小胖超',ifReply:true,who2:'技术超',reply:'你好sad棒',time2:this.$moment().format('YYYY年MM月DD日 h:mm')}, 
        ]}],
     
      currentPage : 1 ,
      users : [] ,
      totalpage : 0
    }
  },
  mounted (){
    this.initUsers();
    this.inittotalpage ();
  },
  methods : {
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

    }
  }
};
</script>