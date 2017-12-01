<template>
  <div>
    <p>Page {{ currentPage }} of {{ totalPages }}</p>
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
      return `/news/page/${this.currentPage + 1}`;
    },
    newerPageNumberLink() {
      return this.currentPage === 2 ? '/news' : `/news/page/${this.currentPage - 1}`;
    }
  }
};
</script>

<style>

</style>
