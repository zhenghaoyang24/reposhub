<script setup lang="ts">
import ReposIcon from "@/components/icons/ReposIcon.vue";
import axios from "axios";
import {onBeforeMount, onUnmounted, ref} from "vue";
import StarIcon from "@/components/icons/StarIcon.vue";
// 仓库名
const props = defineProps({
  author: {
    type: String,
    required: true
  },
  reposName: {
    type: String,
    required: true
  },
})
const toTheReposBtn = () => {
  window.open(`https://github.com/${props.author}/${props.reposName}`);
}
onBeforeMount(()=>{
  getReposInfo();
})
/**
 * 获取当前repos信息
 */
const description = ref<String>('');
const stargazers_count = ref<number>(0);
const getReposInfo = () => {
  axios.get(`https://api.github.com/repos/${props.author}/${props.reposName}`).then((res) => {
    description.value = res.data.description
    stargazers_count.value = res.data.stargazers_count
  }).catch((err) => {
    console.log(err);
  })
}
</script>

<template>
  <div class="repos-card-box">
    <div class="repos-card-url">
      <ReposIcon style="color: var(--s-text-color)"></ReposIcon>
      <span @click="toTheReposBtn">{{ author }}/{{ reposName }}</span>
    </div>
    <div class="repos-card-description">{{description}}</div>
    <div class="repos-card-info">
      <span><StarIcon style="color: var(--s-text-color)"></StarIcon>&nbsp;{{stargazers_count}}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.repos-card-info{
  display: flex;
  margin-top: auto;
  color: var(--s-text-color);
  font-size: 12px;
  svg{
    width: 16px;
    height: 16px;
  }
  >span{
    padding-right: 15px;
    display: flex;
    align-items: center;
  }

}
.repos-card-description{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 7px 0;
  font-size: 14px;
  color: var(--p-text-color);
  width: 100%;
}
.repos-card-box {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  transition: all @transition-time;
  border: @border-1-solid;
  color: #fdfdfd;

  .repos-card-url {
    display: flex;
    align-items: center;
    color: var(--s-text-color);
    font-size: 14px;

    > span {
      cursor: pointer;
      padding-left: 5px;
      color: var(--p-blue);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
