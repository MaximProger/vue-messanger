<template>
  <div class="v-main-wrapper">
    <vHeader />
    <router-view />
    <vBottomNav />
  </div>
</template>

<script>
import vHeader from './layouts/v-header'
import vBottomNav from './layouts/v-bottom-nav'
export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vBottomNav
  }
}
</script>

<style lang="scss" scoped></style>
