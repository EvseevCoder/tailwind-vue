<script setup>
import { ref } from "vue";
import AppLauout from "../components/AppLayout.vue";
import { useRootStore } from "../stores/root";
import { storeToRefs } from "pinia";

// Работа с Phinia
const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);
const ingredient = ref(null);
</script>

<template>
  <AppLauout imgUrl="../src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="ingredient"
            placeholder="Choose main ingredient"
            size="large"
            style="width: 240px"
            class="select"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>

          <div class="text">
            Try our delicious cocktail recipes for every occasion. Find
            delicious cocktail recipes by ingredient through our cocktail
            generator.
          </div>
          <img src="../assets/img/glasses.png" alt="Cocktails" class="img" />
        </div>
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
.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  padding-top: 50px
  max-width: 516px
  color: $textMuted
  font-size: 16px
  font-weight: 400
  line-height: 36px
  letter-spacing: 1.6px

.img
  width: 345px
  padding-top: 60px
</style>
