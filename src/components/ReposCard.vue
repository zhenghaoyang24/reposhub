<script setup lang="ts">
import ReposIcon from "@/components/icons/ReposIcon.vue";
import router from "@/router";

const props = defineProps({
  author:{
    type:String,
    required:true
  },
  reposName:{
    type:String,
    required:true
  },
})
const toTheReposBtn = ()=>{
  window.open(`https://github.com/${props.author}/${props.reposName}`);
}
</script>

<template>
  <div class="repos-card-box">
    <div class="repos-card-url">
      <ReposIcon style="color: var(--s-text-color)"></ReposIcon>
      <span @click="toTheReposBtn">{{author}}/{{reposName}}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.repos-card-box{
  border-radius: 5px;
  padding: 10px;
  display: block;
  transition: all @transition-time;
  border: @border-1-solid;
  color: #fdfdfd;
  .repos-card-url{
    display: flex;
    align-items: center;
    color: var(--s-text-color);
    font-size: 14px;
    >span{
      cursor: pointer;
      padding-left: 5px;
      color: var(--p-blue);
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
