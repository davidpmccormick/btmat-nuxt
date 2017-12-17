<template>
  <div>
    <SiteHeader />
    <div class="container main">
      <nuxt />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from '~/components/SiteFooter';
import SiteHeader from '~/components/SiteHeader';

export default {
  components: {
    SiteFooter,
    SiteHeader
  }
};
</script>
