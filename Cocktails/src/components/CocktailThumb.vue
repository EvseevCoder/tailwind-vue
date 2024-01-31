<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
        class="pic"
      ></div>
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
  width: calc((100% - 76px) / 3)
  padding-right: 38px
  padding-bottom: 28px

  &:nth-child(3n + 3)
    padding-right: 0

.pic
  width: 120px
  height: 120px
  background-size: cover

.name
  padding-top: 15px
  letter-spacing: 0.1em
</style>
