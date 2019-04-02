<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div id="main-content">
      <div id="main-content-introduction">
        <h3>陌梦介绍</h3>
        <hr />
        <p>skgnkgnfdkngfdlkgnfdlkgndlk</p>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <el-tabs id="main-content-message">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div id="third">
      <h2>2151</h2>
      <h3>asdasd</h3>
      <div class="third-circle"></div>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div>江西陌梦教育科技有限公司 小超 @copyright 2019</div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

#main-content{
  display: flex;
  justify-content:center;
}

#main-content-introduction{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

#main-content-message{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

#third{
  display: flex;
  flex-direction:column;
}

.third-circle{
  width:200px;
  height:200px;
  margin: 30px auto;
  border: 2px solid #e4007e;
  text-align: center;
  line-height: 200px;
  font-weight: bold;
  font-size: 24px;
  background: burlywood;
  border-radius: 50%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
