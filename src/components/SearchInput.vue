<script setup lang="ts">

</script>

<template>
  <input disabled type="text" placeholder="type '/' to search" class="search-input">
  <div class="search-content-box">

  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.search-content-box{
  position: absolute;
  width: 100%;

  //height: 100px;
  background-color: blue;
}


.search-input{
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  border: @border-1-solid;
  outline: none;
  background: none;
  transition: all @transition-time;
}
.search-input::placeholder{
  color:var(--s-text-color);
}
</style>
