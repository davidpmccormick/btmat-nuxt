<template>
  <div class="standfirst" v-html="model.html"></div>
</template>

<script>
export default {
  props: ['model']
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

  .standfirst {
    border-left: 3px solid $c-green;
    font-size: 1.3rem;
    padding-left: 1em;
    margin-bottom: 1.4em;

    a {
      color: inherit;
      transition: color $ease;

      &:hover,
      &:focus {
        color: $c-green;
      }
    }

    @media (min-width: $b-medium) {
      font-size: 1.5rem;
    }
  }
</style>
