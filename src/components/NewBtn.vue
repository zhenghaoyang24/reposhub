<script setup lang="ts">
const props = defineProps({
  btnValue:{
    type:String,
    required:true,
  }
})

</script>

<template>
<span class="new-btn-box">{{btnValue}}</span>
</template>

<style scoped lang="less">
.new-btn-box{
  user-select: none;
  background-color: var(--p-button-bgColor-reset);
  border-radius: 5px;
  padding: 4px;
  flex: 1;
  cursor: pointer;
  color: #fdfdfd;
  &:hover{
    background-color: var(--p-button-bgColor-hover);
  }
}
</style>
