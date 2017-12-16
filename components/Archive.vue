<template>
  <nav class="archive">
    <h2 class="archive__heading">
      <Icon name="archive" />
      <span>Archive</span>
    </h2>
    <ul class="archive__list">
      <li class="archive__item" v-for="year in years" :key="year">
        <nuxt-link class="archive__link" :to="'/' + year">{{ year }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Icon from '~/components/Icon';

const startYear = 2011;
const currentYear = new Date().getFullYear();
const years = range(startYear, currentYear + 1).reverse();

export default {
  components: {
    Icon
  },
  data() {
    return {
      years
    };
  }
};

function range(start, end) {
  return Array.from({length: (end - start)}, (v, k) => k + start);
}
</script>

<style lang="scss">
.archive {
  padding-top: 1rem;
  margin-bottom: 3rem;
}

.archive__heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  svg {
    height: 1.4em;
    position: relative;
    top: 0.15em;
    margin-right: 0.2em;
    z-index: -1;

  }
}

.archive__link {
  display: block;
  color: inherit;
  font-family: "proxima-soft";
  font-size: 1rem;
  padding: 0.5em 0;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  transition: color 600ms ease;

  &:hover,
  &:focus,
  &.nuxt-link-active {
    color: #4cb685;
  }
}
</style>
