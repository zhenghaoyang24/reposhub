<script setup>
import {useUserStore} from "@/stores/user.ts";
const store = useUserStore();

const changeThemeFn = () => {
  if (store.dataTheme === 'dark') {
    store.storeChangeTheme('light')
  }else{
    store.storeChangeTheme('dark')
  }
}
</script>

<template>
  <button class="theme-button" @click="changeThemeFn"></button>
</template>

<style scoped lang="less">
@import "@/assets/variable.less";

.theme-button {
  background-color: var(--p-color);
  outline: none;
  border: none;
  background-image: var(--theme-button-image);
  cursor: pointer;
  width: calc(@aside-bar-button-width - 10px);
  height: calc(@aside-bar-button-width - 10px);
  background-position: center center;
  background-size: 70% 70%;
  background-repeat: no-repeat;
  transition: all @transition-time;
}

</style>
