<script setup lang="ts">
import allRepos from '@/data/repos.json';
import NavBar from "@/components/NavBar.vue";
import {onBeforeMount, onMounted, provide, ref, watchEffect} from "vue";
import {useUserStore} from "@/stores/user.ts";
import SearchResultBox from "@/components/SearchResultBox.vue";
import AsideBar from "@/components/AsideBar.vue";
import CategoryCatalog from "@/components/CategoryCatalog.vue";
import CategoryTabs from "@/components/CategoryTabs.vue";
import ReposCard from "@/components/ReposCard.vue";


// 获取主题指
const userStore = useUserStore();
onBeforeMount(() => {
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
// repos仓库
const reposArr = ref()
watchEffect(() => {
  const theCategory = userStore.storeCategory
  const theCategoryChild = userStore.storeCategoryChildren
  reposArr.value = allRepos.filter(item => {
    const typeParts = item.type.split('/');
    if (userStore.storeCategoryChildren === 'all') {
      return typeParts[0] === theCategory;
    } else {
      return typeParts[0] === theCategory && typeParts[1] === theCategoryChild;
    }

  })
})
</script>

<template>
  <SearchResultBox v-if="searchStatue"></SearchResultBox>
  <NavBar></NavBar>
  <main style="display: flex">
    <AsideBar></AsideBar>
    <div class="content-main">
      <CategoryCatalog></CategoryCatalog>
      <CategoryTabs></CategoryTabs>
      <div class="repos-content-box">
        <ReposCard v-for="item in reposArr" :reposName="item.reposName" :author="item.author"
                   :key="`${item.author}/${item.reposName}`"></ReposCard>
      </div>
    </div>
  </main>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.content-main {
  padding: 10px;
  flex: 1;

}

//repos布局
.repos-content-box {

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 15px 5px 0 5px;
  margin-top: 15px;
  border-top: @border-1-solid;
  transition: border-top-color @transition-time;
  color: #fdfdfd;


  box-sizing: border-box;
  max-height: calc(100vh - 175px);
  overflow-y: auto; /* 当内容超出时出现垂直滚动条 */

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #2c2c2c;
  }

  /* 暗色模式下的滚动条滑块样式 */

  &::-webkit-scrollbar-thumb {
    background-color: #9e9e9e;
    border-radius: 5px;

    &:hover {
      background-color: #c6c6c6;
    }
  }
}

@media (max-width: @pad-width) {
  .repos-content-box {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
}

@media (max-width: @mobile-width) {

  .repos-content-box {
    grid-template-columns: 1fr;
  }

}


</style>
