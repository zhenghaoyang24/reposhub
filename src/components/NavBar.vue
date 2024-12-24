<script setup lang="ts">
import {inject} from "vue";
import ThemeChange from "@/components/ThemeChange.vue";
import SearchInput from "@/components/SearchInputResult.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import NewBtn from "@/components/NewBtn.vue";
// 跳转仓库
function toGithubRepoBtn() {
  window.open('https://github.com/zhenghaoyang24/reposhub', '_blank');
}
// 获取搜索框状态
const searchStatue = inject('searchStatue', () => {
  console.log("no searchStatue")
})
</script>

<template>
  <nav class="navbar">
    <router-link to="/home" class="web-icon">Repos</router-link>
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
@font-face {
  font-family: 'AmaticSC-Bold'; /* 自定义字体的名称 */
  src: url('@/assets/font/Pacifico-Regular.ttf') format("truetype");
}
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
  .web-icon{
    color: var(--s-text-color);
    font-size: 25px;
    text-decoration: none;
    font-family: 'AmaticSC-Bold', sans-serif;
  }
  user-select: none;
  height: @nav-height;
  box-sizing: border-box;
  background-color: var(--bg-color-nav);
  transition: all @transition-time;
  .justify-space-between();
  padding: @nav-padding;
  border-bottom: 1px solid var(--border-color);
  @media (max-width: @mobile-width) {
    padding: @nav-padding - 9px;
  }
}

</style>
