<script setup lang="ts">
import categories from "@/data/category.json"
import CategoryItem from "@/components/CategoryItem.vue";

</script>

<template>
  <aside class="left-aside-box">
    <CategoryItem v-for="item in categories" :category="item.type"></CategoryItem>



  </aside>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.left-aside-box{
  border: 1px red solid;
  padding: 10px;
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
    &:hover{
      background-color: #c6c6c6;
    }
  }
}
</style>
