<template>
  <nav class="archive">
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
const years = range(startYear, currentYear + 1);

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
.archive__link {
  display: block;
  color: inherit;
  font-family: "proxima-soft";
  font-size: 1.3em;
  padding: 0.8em 0;
  border-bottom: 1px solid #eee;
  text-decoration: none;
}
</style>
