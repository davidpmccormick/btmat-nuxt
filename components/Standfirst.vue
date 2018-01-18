<template>
  <div class="standfirst" v-html="model.html"></div>
</template>

<script>
export default {
  props: ['model']
};
</script>

<style lang="scss">
  .standfirst {
    border-left: 3px solid $c-green;
    font-size: 1.3rem;
    padding-left: 1em;
    margin-bottom: 1.4em;

    @media(min-width: 500px) {
      font-size: 1.5rem;
    }
  }
</style>
