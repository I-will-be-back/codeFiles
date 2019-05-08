<template>
  <div class="leftnav">
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item  index="1" @click="pageJump('homePage')">
        <i class="el-icon-s-home"></i>
        <span slot="title">网站首页</span>
      </el-menu-item >
      <el-menu-item index="2" @click="pageJump('technology')">
        <i class="el-icon-share"></i>
        <span slot="title">技术分享</span>
      </el-menu-item>
      <el-menu-item index="3" @click="pageJump('article')">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">趣味文章</span>
      </el-menu-item>
      <el-menu-item index="4" @click="pageJump('otherProject')">
        <i class="el-icon-more"></i>
        <span slot="title">其他项目</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:'leftnav',
    data() {
      return {
        isCollapse: false,
      };
    },
    mounted() {
      let that = this;
      //检测窗口变化
      let windowChange = (elem) => {
        if(document.documentElement.clientWidth < 700) {
          elem.isCollapse = true;
        } else {
          elem.isCollapse = false;
        }
        let time = setTimeout(function() {
          clearTimeout(time);
          let menu = document.querySelector('.el-menu-vertical-demo');
          menu.style.height = (document.documentElement.clientHeight - 39) + 'px';
        },360);
      }
      windowChange(that);
      window.onresize = function () {
        windowChange(that);
      }
    },
    methods: {
      pageJump (url) {
        this.$router.push({name: `${url}`});
      }
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>