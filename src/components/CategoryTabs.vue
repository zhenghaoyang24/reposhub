<script setup lang="ts">
import categories from '@/data/category.json';
import {useUserStore} from "@/stores/user.ts";
const store = useUserStore();
import {ref, watch} from "vue";
const categoryChildren = ref()

//
watch(() => store.storeCategory, (newVal, oldVal) => {
  if (newVal !== 'like'){
    categoryChildren.value = categories.filter(category => category.type === store.storeCategory)[0].children
  }else{
    categoryChildren.value = 'all'
  }
},{
  immediate: true,
});
// 小类别
const tabCategoryChildBtn = (value:String)=>{
  store.storeChangeCategoryChildren(value)
}
</script>

<template>
  <div class="category-tabs-content">
    <span @click="tabCategoryChildBtn('all')"
          :style="store.storeCategoryChildren==='all'? 'border-bottom: 2px var(--p-blue) solid;color: var(--p-text-color);':''">all</span>
    <span @click="tabCategoryChildBtn(item.type)" v-for="item in categoryChildren"
          :style="(store.storeCategoryChildren===item.type)? 'border-bottom: 2px var(--p-blue) solid;color: var(--p-text-color);':''">{{item.type}}</span>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.category-tabs-content {
  flex: 1;
  margin-top: 10px;
  color: var(--s-text-color);
  display: flex;
  flex-wrap: wrap;
  >span{
    text-wrap: nowrap;
    transition: all @transition-time;
    border-bottom: 2px var(--p-color) solid;
    cursor: pointer;
    margin-right: 5px;
    padding: 10px 10px;
    box-sizing: border-box;
    color: var(--s-text-color);
    &:hover{
      color: var(--p-text-color);
    }
    @media (max-width: @mobile-width) {
      margin-right: 3px;
      padding: 6px 6px;
    }
  }
}
</style>
