<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <p>导航 ：
      <router-link to="/">首页</router-link> | 
      <router-link to="/xiaochao/params/xiaochao">hi页面</router-link> |
    </p> -->
    <!-- <hr> -->
    <div id="navigation">
      <div id="navigation-image"></div>
      <el-menu id="navigation-nav" mode="horizontal" collapse-transition="false">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      <el-button-group id="navigation-button">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
      </el-button-group>
    </div>  

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#navigation{
  background-color: rgba(0,0,0,.1);
  height: 60px;
  display: flex;
  /* min-width: 900px; */
  justify-content:flex-start;
}

#navigation-image{
  height: 100%;
  width: 120px;
  background: url('./assets/logo.png') ;
  /* background-position: center; */
  background-size: 100% 100%;
}

/* #navigation-image>img{
  height: 100%;
} */

#navigation-nav{
  height: 60px;
  /* width: 500px; */
}

#navigation-nav>.el-menu-item{
  /* widows: 100px; */
  background-color: aliceblue;
}

#navigation-button{
  /* width: 300px; */
}


/* 进入和退出效果 */
.fade-enter {
  opacity:0;
}

.fade-enter-active{
  opacity:1;
  transition:opacity .5s;
}

.fade-leave{
  opacity:1;
}

.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
