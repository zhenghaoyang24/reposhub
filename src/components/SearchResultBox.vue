<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref, watch} from "vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ClearIcon from "@/components/icons/ClearIcon.vue";
// 搜索框状态  获取状态改变inject
const changeSearchStatue = inject('changeSearchStatueFn', () => {
  console.warn("no function changeSearchStatue")
})
// 关闭搜索框
function changeSearchStatueBtn() {
  changeSearchStatue()
}
// 输入内容
const inputValue = ref<String>('')
function clearInputValueBtn(){  //清空input值
  inputValue.value = ''
  searchInput.value.focus();
}
// 获取focus  绑定input
const searchInput= ref<any>(null)
onMounted(() => {
// 在组件挂载完成后，判断inputRef是否已经关联到真实的DOM元素
  if (searchInput.value) {
    // 使用DOM原生方法让input元素获取焦点
    searchInput.value.focus();
    setTimeout(()=>{
      inputValue.value = ''   //没有用
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

// 搜索model
const searchInputModelBtn = (v:string)=>{
  inputValue.value = 'author:' + inputValue.value;
  // 设置输入框中已存在文字（即author:部分）的颜色为蓝色
  if (searchInput.value) {
    const textNodes = searchInput.value.childNodes;
    for (let i = 0; i < textNodes.length; i++) {
      if (textNodes[i].nodeType === Node.TEXT_NODE) {
        const span = document.createElement('span');
        span.style.color = 'blue';
        span.textContent = textNodes[i].textContent;
        textNodes[i].parentNode?.replaceChild(span, textNodes[i]);
      }
    }
  }
}
// 在组件挂载后，添加input输入事件监听器，用于控制后续输入文字的颜色为白色
onMounted(() => {
  if (searchInput.value) {
    searchInput.value.addEventListener('input', () => {
      searchInput.value = 'white';
    });
  }
});
</script>

<template>
  <div class="search-body" @click.self="changeSearchStatueBtn">
    <div class="search-box">
      <div class="search-input-box">
        <span class="search-input-icon-base">
          <SearchIcon></SearchIcon>
        </span>
        <input  ref="searchInput" type="text" placeholder="type 'Esc' to exit the search" class="search-input"
                v-model="inputValue">
        <span v-show="inputValue.length>0" class="search-input-icon-base" @click="clearInputValueBtn">
          <ClearIcon></ClearIcon>
        </span>
      </div>
      <div class="search-value-model">
        <span @click="searchInputModelBtn('author:')">author:</span>
      </div>

    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.search-value-model{
  margin-top: 10px;

  >span{
    padding: 3px;
    border-radius: 3px;
    background-color: var(--p-blue);
    color: #c6c6c6;
    cursor: pointer;
  }

}


.search-input-box {
  .flex-center();
  width: 100%;
  border: 2px solid var(--p-blue);
  border-radius: 8px;
  cursor: auto;
  padding: 0 3px;
  box-sizing: border-box;
  .search-input-icon-base{
    display: block;
    color: var(--s-text-color);
    width: 25px;
    height: 25px;
    .flex-center();
    .hover-bg-color()
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
