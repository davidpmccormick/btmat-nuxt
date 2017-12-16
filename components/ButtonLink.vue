<template>
  <a :href="model.link" class="button-link">
    <Icon class="button-link__icon" v-if="model.icon" :name="model.icon" />
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

    &:hover,
    &:focus {
      background: rgba(#4cb685, 0.8);
    }
  }

  .button-link__icon {
    fill: white;
    margin-right: 0.3em;

    svg {
      margin-top: 0.3em;
      height: 1.4em;
    }
  }
</style>
