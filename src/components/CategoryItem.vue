<script setup lang="ts">
const props = defineProps({
  category: {
    type:String,
    required:true
  }
})

</script>

<template>
  <div class="category-item-box">
    {{category}}
  </div>

</template>

<style scoped lang="less">
@import "@/assets/base.less";
.category-item-box{
  font-size: 1em;
  padding: 10px;
  color: var(--p-text-color);
  width: 100%;
  box-sizing: border-box;
  .hover-bg-color();
  border-radius: 5px;
  font-weight: lighter;
}

</style>
