<script setup lang="ts">
import {inject} from "vue";

const changeSearchStatue = inject('changeSearchStatueFn', () => {
  console.log("no function")
})
function changeSearchStatueBtn(){
  changeSearchStatue()
}
</script>

<template>
  <div class="search-body" @click.self="changeSearchStatue">
    <div class="search-box"></div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.search-body{
  display: flex;
  justify-content: center;
  .full-screen();
  background-color: rgba(0, 0, 255, 0.27);
  .search-box{
    width: 60%;
    height: 90%;
    background-color: #020202;
  }
}
</style>
