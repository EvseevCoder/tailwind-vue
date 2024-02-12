<script setup>
import axios from "axios";
import AppLayout from "@/components/AppLayout.vue";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { COCKTAIL_BY_ID } from "@/constants/api";

const route = useRoute();
const router = useRouter();

const cocktailId = computed(() => route.path.split("/").pop());

const ingredients = computed(() => {
  const ingredients = [];
  for (let index = 1; index <= 15; index++) {
    if (!cocktail.value[`strIngredient${index}`]) break;

    let ingredient = {};
    ingredient.name = cocktail.value[`strIngredient${index}`];
    ingredient.mesure = cocktail.value[`strMeasure${index}`];
    ingredient.key = index;

    ingredients.push(ingredient);
  }
  return ingredients;
});

function goBack() {
  router.go(-1);
}

const cocktail = ref(null);
async function getCocktail() {
  const data = await axios.get(COCKTAIL_BY_ID + cocktailId.value);
  cocktail.value = data?.data?.drinks[0];
}
getCocktail();
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout
      :imgUrl="cocktail.strDrinkThumb"
      :backFunc="goBack"
      :isBackButton="true"
    >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="list">
            <div v-for="item in ingredients" :key="item.key" class="list-item">
              {{ item.name }}
              <template v-if="item.mesure">
                |
                {{ item.mesure }}
              </template>
            </div>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scopped>
@import '../assets/styles/main'

.wrapper
  display: flex
  align-items: center
  justify-content: center
  margin-left: 50b

.info
  padding: 80px 0
  text-align: center
</style>
