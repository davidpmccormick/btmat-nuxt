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

<style>
  .site-header {
    position: sticky;
    top: -90px;
    background: white;
    font-family: "proxima-soft";
    font-weight: bold;
    border-bottom: 1px solid #e4e4e4;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    padding-top: 20px;
  }

  .site-header__title {
    font-weight: bold;
    color: #47b784;
    font-size: 3.2rem;
    margin-bottom: 0.2em;
  }
</style>
