<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import {onBeforeMount} from "vue";
import {useUserStore} from "@/stores/user.ts";
const userStore = useUserStore();
onBeforeMount(()=>{
  userStore.storeGetTheme()
})

</script>

<template>
  <NavBar></NavBar>


</template>

<style scoped lang="less">


</style>
