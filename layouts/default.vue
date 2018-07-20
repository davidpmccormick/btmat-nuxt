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
  },
  beforeMount() {
    const store = this.$store;
    /* eslint-disable */
    ((d) => {
    var config = {
      kitId: 'lxm7jly',
      scriptTimeout: 3000,
      async: true,
      active() {
        store.commit('setFontsLoaded');
      }
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  /* eslint-enable */
  }
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

.page-layout.is-mobile-nav-shown {
  .main,
  .footer {
    @media (min-width: $b-large) {
      display: block !important;
    }
  }
}
</style>
