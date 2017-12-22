<template>
  <header class="site-header">
    <div class="container">
      <h1 class="site-header__title">BTMAT</h1>
      <SiteNav />
    </div>
  </header>
</template>

<script>
import SiteNav from '~/components/SiteNav';

export default {
  components: {
    SiteNav
  }
};
</script>

<style lang="scss">
  .site-header {
    z-index: 1;
    top: -100px;
    background: white;
    font-family: "proxima-soft";
    font-weight: bold;
    padding-top: 20px;

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

  .site-header__title {
    font-weight: bold;
    color: #47b784;
    font-size: 3.2rem;
    margin-bottom: 0.2em;
  }
</style>
