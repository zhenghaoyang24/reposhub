<script setup lang="ts">
import {Icon} from "@iconify/vue";
import VerMarker from "@/components/VerMarker.vue";
import {useUserStore} from "@/stores/user.ts";
const store = useUserStore();
const props = defineProps({
  category: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})


</script>

<template>
  <div class="category-item-box">
    <VerMarker :marker-value="store.storeCategory===category"></VerMarker>
    <div class="category-item-icon-name" :class="(store.storeCategory===category)? 'hover-bg-color':''">
      <Icon :icon="icon"/>
      <span :class="(store.storeCategory===category)? 'text-bold':''">{{ category }}</span>
    </div>
  </div>

</template>

<style scoped lang="less">
@import "@/assets/base.less";

.category-item-icon-name{
  border-radius: 5px;
  margin-left: 5px;
  padding: 8px;
  flex: 1;
  .hover-bg-color();
  display: inline-flex;
  align-items: center;
  >span{
    transition: color @transition-time;
    color: var(--p-text-color);
    padding-left: 10px;
  }
}
.hover-bg-color{
  .hover-bg-color();
}
.text-bold{
  font-weight: 400;
}
.category-item-box {
  font-size: 1em;
  padding: 0 5px;
  color: var(--s-text-color);
  width: 100%;
  box-sizing: border-box;

  border-radius: 5px;
  font-weight: lighter;
  .justify-space-between()
}

</style>
