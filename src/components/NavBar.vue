<script setup lang="ts">
import ThemeChange from "@/components/ThemeChange.vue";
import SearchInput from "@/components/SearchInput.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import router from "@/router";
import {inject} from "vue";

function toGithubRepoBtn() {
  window.open('https://github.com/zhenghaoyang24/reposhub', '_blank');
}

const searchStatue = inject('searchStatue', () => {
  console.log("no searchStatue")
})

</script>

<template>
  <nav class="navbar">
    <router-link to="/home">Repos</router-link>
    <SearchInput v-if="!searchStatue"></SearchInput>
    <div class="nav-ctrl">
      <ThemeChange></ThemeChange>
      <span class="github-icon" @click="toGithubRepoBtn" title="github">
        <GithubIcon></GithubIcon>
      </span>
    </div>
  </nav>

</template>

<style scoped lang="less">
@import "@/assets/base.less";

.github-icon {
  cursor: pointer;
  .justify-space-between();
  color: var(--s-text-color);
}

.nav-ctrl {
  .justify-space-between();

  > span {
    margin-left: 10px;
  }
}

.navbar {
  height: @nav-height;
  box-sizing: border-box;
  background-color: var(--bg-color-nav);
  transition: all @transition-time;
  .justify-space-between();
  padding: @nav-padding;
  border-bottom: 1px solid var(--border-color);
}

</style>
