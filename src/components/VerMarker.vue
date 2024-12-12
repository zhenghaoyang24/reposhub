<script setup lang="ts">
const props = defineProps({
  markerValue: {
    type: Boolean,
    required: true
  }
})


</script>

<template>
  <span class="ver-marker" :class="markerValue? 'ver-marker-true':''"></span>


</template>

<style scoped lang="less">
@import "@/assets/base.less";
.ver-marker{
  transition: all @transition-time;
  display: inline-flex;
  width: 4px;
  border-radius: 2px;
  height: 25px;
  background-color: var(--p-color);
}
.ver-marker-true{
  background-color: var(--p-blue);
}

</style>
