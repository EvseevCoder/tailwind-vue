import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { INGREDIENTS_URL } from '@/constants'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: []
  }),
  actions: {
    async getIngredients() {
      // const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      console.log(INGREDIENTS_URL);
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks
    }
  }
})
