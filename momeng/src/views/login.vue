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
    }
  },
}
</script>

<style scoped>
</style>


