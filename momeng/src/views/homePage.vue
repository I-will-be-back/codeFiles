<template>
  <div id="homePage">
    <div id="navigation">
      <div id="navigation-image"></div>
      <el-menu id="navigation-nav" mode="horizontal">
        <el-menu-item index="1"><router-link :to="{path:'/mainPage'}">陌梦首页</router-link></el-menu-item>
        <el-menu-item index="2">陌梦首页</el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="3">陌梦首页</el-menu-item>
        <el-menu-item index="4"><router-link :to="{path:'/postList'}">评论专区</router-link> </el-menu-item>
      </el-menu>
      <el-button-group id="navigation-button">
        <el-button type="primary">开始登录</el-button>
        <el-button type="success">开始登录</el-button>
        <el-button type="info">开始登录</el-button>
      </el-button-group>
    </div>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition> 
  </div>
</template>

<script>

export default {
  name: 'homePage',
}

</script>

<style scoped>
#homePage{
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
  background: url('../assets/MoMeng.jpg');
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
