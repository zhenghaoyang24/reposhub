<script setup lang="ts">
import ReposIcon from "@/components/icons/ReposIcon.vue";
import axios from "axios";
import {computed, nextTick, onBeforeMount, ref} from "vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import {useReposStore} from "@/stores/repos.ts";
import {LanguageColors} from "@/data/languageColors";  //导入语言颜色

const store = useReposStore()
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
onBeforeMount(() => {
  getReposInfo();
})
const languageColorRef = ref()
const setLanguageColor = () => {
  LanguageColors.forEach(item => {
    for (const lang in item) {
      if (lang === language.value) {
        nextTick(() => {
          languageColorRef.value.style.backgroundColor = item[lang];
        })
      }
    }
  });
};
// 赋值 仓库信息
const setReposInfo = (_description: string, _language: string, _stargazers_count: number) => {
  description.value = _description
  stargazers_count.value = _stargazers_count
  language.value = _language
}
/**
 * 获取当前repos信息
 */
const description = ref<string>('');
const languageColor = ref<string>('');
const language = ref<string>('');
const stargazers_count = ref<number>(0);  //原始star数据
const star = computed(() => {  //将star 转换为 单位k
  if (stargazers_count.value < 1000) {
    return stargazers_count.value;
  }
  return (stargazers_count.value / 1000).toFixed(1) + "k";
});
const getReposInfo = async () => {
  const theRepo = store.reposArrayStore.find((item) => {
    return item.author === props.author && item.reposName === props.reposName;
  });
  if (theRepo) {
    setReposInfo(theRepo.description, theRepo.language, theRepo.stargazers_count);
    setLanguageColor();
  } else {
    axios.get(`https://api.github.com/repos/${props.author}/${props.reposName}`).then(async (res) => {
      setReposInfo(res.data.description, res.data.language, res.data.stargazers_count);
      setLanguageColor();
      store.pushReposStoreFn(  //添加仓库信息
          props.author,
          props.reposName,
          description.value,
          stargazers_count.value,
          language.value)
    }).catch((err) => {
      console.log(err);
    })
  }
}
</script>

<template>
  <div class="repos-card-box">
    <div class="repos-card-url">
      <ReposIcon style="color: var(--s-text-color)"></ReposIcon>
      <span @click="toTheReposBtn">{{ author }}/{{ reposName }}</span>
    </div>
    <div class="repos-card-description">{{ description }}</div>
    <div class="repos-card-info">
      <span v-if="language"><span ref="languageColorRef" class="language-color"></span>{{ language }}{{ languageColor }}</span>
      <span><StarIcon style="color: var(--s-text-color)"></StarIcon>&nbsp;{{ star }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";

.language-color {
  margin-right: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.repos-card-info {
  display: flex;
  margin-top: auto;
  color: var(--s-text-color);
  font-size: 12px;

  svg {
    width: 16px;
    height: 16px;
  }

  > span {
    padding-right: 15px;
    display: flex;
    align-items: center;
  }

}

.repos-card-description {

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 7px 0;
  font-weight: normal;
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
