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
      // TODO: handle if we're in the year archive
      return `/news/page/${this.currentPage + 1}`;
    },
    newerPageNumberLink() {
      return this.currentPage === 2 ? '/news' : `/news/page/${this.currentPage - 1}`;
    }
  },
  methods: {
    handleEnter(event) {
      const pageNumber = Number(event.target.value);

      if (!pageNumber || pageNumber > this.totalPages || pageNumber < 1) return;

      this.$router.push({name: 'news-page-pageNumber', params: {pageNumber}});
    }
  }
};
</script>

<style>

</style>
