<template>
  <div id="app">
    <div id="navigation">
      <div id="navigation-image"></div>
      <el-menu id="navigation-nav" mode="horizontal">
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
#app{
  min-width: 900px;
}

#navigation{
  background-color: rgba(0,0,0,.1);
  height: 50px;
  display: flex;
  justify-content:space-between;
}

#navigation-image{
  min-width: 50px;
  background: url('./assets/MoMeng.jpg');
  background-size: 100% 100%;
}

#navigation-nav{
  min-width: 400px;
}

#navigation-button{
  min-width: 300px;
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
