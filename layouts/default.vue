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

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
