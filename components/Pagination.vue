<template>
  <div class="pagination">
    <nuxt-link class="pagination__link" v-if="currentPage < totalPages" :to="olderPageNumberLink">Older</nuxt-link>

    <p v-if="totalPages" class="pagination__info">Page {{ currentPage }} of {{ totalPages }}</p>
    <p v-else class="pagination__info">No results</p>
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
    query() {
      const keys = Object.keys(this.$route.query);

      return keys.reduce((acc, curr, index) => {
        const isLast = (keys.length - 1 === index);

        return acc.concat(`${curr}=${this.$route.query[curr]}${isLast ? '' : '&'}`);
      }, ['?']).join('');
    },
    olderPageNumberLink() {
      const year = this.$route.params.year;
      const nextPage = this.currentPage + 1;

      return `/${year || 'news'}/page/${nextPage}${this.query}`;
    },
    newerPageNumberLink() {
      const year = this.$route.params.year;
      const prevPage = this.currentPage - 1;

      if (year) {
        return this.currentPage === 2 ? `/${year}${this.query}` : `/${year}/page/${prevPage}${this.query}`;
      } else {
        return this.currentPage === 2 ? `/news${this.query}` : `/news/page/${prevPage}${this.query}`;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

  .pagination {
    font-family: $f-sans;
    display: flex;
  }

  .pagination__link,
  .pagination__info {
    margin-right: 1em;
  }

  .pagination__link {
    color: inherit;
    transition: color $ease;

    &:hover,
    &:focus {
      color: $c-green;
    }
  }
</style>
