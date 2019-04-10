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
        <p>{{ introduction }}</p>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <el-tabs id="main-content-message" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <p v-for="item in message" :key="item">
            <span class="main-content-message-content">{{ item.content }}</span>
            <span class="main-content-message-time">{{ item.time }}</span>
          </p>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
    <div id="third">
      <h2>陌梦管理制度</h2>
      <h3>开心|顺心|舒心</h3>
      <div id="third-circle">
        <div v-for="item in circle" :key="item" class="aaa">
          <div></div>
          <p>{{ item.content}}</p>
        </div>
      </div>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div id="copyright">江西陌梦教育科技有限公司 小超 @copyright 2019</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      introduction:'skgnkgnfdkngfdlkgassjgnfdkjgdfngjkfsdfdsfdsfsdfdngkjnasdasdsadsdsaddfsdfdsfdssdfdsfsdfdsfdsfdsfsdfdsfdsfdsfsdfdsfdsfsdfsdfsadadsaddlkgndlk',
      message:[{content:'sadsdfgfdgfdgfdsfdsfsdfsdasdsadadasddsdadgssdfad11',time:'2019-4-1'},
          {content:'dsad11',time:'2019-4-2'},
          {content:'errgeadsad11',time:'2019-4-3'},
          {content:'dsad11',time:'2019-4-2'},
          {content:'errgeadsad11',time:'2019-4-3'}],
      circle:[{content:'gfhgfhfgh'},{content:'fdgfhghgfhgfhfgh'},
      {content:'gfhgfhffghgfhgh'},{content:'fdgfhghgfhgfhfgh'},
      {content:'gfhgfhfgh'},{content:'fdgfhghgfhgfhfgh'},
      {content:'gfhgfhffghgfhgh'},{content:'fdgfhghgfhgfhfgh'},
     ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
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
  justify-content:space-around;
}

#main-content-introduction{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

#main-content-introduction>hr{
  width: 60%;
}

#main-content-introduction>h3{
  color:blue;
  width: 30%;
}

#main-content-introduction>p{
  max-height: 200px;
  width: 90%;
  word-wrap:break-word;
  overflow: auto;
}

#main-content-introduction>.el-button{
  width: 35%;
}

#main-content-message{
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

#main-content-message p{
  padding: 0 5px;
  display: flex;
  justify-content:space-between;
} 

.main-content-message-content{
  width: 75%;
  word-wrap:break-word;
}

.main-content-message-time{
  color: aqua;
}

#third{
  display: flex;
  flex-direction:column;
  align-items: center;
}

#third>h3{
  color: aqua;
}

#third-circle{
  /* min-width: 600px; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

#third-circle>div{
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#third-circle>div>div{
  width:150px;
  height:150px;
  border: 1px solid gray;
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

#copyright{
  display: flex;
  justify-content: center;
}
</style>
