<template>
  <div>
    <p>Page <input @keyup.enter="handleEnter" type="number" :value="currentPage" /> of {{ totalPages }}</p>
    <nuxt-link v-if="currentPage < totalPages" :to="olderPageNumberLink">Older</nuxt-link>
    <nuxt-link v-if="currentPage > 1" :to="newerPageNumberLink">Newer</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'totalPages',
      'currentPage'
    ]),
    olderPageNumberLink() {
      const year = this.$route.params.year;
      const nextPage = this.currentPage + 1;

      if (year) {
        return `/${year}/page/${nextPage}`;
      } else {
        return `/news/page/${nextPage}`;
      }
    },
    newerPageNumberLink() {
      const year = this.$route.params.year;
      const prevPage = this.currentPage - 1;

      if (year) {
        return this.currentPage === 2 ? `/${year}` : `/${year}/page/${prevPage}`;
      } else {
        return this.currentPage === 2 ? '/news' : `/news/page/${prevPage}`;
      }
    }
  },
  methods: {
    handleEnter(event) {
      const pageNumber = Number(event.target.value);
      const year = this.$route.params.year;

      if (!pageNumber || pageNumber > this.totalPages || pageNumber < 1) return;

      if (year) {
        this.$router.push({name: 'year-page-pageNumber', params: {pageNumber, year}});
      } else {
        this.$router.push({name: 'news-page-pageNumber', params: {pageNumber}});
      }
    }
  }
};
</script>
