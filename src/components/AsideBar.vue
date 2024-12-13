<script setup lang="ts">
import categories from "@/data/category.json"
import CategoryItem from "@/components/CategoryItem.vue";
import {useUserStore} from "@/stores/user.ts";

const store = useUserStore();
const theCategoryBtn = (value: String) => {
  store.storeChangeCategory(value)
}

</script>

<template>
  <aside class="left-aside-box">
    <h4>Category</h4>
    <CategoryItem category="collect" icon="lucide:star" @click="theCategoryBtn('collect')"></CategoryItem>
    <CategoryItem v-for="item in categories" :category="item.type" :icon="item.icon"
                  @click="theCategoryBtn(item.type)"></CategoryItem>

  </aside>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.left-aside-box {
  transition: all @transition-time;
  border-right: @border-1-solid;

  h4 {
    transition: color @transition-time;
    font-weight: normal;
    color: var(--p-text-color);
  }

  padding: 5px;
  width: @left-aside-width;
  overflow-y: auto; /* 当内容超出时出现垂直滚动条 */
  height: calc(100vh - @nav-height);
  background: none;
  box-sizing: border-box;

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
</style>
