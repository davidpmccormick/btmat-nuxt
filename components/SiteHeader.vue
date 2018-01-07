<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header__inner">
        <h1 class="site-header__title">
          BTMAT
          <span class="site-header__subtitle">Beryl Thyer Memorial Africa Trust, caring for African children with cancer.</span>
        </h1>
        <div class="site-header__social">
          <a class="social twitter" href="#"><Icon class="social-icon" name="twitter" /></a>
          <a class="social facebook" href="#"><Icon class="social-icon" name="facebook" /></a>
        </div>
      </div>
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
  top: -116px;
  background: white;
  font-family: "proxima-soft";
  font-weight: bold;

  @media(min-width: 680px) {
    padding-top: 20px;
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
  display: flex;
  justify-content: space-between;
}

.site-header__title {
  font-weight: bold;
  color: #47b784;
  font-size: 3.2rem;
  line-height: 1;
  margin-bottom: 0;
  margin-right: 1rem;
}

.site-header__subtitle {
  font-size: 1rem;
  display: block;
  margin-top: 0.5em;
  margin-bottom: 1em;
  padding-right: 60px;
  color: #aaa;
}

.site-header__social {
  position: absolute;
  right: 20px;
  top: 55px;

  @media (min-width: 680px) {
    position: static;
  }
}

.twitter {
  margin-right: 0.2em;
}

.facebook {
  position: relative;
  top: -0.1em;
}

.icon.social-icon svg {
  height: 1.5em;
  fill: #aaa;
  transition: all 600ms ease;

  .social:hover & {
    fill: #333;
  }
}

.facebook .social-icon svg {
  height: 1.4em;
}
</style>
