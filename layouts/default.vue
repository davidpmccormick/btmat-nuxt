<template>
  <div>
    <SiteHeader />
    <div class="container main">
      <nuxt />
    </div>
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
