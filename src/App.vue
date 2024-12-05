<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import {onBeforeMount,provide,ref} from "vue";
import {useUserStore} from "@/stores/user.ts";
import SearchResultBox from "@/components/SearchResultBox.vue";
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
// 传递方法函数，则可以实现底层组件更改顶层组件的数据（但实则还是顶层组件在更改）
provide('changeSearchStatueFn', changeSearchStatue)
provide('searchStatue', searchStatue)

</script>

<template>
  <SearchResultBox v-if="searchStatue"></SearchResultBox>
  <NavBar></NavBar>
</template>

<style scoped lang="less">


</style>
