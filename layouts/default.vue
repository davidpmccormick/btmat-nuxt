<template>
  <div>
    <SiteHeader />
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader';

export default {
  components: {
    SiteHeader
  }
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 600ms ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
