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

function clearInputValueBtn() {  //清空input值
  inputValue.value = ''
  searchInput.value.focus();
}

// 获取focus  绑定input
const searchInput = ref<any>(null)
onMounted(() => {
// 在组件挂载完成后，判断inputRef是否已经关联到真实的DOM元素
  if (searchInput.value) {
    // 使用DOM原生方法让input元素获取焦点
    searchInput.value.focus();
    setTimeout(() => {
      inputValue.value = ''   //没有用
    }, 10)
  }
  // 添加监听 按下esc
  window.addEventListener('keydown', handleKeyDownSearch);
})
// 按下esc关闭
const handleKeyDownSearch = (e: any) => {
  if (e.key === 'Escape') {
    changeSearchStatue()
  }
};
// 在组件卸载时移除全局键盘按下事件监听
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDownSearch);
});

// 搜索model
const searchInputModelBtn = (v: string) => {
  if (inputValue.value.length > 0) {
    inputValue.value = `${inputValue.value};${v}`;
  } else {
    inputValue.value = `${v}`;
  }
  searchInput.value.focus();
}
// 动态搜索
import allRepos from '@/data/repos.json';
import ReposIcon from "@/components/icons/ReposIcon.vue";
const author = ref()
const repos = ref()
const reposArr = ref()
watch(inputValue, (newValue) => {
  author.value = ''
  repos.value = ''
  const parts = newValue.split(';');
  for (const part of parts) {
    if (part.startsWith('author:')) {
      author.value = part.slice('author:'.length).trim();
    } else if (part.startsWith('repos:')) {
      repos.value = part.slice('repos:'.length).trim();
    }
  }
  if (author.value.length === 0 && repos.value.length === 0) {
    reposArr.value = null
  } else {
    reposArr.value = allRepos.filter(item => {
      return item.reposName.includes(repos.value) && item.author.includes(author.value)
    })
  }
}, {immediate: true})

const toTheReposBtn = (author:string,repos:string) => {
  window.open(`https://github.com/${author}/${repos}`);
}

</script>
<template>
  <div class="search-body" @click.self="changeSearchStatueBtn">
    <div class="search-box">
      <div class="search-input-box">
        <span class="search-input-icon-base">
          <SearchIcon></SearchIcon>
        </span>
        <input spellcheck="false" ref="searchInput" type="text" placeholder="type 'Esc' to exit the search"
               class="search-input"
               v-model="inputValue">
        <span v-show="inputValue.length>0" class="search-input-icon-base" @click="clearInputValueBtn">
          <ClearIcon></ClearIcon>
        </span>
      </div>
      <div class="search-value-model">
        <span @click="searchInputModelBtn('author:')">author:</span>
        <span @click="searchInputModelBtn('repos:')">repos:</span>
      </div>
      <div class="search-repos-box">
        <div class="search-repos-item" v-for="item in reposArr" @click="toTheReposBtn(item.author,item.reposName)">
          <span>
            <ReposIcon style="color: var(--s-text-color)"></ReposIcon>
            <span>{{ item.author }}/{{ item.reposName }}</span>
          </span>
          <span>Jump to</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";



.search-repos-box {
  margin-top: 10px;
  overflow-y: scroll;
  max-height: 100%;
  .search-repos-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 5px;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: @mobile-width) {
      padding: 5px 3px;
    }

    &:hover {
      background-color: var(--hover-bg-color)
    }
    >span:nth-child(1){
      display: flex;
      align-items: center;
      >span{
        font-size: 15px;
        margin-left: 4px;
        font-weight: lighter;
        color: var(--p-text-color);
      }
    }
    >span:nth-child(2){
      font-size: 15px;
      color: var(--s-text-color);
      @media (max-width: @mobile-width) {
        display: none;
      }
    }
  }
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

.search-value-model {
  margin-top: 10px;

  > span {
    margin-right: 7px;
    padding: 3px;
    border-radius: 3px;
    background-color: var(--p-blue);
    color: #ffffff;
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

  .search-input-icon-base {
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
    display: flex; /* 设置父元素为flex布局 */
    flex-direction: column; /* 子元素按列排列（纵向排列） */
    box-sizing: border-box; /* 关键属性，改变盒模型计算方式 */
    padding: @nav-padding - 2px;
    margin-top: 2px;
    border: @border-1-solid;
    width: 50%;
    height: fit-content;
    max-height: 70%;
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
      width: 90%;
    }
  }
}
</style>
