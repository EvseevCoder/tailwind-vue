<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink class="root" :to="`/cocktails/${cocktail.idDrink}`">
    <div
      :style="`background-image: url(${cocktail.strDrinkThumb})`"
      class="pic"
    ></div>
    <div class="name">{{ cocktail.strDrink }}</div>
  </RouterLink>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
  width: calc((100% - 76px) / 3)
  // padding-right: 38px
  padding-bottom: 28px
  display: flex
  flex-direction: column
  align-items: center
  transition: 0.2s ease


  &:hover
    color: grey
    transform: scale(1.1) translateY(8px)


.pic
  width: 120px
  height: 120px
  background-position: top
  background-size: cover
  transition: 0.2s ease
  border-radius: 10px


.name
  width: 100%
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  padding-top: 15px
  letter-spacing: 0.1em
  text-align: center
</style>
