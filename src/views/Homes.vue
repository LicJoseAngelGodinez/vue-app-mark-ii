<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <top-header/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopHeader from '@/components/Top-Header.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TopHeader
  }
}
</script>
