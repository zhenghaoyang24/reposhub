<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import {onBeforeMount,provide,ref} from "vue";
import {useUserStore} from "@/stores/user.ts";
import SearchResultBox from "@/components/SearchResultBox.vue";
import AsideBar from "@/components/AsideBar.vue";

// 获取主题指
const userStore = useUserStore();
onBeforeMount(()=>{
  userStore.storeGetTheme()
})
// 搜索框状态
const searchStatue = ref<boolean>(false)
const changeSearchStatue = () => {
  searchStatue.value = !searchStatue.value
}
// 传递方法函数，更改搜索框状态
provide('changeSearchStatueFn', changeSearchStatue)
provide('searchStatue', searchStatue)
</script>

<template>
  <SearchResultBox v-if="searchStatue"></SearchResultBox>
  <NavBar></NavBar>
  <main class="content-main">
    <AsideBar></AsideBar>
  </main>
</template>

<style scoped lang="less">

</style>
