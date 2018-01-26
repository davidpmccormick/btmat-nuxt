<template>
  <div class="page-layout"
    :class="{'is-mobile-nav-shown': isMobileNavShown}">
    <CookieBanner />
    <SiteHeader />
    <div class="container main" role="main">
      <nuxt />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CookieBanner from '~/components/CookieBanner';
import SiteFooter from '~/components/SiteFooter';
import SiteHeader from '~/components/SiteHeader';

export default {
  components: {
    CookieBanner,
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

    @media (min-width: $b-large) {
      display: block;
    }
  }
}
</style>
