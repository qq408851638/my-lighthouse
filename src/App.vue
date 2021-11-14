<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
 <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import url('./style/index.less');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  font-size:.186rem;
}
</style>
