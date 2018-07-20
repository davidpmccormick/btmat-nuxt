<template>
  <div>
    <h2 v-if="error.statusCode === 404">Sorry, that page wasn't found</h2>
    <h2 v-else>Sorry, there was a problem</h2>
    <nuxt-link class="error-link" to="/">Try the home page.</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error']
};
</script>
<style lang="scss">
@import "./assets/styles/utilities/variables";

.error-link {
  font-family: $f-sans;
  color: $c-green;
}
</style>
