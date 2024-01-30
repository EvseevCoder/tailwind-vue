<script setup>
import AppLauout from "../components/AppLayout.vue";
import { useRootStore } from "../stores/root";

const rootStore = useRootStore();
rootStore.getIngredients();
</script>

<template>
  <AppLauout imgUrl="../src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
      </div>
    </div>
  </AppLauout>
</template>

<style lang="sass" scopped>
@import '../assets/styles/main'

.wrapper
  display: flex
  align-items: center
  justify-content: center

.info
  padding: 80px 0
  text-align: center
</style>
