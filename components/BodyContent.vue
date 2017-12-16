<template>
  <div class="body-content" v-html="model"></div>
</template>

<script>
export default {
  props: ['model']
};
</script>

<style lang="scss">
.body-content {
  a {
    color: inherit;
    text-decoration-skip: ink;
    transition: color 600ms ease;

    &:hover,
    &:focus {
      color: #4cb685;
    }
  }
}
</style>
