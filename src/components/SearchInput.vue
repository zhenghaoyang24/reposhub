<script setup lang="js">
import {inject} from 'vue'

const changeSearchStatue = inject('changeSearchStatueFn', () => {
  console.log("no function")
})
function changeSearchStatueBtn(){
  changeSearchStatue()
}

</script>

<template>
  <div class="search-input" @click="changeSearchStatueBtn()">
    type '/' to search
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.search-input {
  font-weight: lighter;
  color: var(--s-text-color);
  width: 200px;
  padding: 7px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
  border: @border-1-solid;
  transition: all @transition-time;
}

.search-input::placeholder {
  color: var(--s-text-color);
}
</style>
