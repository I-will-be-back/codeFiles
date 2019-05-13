<template>
  <div id="homePage">
    <div class="on">
      <div class="block">
        <el-carousel trigger="click" height="350px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-card class="personCard">
        <img src="http://www.xiaopangchao.cn/images/avatar.jpg" class="avatar" />
        <div style="padding: 14px;">
          <p class="name">小胖超</p>
          <p class="introduction">一个专注于前端的切图仔<br>和我一起在代码世界中寻找诗和远方</p>
          <a href="https://github.com/I-will-be-back" target="_blank">Github</a>
        </div>
      </el-card>
    </div>
    <div class="up">
      <el-divider></el-divider>
      <span>追风，追梦，更是追自己</span>
      <el-divider></el-divider>
      <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
      <el-divider></el-divider>
      <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homePage',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    
  }
}
</script>

<style scoped>
#homePage {
  width: 100%;
}

.on {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.block {
  width: 600px;
}

.up{
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

/* 明信片部分 */
.personCard{
  width: 320px;
  height: 350px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.name {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.introduction {
  font-size: 12px;
  margin-bottom: 15px;
}
</style>

