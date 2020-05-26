<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintarbar/MainTarBar";

export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MainTabBar
  }
};
</script>

<style >
/* @import "./assets/css/base.css"; */
@import "assets/css/base.css";
</style>
