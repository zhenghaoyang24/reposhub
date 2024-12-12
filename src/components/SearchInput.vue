<script setup lang="js">
import {inject,onMounted,onUnmounted} from 'vue'

const changeSearchStatue = inject('changeSearchStatueFn', () => {
  console.log("no function")
})
function changeSearchStatueBtn(){
  changeSearchStatue()
}
// 按下 / 搜索
const handleKeyDownSearch = (e) => {
  if (e.key === '/') {
    changeSearchStatue()
  }
};
// 监听
onMounted(() => {
  window.addEventListener('keydown', handleKeyDownSearch);
});
// 在组件卸载时移除全局键盘按下事件监听，避免内存泄漏
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDownSearch);
});

</script>

<template>
  <div class="search-input-div" @click="changeSearchStatueBtn()">
    type ' / ' to search
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.search-input-div {
  user-select: none;
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
</style>
