<template>
  <div>
    <h2>news</h2>
    <ul>
      <li v-for="article in model.articleStubs" :key="article.id">{{ article.title }}</li>
    </ul>
  </div>
</template>

<script>
import { getArticleStubs } from '~/services/wordpress';

export default {
  async asyncData() {
    const articleStubs = await getArticleStubs();

    return {
      model: {
        articleStubs
      }
    };
  }
};
</script>
