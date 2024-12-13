<script setup lang="ts">
import categories from '@/data/category.json';
import {useUserStore} from "@/stores/user.ts";
const store = useUserStore();
import {ref, watch} from "vue";
const categoryChildren = ref()

watch(() => store.storeCategory, (newVal, oldVal) => {
  if (newVal !== 'collect'){
    categoryChildren.value = categories.filter(category => category.type === store.storeCategory)[0].children
  }else{
    console.log(1)
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

  margin-top: 10px;
  color: var(--s-text-color);
  display: flex;
  >span{
    transition: all @transition-time;
    border-bottom: 2px var(--p-color) solid;
    cursor: pointer;
    margin-right: 5px;
    padding: 10px 10px;
    color: var(--s-text-color);
    &:hover{
      color: var(--p-text-color);
    }
  }
}
</style>
