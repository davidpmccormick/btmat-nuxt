<template>
  <div>
    <h2 v-if="search">Search: {{ search }}</h2>
    <h2 v-else>News<span v-if="$route.params.year"> from {{ $route.params.year }}</span></h2>
    <TwoColumns>
      <template slot="primary">
        <ul>
          <NewsPromo v-for="article in articleStubs"
            :key="article.id"
            :model="article" />
        </ul>
        <Pagination />
      </template>
      <template slot="secondary">
        <Archive />
        <Search />
        <ButtonLink />
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import Archive from '~/components/Archive';
import ButtonLink from '~/components/ButtonLink';
import NewsPromo from '~/components/NewsPromo';
import Pagination from '~/components/Pagination';
import Search from '~/components/Search';
import TwoColumns from '~/components/TwoColumns';

export default {
  props: ['articleStubs'],
  components: {
    Archive,
    ButtonLink,
    NewsPromo,
    Pagination,
    Search,
    TwoColumns
  },
  computed: {
    search() {
      return this.$route.query.search;
    }
  }
};
</script>
