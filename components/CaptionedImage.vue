<template>
  <figure class="captioned-image">
    <img class="captioned-image__image" :src="model.src" :alt="model.alt" />
    <figcaption class="captioned-image__caption" v-if="model.caption">
      <Icon name="Image" />
      <span v-html="model.caption"></span>
    </figcaption>
  </figure>
</template>

<script>
import Icon from '~/components/Icon';

export default {
  components: {
    Icon
  },
  props: ['model']
};
</script>

<style lang="scss">
  .captioned-image__image {
    display: block;
    width: 100%;
    margin-bottom: 1em;
  }

  .captioned-image__caption {
    display: flex;
    align-items: flex-start;
    font-family: $f-sans;
    font-size: 1rem;

    .icon svg {
      height: 2em;
      top: -0.1em;
      margin-right: 0.3em;
    }
  }
</style>
