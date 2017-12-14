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
    border-left: 4px solid grey;
    font-size: 1.5rem;
    padding-left: 1em;
    margin-bottom: 1.4em;
  }
</style>
