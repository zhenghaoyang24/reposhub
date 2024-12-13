<script setup lang="ts">

import {useUserStore} from "@/stores/user.ts";
import CatalogIcon from "@/components/icons/CatalogIcon.vue";
const store = useUserStore();
</script>

<template>
  <div class="category-catalog-content">
    <CatalogIcon></CatalogIcon> &nbsp;
    {{store.storeCategory}} {{store.storeCategoryChildren==='all'? '':' / '+store.storeCategoryChildren}}
  </div>
</template>

<style scoped lang="less">
@import "@/assets/base.less";
.category-catalog-content{
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: var(--s-text-color);
  svg{
    width: 18px;
    height: 18px;
  }

}
</style>
