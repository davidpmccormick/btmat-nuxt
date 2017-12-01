<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header';

export default {
  components: {
    Header
  }
};
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
