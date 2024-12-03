<script setup lang="ts">

</script>

<template>
  <nav class="navbar">
    <router-link to="/home">Repos</router-link>
    <input type="text" placeholder="type">


  </nav>

</template>

<style scoped lang="less">
@import "@/assets/base.less";
.navbar{
  .justify-space-between();
  padding: 10px;
}

</style>
