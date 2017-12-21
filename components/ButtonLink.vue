<template>
  <a :href="model.link" class="button-link">
    <span>{{ model.text }}</span>
  </a>
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
  .button-link {
    position: sticky;
    top: 80px;
    text-decoration: none;
    color: white;
    background: #4cb685;
    font-family: 'proxima-soft';
    padding: 0.8em;
    display: flex;
    align-items: center;
    border-radius: 6px;
    transition: background 600ms ease;
    text-align: center;
    display: block;

    &:hover,
    &:focus {
      background: rgba(#4cb685, 0.8);
    }
  }
</style>
