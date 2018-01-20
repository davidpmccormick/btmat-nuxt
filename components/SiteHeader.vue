<template>
  <header class="site-header">
    <div class="site-header__inner">
      <div class="container">
        <h1 class="site-header__title">
          <nuxt-link class="site-header__link" to="/">BTMAT</nuxt-link>
          <span class="site-header__subtitle">Beryl Thyer Memorial Africa Trust, caring for African children with cancer.</span>
        </h1>
      </div>
    </div>
    <div class="container">
      <SiteNav />
    </div>
  </header>
</template>

<script>
import Icon from '~/components/Icon';
import SiteNav from '~/components/SiteNav';

export default {
  components: {
    Icon,
    SiteNav
  }
};
</script>

<style lang="scss">
.site-header {
  z-index: 1;
  top: -126px;
  font-family: $f-sans;
  font-weight: bold;
  background: $c-white;

  @media(min-width: 680px) {
    position: sticky;
    border-bottom: 1px solid $c-keyline;
  }
}

.site-header__inner {
  padding: 10px 0;
  border-bottom: 5px solid $c-keyline;

  @media(min-width: 680px) {
    padding-top: 20px;
  }
}

.site-header__title {
  font-size: 3.2rem;
  line-height: 1;
  margin-bottom: 0;
  margin-right: 1rem;
}

.site-header__link {
  color: $c-charcoal;
  text-decoration: none;
}

.site-header__subtitle {
  font-size: 1rem;
  display: block;
  margin-top: 0.5em;
  margin-bottom: 1em;
}
</style>
