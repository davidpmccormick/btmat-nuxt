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
  top: 70px;
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

  @media (min-width: 680px) {
    position: sticky;
  }

  &:hover,
  &:focus {
    background: rgba(#4cb685, 0.8);
  }

  &.button-link--clear-subnav {
    top: 110px;
  }

  &.button-link--in-card {
    background: white;
    margin-top: 2rem;
    color: #4cb685;

    @media (min-width: 680px) {
      position: static;
    }
  }
}

</style>
