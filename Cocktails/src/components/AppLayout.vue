<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
});

// export default defineComponent({
//   props: {
//     imgUrl: {
//       type: String,
//       required: true,
//     },
//   },
// });
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
  display: flex
  min-height: 100vh
  background-color: $background

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  position: relative
  width: 50%
  padding: 32px 40px
  display: flex
  justify-content: center
  align-items: center

.btn
  padding: 8px 16px
  font-size: 16px
  position: absolute
  top: 32px
  right: 40px
  background-color: $accent
  border: none
  color: $text
  font-family: Raleway

  &:hover
    background-color: darken($accent, 10%)
</style>
