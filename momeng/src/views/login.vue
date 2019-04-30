<template>
  <div>
    <input v-model="number" /><br>
    <input v-model="password" /><br>
    <input v-model="yan" /><br>
     <!-- <img @click="change" :src="src"> -->
     <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number:'',
      password:'',
      yan:'',
      // src:'http://192.168.1.105/momeng/users/captcha',
    }
  },
  methods: {
    change() {
      // this.src = 'http://192.168.1.105/momeng/users/captcha?' + Math.random(); 
    },
    // submit() {
    //   this.axios.defaults.withCredentials=true;
    //   this.axios({
    //     method:'post',
    //     // url:'http://192.168.1.105/momeng/users/login',
    //     data:JSON.stringify(
    //       {
    //     captcha: this.yan,
    //     passwd: this.password,
    //     username: this.number
    //     }
    //     ),
    //   headers: {'Content-Type': 'application/json',
    //   'Authorization':'kjkjklj'}
    //   })
    //   .then(function (response) {
    //     let allCookies = document.cookie;
    //     console.log(allCookies);
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   let aa = document.cookie;
    //   console.log(aa);
    // }
  },
}
</script>

<style scoped>
</style>


