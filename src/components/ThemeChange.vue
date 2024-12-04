<script setup lang="ts">
import {onBeforeMount, ref} from "vue"
import {useUserStore} from "@/stores/user.ts";
import ThemeMoonIcon from "@/components/icons/ThemeMoonIcon.vue";
import ThemeSunIcon from "@/components/icons/ThemeSunIcon.vue";

const store = useUserStore();
const currentTheme = ref<String>('dark')
onBeforeMount(() => {
  currentTheme.value = store.dataTheme;
})

const changeThemeFn = () => {
  if (store.dataTheme === 'dark') {
    store.storeChangeTheme('light')
    currentTheme.value = 'light';
  } else {
    store.storeChangeTheme('dark')
    currentTheme.value = 'dark';
  }
}
</script>

<template>
  <span class="theme-button" @click="changeThemeFn">
    <span v-show="currentTheme==='light'">
      <ThemeMoonIcon></ThemeMoonIcon>
    </span>
    <span v-show="currentTheme==='dark'">
      <ThemeSunIcon></ThemeSunIcon>
    </span>
  </span>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.theme-button {
  >span{
    .justify-space-between();
    cursor: pointer;
    color:var(--s-text-color);
    transition: all @transition-time;
  }
}

</style>
