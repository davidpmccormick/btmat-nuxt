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
  font-size: 1.1rem;

  @media (min-width: 500px) {
    font-size: 1.3rem;
  }

  a {
    color: inherit;
    transition: color 600ms ease;

    &:hover,
    &:focus {
      color: #4cb685;
    }
  }

  table {
    font-family: 'proxima-soft';
    font-size: 1rem;
    width: 100%;

    tr {
      border-bottom: 1px solid #eee;
    }

    td {
      padding: 0.5em 0.5em 0.5em 0;

      &:last-child {
        padding-right: 0;
        text-align: right;
      }
    }
  }
}
</style>
