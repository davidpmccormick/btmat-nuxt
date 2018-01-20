<template>
  <div class="page-layout"
    :class="{'is-mobile-nav-shown': isMobileNavShown}">
    <SiteHeader />
    <div class="container main" role="main">
      <nuxt />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SiteFooter from '~/components/SiteFooter';
import SiteHeader from '~/components/SiteHeader';

export default {
  components: {
    SiteFooter,
    SiteHeader
  },
  computed: {
    ...mapState([
      'isMobileNavShown'
    ])
  }
};
</script>

<style lang="scss">
  .page-layout.is-mobile-nav-shown {
    .main,
    .footer {
      display: none;

      @media(min-width: 680px) {
        display: block;
      }
    }
  }
</style>
