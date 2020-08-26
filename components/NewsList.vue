<template>
  <div>
    <h2>News<span v-if="$route.params.year"> from {{ $route.params.year }}</span></h2>
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
import TwoColumns from '~/components/TwoColumns';

export default {
  props: ['articleStubs'],
  components: {
    Archive,
    ButtonLink,
    NewsPromo,
    Pagination,
    TwoColumns
  },
};
</script>
