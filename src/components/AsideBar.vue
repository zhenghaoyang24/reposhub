<script setup lang="ts">

</script>

<template>
  <aside class="left-aside-box">


  </aside>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.left-aside-box{
  width: @left-aside-width;
  overflow-y: auto; /* 当内容超出时出现垂直滚动条 */
  height: calc(100vh - @nav-height);
  background: none;

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
