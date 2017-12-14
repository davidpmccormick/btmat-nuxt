<template>
  <figure class="captioned-image">
    <img class="captioned-image__image" :src="model.src" :alt="model.alt" />
    <figcaption class="captioned-image__caption" v-if="model.caption" v-html="model.caption"></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['model']
};
</script>

<style lang="scss">
  .captioned-image__image {
    display: block;
    width: 100%;
    margin-bottom: 1em;
  }
</style>
