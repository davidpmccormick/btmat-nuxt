<template>
  <div class="page-layout"
    :class="{'is-mobile-nav-shown': isMobileNavShown}">
    <CookieBanner />
    <SiteHeader />
    <transition name="fade">
      <div v-show="!isMobileNavShown" class="container main" role="main">
        <nuxt />
      </div>
    </transition>
    <transition name="fade">
      <SiteFooter />
    </transition>
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
    @media (min-width: $b-large) {
      display: block !important;
    }
  }
}
</style>
