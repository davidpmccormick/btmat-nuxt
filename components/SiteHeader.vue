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
  font-family: "proxima-soft";
  font-weight: bold;

  @media(min-width: 680px) {
    position: sticky;
  }

  &:after {
    display: none;
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(#f5f5f5, 0.7);

    @media(min-width: 680px) {
      display: block;
    }
  }
}

.site-header__inner {
  background: #35485d;
  border-bottom: 3px solid #47b784;
  padding: 10px 0;


  @media(min-width: 680px) {
    padding-top: 20px;
  }
}

.site-header__title {
  color: #47b784;
  font-size: 3.2rem;
  line-height: 1;
  margin-bottom: 0;
  margin-right: 1rem;
}

.site-header__link {
  color: #47b784;
  text-decoration: none;
}

.site-header__subtitle {
  font-size: 1rem;
  display: block;
  margin-top: 0.5em;
  margin-bottom: 1em;
}
</style>
