<template>
  <div id="app">
    <h1>APP 组件</h1>
    <routerLink to="/home"  tag="span">Home</routerLink>
    <routerLink to="/about"  tag="span">about</routerLink>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    
  }
};
</script>

<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
