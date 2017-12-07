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
const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];

export default {
  data() {
    return {
      years
    };
  }
};
</script>

<style>

</style>
