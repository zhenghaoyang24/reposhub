<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref} from "vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
// 搜索框状态  获取状态改变inject
const changeSearchStatue = inject('changeSearchStatueFn', () => {
  console.log("no function")
})
// 关闭搜索框
function changeSearchStatueBtn() {
  changeSearchStatue()
}
// 输入内容
const inputValue = ref<String|null>('')
// 获取focus  绑定input
const searchInput= ref<any>(null)
onMounted(() => {
// 在组件挂载完成后，判断inputRef是否已经关联到真实的DOM元素
  if (searchInput.value) {
    // 使用DOM原生方法让input元素获取焦点
    searchInput.value.focus();
    setTimeout(()=>{
      inputValue.value = null   //没有用
    },10)
  }
  // 添加监听 按下esc
  window.addEventListener('keydown', handleKeyDownSearch);
})
// 按下esc关闭
const handleKeyDownSearch = (e:any) => {
  if (e.key === 'Escape') {
    changeSearchStatue()
  }
};
// 在组件卸载时移除全局键盘按下事件监听
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDownSearch);
});


</script>

<template>
  <div class="search-body" @click.self="changeSearchStatueBtn">
    <div class="search-box">

      <div class="search-input-box">
        <span class="search-icon">
          <SearchIcon></SearchIcon>
        </span>
        <input ref="searchInput" type="text" placeholder="" class="search-input" :value="inputValue">
        <span></span>
      </div>


    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.search-input-box {
  .flex-center();
  width: 100%;
  border: 2px solid var(--p-blue);
  border-radius: 8px;
  cursor: auto;
  padding: 0 3px;
  box-sizing: border-box;
  .search-icon{
    display: block;
    color: var(--s-text-color);
    width: 24px;
    height: 24px;
    .flex-center();
  }
}

.search-input {
  width: 100%;
  box-sizing: border-box; /* 关键属性，改变盒模型计算方式 */
  font-weight: normal;
  color: var(--p-text-color);
  padding: 8px 0;
  font-size: 15px;
  border: none;
  outline: none;
  background: none;
}

.search-body {
  display: flex;
  justify-content: center;
  .full-screen();
  background-color: var(--backdrop-bgColor);

  .search-box {
    box-sizing: border-box; /* 关键属性，改变盒模型计算方式 */
    padding: @nav-padding - 2px;
    margin-top: 2px;
    border: @border-1-solid;
    width: 50%;
    height: 90%;
    border-radius: 13px;
    background-color: var(--p-color);
    box-shadow: var(--shadow-floating);
  }

  @media (max-width: @pad-width) {
    .search-box {
      width: 70%;
    }
  }
  @media (max-width: @mobile-width) {
    .search-box {
      width: 80%;
    }
  }
}
</style>
