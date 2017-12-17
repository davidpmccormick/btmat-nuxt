<template>
  <div class="pagination">
    <nuxt-link class="pagination__link" v-if="currentPage < totalPages" :to="olderPageNumberLink">Older</nuxt-link>
    <p class="pagination__info">Page {{ currentPage }} of {{ totalPages }}</p>
    <nuxt-link class="pagination__link" v-if="currentPage > 1" :to="newerPageNumberLink">Newer</nuxt-link>
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

      return `/${year || 'news'}/page/${nextPage}`;
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
  }
};
</script>

<style lang="scss">
  .pagination {
    font-family: 'proxima-soft';
    display: flex;
  }

  .pagination__link,
  .pagination__info {
    margin-right: 1em;
  }

  .pagination__link {
    color: inherit;
    transition: color 600ms ease;

    &:hover,
    &:focus {
      color: #4cb685;
    }
  }
</style>
