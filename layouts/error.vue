<template>
  <div class="page-layout"
    :class="{'is-mobile-nav-shown': isMobileNavShown}">
    <SiteHeader />
    <div class="container main" role="main">
    <h2 v-if="error.statusCode === 404">Page not found</h2>
    <h2 v-else>Sorry, there was a problem</h2>
    <nuxt-link class="error-link" to="/">Try the home page.</nuxt-link>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SiteFooter from '~/components/SiteFooter';
import SiteHeader from '~/components/SiteHeader';

export default {
  props: ['error'],
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
.error-link {
  font-family: $f-sans;
  color: $c-green;
}

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
