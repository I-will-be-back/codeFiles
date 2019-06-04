<template>
  <div class="look">{{ message }}
    <p>接收的参数: {{$route.params.id || 1}}</p>
  </div>
</template>

<script>
export default {
  name: 'LookTwo',
  data () {
    return {
      message: '好帅!'
    }
  }
}
</script>
