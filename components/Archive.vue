<template>
  <nav>
    <ul>
      <li v-for="year in years" :key="year">
        <nuxt-link :to="'/' + year">{{ year }}</nuxt-link>
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
