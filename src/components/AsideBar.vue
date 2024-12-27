<script setup lang="ts">
import categories from "@/data/category.json"
import CategoryItem from "@/components/CategoryItem.vue";
import {useUserStore} from "@/stores/user.ts";
import NewBtn from "@/components/NewBtn.vue";

const store = useUserStore();
const theCategoryBtn = (value: String) => {
  store.storeChangeCategory(value)
}
</script>

<template>
  <aside class="left-aside-box">
    <h4>Category</h4>
    <CategoryItem category="like" icon="icon-park-outline:like" @click="theCategoryBtn('like')"></CategoryItem>
    <CategoryItem v-for="item in categories" :category="item.type" :icon="item.icon"
                  @click="theCategoryBtn(item.type)"></CategoryItem>
  </aside>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.left-aside-box {
  transition: border-color @transition-time;
  border-right: @border-1-solid;

  h4 {
    transition: color @transition-time;
    font-weight: normal;
    color: var(--p-text-color);
    @media (max-width: @mobile-width) {
      font-size: 11px;
    }
  }

  padding: 5px;
  width: @left-aside-width;
  overflow:hidden auto;
  height: calc(100vh - @nav-height);
  background: none;
  box-sizing: border-box;

  @media (max-width: @pad-width) {
    width: calc(@left-aside-width - 90px);
  }
  @media (max-width: @mobile-width) {
    width: @left-aside-width - 190px;
    min-width: fit-content;
  }
  .scrollbar(10px, 10px, var(--scrollbar-bg-color), var(--scrollbar-thumb-bg-color), var(--scrollbar-thumb-bg-color-hover), 4px);

}
</style>
