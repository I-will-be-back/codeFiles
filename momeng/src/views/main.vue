<template>
  <div>
    <el-carousel id="el-carousel" :interval="0" indicator-position="outside" :height="height + 'px'">
      <el-carousel-item class="el-carousel-item" v-for="value in images" :key="value.name">
        <img class="carouselImage" :src=value>
      </el-carousel-item>
    </el-carousel>
    <div id="main-content">
      <div id="main-content-introduction">
        <h3>陌梦介绍</h3>
        <hr />
        <p>{{ introduction }}</p>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <el-tabs id="main-content-message" v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <p v-for="item in message" :key="item.name">
            <span class="main-content-message-content">{{ item.content }}</span>
            <span class="main-content-message-time">{{ item.time }}</span>
          </p>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
           <p>1111</p>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
           <p v-for="item in message" :key="item.name">
            <span class="main-content-message-content">{{ item.content }}</span>
            <span class="main-content-message-time">{{ item.time }}</span>
          </p>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div id="third">
      <h2>陌梦管理制度</h2>
      <h3>开心 | 顺心 | 舒心</h3>
      <div id="third-circle">
        <div v-for="item in circle" :key="item.name" class="aaa">
          <div><i class="el-icon-edit-outline"></i></div>
          <p>{{ item.content}}</p>
        </div>
      </div>
    </div>
    <el-carousel :interval="0" type="card" :height="height2 + 'px'">
      <el-carousel-item v-for="video in videos" :key="video.name">
        <video id="video" :src=video controls="controls"></video>
      </el-carousel-item>
    </el-carousel>
    <div id="copyright">江西陌梦教育科技有限公司 小胖超 @copyright 2019</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images:[require('../assets/first.jpg'),require('../assets/first.jpg'),require('../assets/first.jpg'),require('../assets/first.jpg')],
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
    videos:[require('../assets/mao.mp4'),require('../assets/mao.mp4'),require('../assets/mao.mp4')],
    height:(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 3,
    height2:(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 3.5,
    };
  },
  mounted() {
    let that = this;
    //监听浏览器窗口大小改变
    window.addEventListener('resize', function() {
      let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      that.height = width / 3;
      that.height2 = width / 3.5;
    }, false);
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carouselImage{
  height: 100%;
  width: 100%;
}

#main-content{
  height: 300px;
  display: flex;
  justify-content:space-around;
}

#main-content-introduction{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-height: 270px;
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
  width: 400px;
  max-height: 270px;
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
  display: flex;
  align-items: center;
  justify-content:center;
}

#video{
  height: 100%;
  width: 100%;
}

#copyright{
  display: flex;
  justify-content: center;
}
</style>
