<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { ROUTER_PATHS } from "@/constants";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
    required: true,
  },
  isBackButton: {
    type: Boolean,
    default: true,
    required: false,
  },
});

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);

function goForRandom() {
  router.push(ROUTER_PATHS.COCKTAIL_RANDOM);
  if (routeName.value == ROUTER_PATHS.COCKTAIL_RANDOM) {
    router.go();
  }
}

import { Back } from "@element-plus/icons-vue";

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
      <div class="btns">
        <el-button
          v-if="isBackButton"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="backFunc"
        />
        <el-button class="btn" @click="goForRandom"
          >Get random cocktail</el-button
        >
      </div>
      <div class="inform">
        <slot></slot>
      </div>
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
  // display: flex
  // justify-content: center
  // align-items: center

.inform
  width: 100%
  min-height: 100%
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

.back
  background: transparent
  border-color: #fff

  &:hover
    border-color: $accent


.btns
  display: flex
  justify-content: space-between
  align-items: center
</style>
