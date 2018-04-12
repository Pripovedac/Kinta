<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
  html {
    height: 100%;
    background: linear-gradient(to left bottom, rgb(86, 245, 94), rgb(36, 178, 97)) fixed;
    width: 1440px;
    height: 1024px;
    background-image: linear-gradient(234deg, #27c1ae, #0d4f8a 73%, #2c4ad6);

  }
</style>
