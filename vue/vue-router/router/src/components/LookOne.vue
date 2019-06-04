<template>
  <div class="look">{{ message }}
    {{$route.params.name || 'ww'}}
  </div>
</template>

<script>
export default {
  name: 'LookOne',
  data () {
    return {
      message: '你瞅啥!'
    }
  }
}
</script>
