<template>
  <nav class="archive">
    <h2 class="archive__heading">
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
const startYear = 2011;
const currentYear = new Date().getFullYear();
const years = range(startYear, currentYear + 1).reverse();

export default {
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
  margin-bottom: 2rem;
}

.archive__heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.archive__link {
  display: block;
  color: inherit;
  font-family: $f-sans;
  font-size: 1rem;
  padding: 0.5em 0;
  border-bottom: 1px solid $c-keyline;
  text-decoration: none;
  transition: color $ease;

  &:hover,
  &:focus,
  &.nuxt-link-active {
    color: $c-green;
  }
}
</style>
