<script setup lang="ts">
import ThemeChange from '@/components/ThemeChange.vue'

</script>

<template>
  <nav class="navbar">
    <router-link to="/home">Repos</router-link>
    <input type="text" placeholder="type">
    <div class="nav-ctrl">
      <ThemeChange></ThemeChange>
      <ThemeChange></ThemeChange>

    </div>


  </nav>

</template>

<style scoped lang="less">
@import "@/assets/base.less";
.nav-ctrl{
  display: flex;
}
.navbar{
  .justify-space-between();
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
}

</style>
