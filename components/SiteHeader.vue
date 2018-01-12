<template>
  <header class="site-header">
    <div class="site-header__inner">
      <div class="container">
        <h1 class="site-header__title">
          BTMAT
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
  background: white;
  font-family: "proxima-soft";
  font-weight: bold;

  @media(min-width: 680px) {
    border-bottom: 1px solid #e4e4e4;
    position: sticky;
  }

  &:before,
  &:after {
    display: none;
    position: absolute;
    content: '';
    height: 5px;
    background: white;
    left: 0;
    right: 0;

    @media(min-width: 680px) {
      display: block;
    }
  }

  &:before {
    bottom: 2px;
    z-index: 2;
  }

  &:after {
    z-index: 1;
    content: '';
    bottom: -1px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }
}

.site-header__inner {
  background: #47b784;
  border-bottom: 3px solid #35485d;
  padding: 10px 0;


  @media(min-width: 680px) {
    padding-top: 20px;
  }
}

.site-header__title {
  font-weight: bold;
  color: #35485d;
  font-size: 3.2rem;
  line-height: 1;
  margin-bottom: 0;
  margin-right: 1rem;
  text-shadow: -0.025em -0.025em rgba(255, 255, 255, 0.1)
}

.site-header__subtitle {
  font-size: 1rem;
  display: block;
  margin-top: 0.5em;
  margin-bottom: 1em;
  color: #35485d;
}
</style>
