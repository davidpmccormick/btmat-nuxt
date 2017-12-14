import axios from 'axios';
import { bodyParser } from '../utils/body-parser';

const baseUrl = 'http://btmat.org.uk/wp-json/wp/v2';

export async function getArticleStubs(query = {}) {
  const articleStubFields = 'id,title.rendered,slug,excerpt.rendered,date';
  const params = Object.assign(query, {fields: articleStubFields, categories: 1});
  const { data, headers, config } = await axios.get(`${baseUrl}/posts`, {params});
  const totalArticles = headers['x-wp-total'];
  const totalPages = headers['x-wp-totalpages'];
  const currentPage = Number(config.params.page) || 1;

  const articleStubs = data.map((article) => {
    const year = article.date.slice(0, 4);
    const month = article.date.slice(5, 7);

    return {
      id: article.id,
      title: article.title && article.title.rendered,
      slug: article.slug,
      excerpt: article.excerpt && article.excerpt.rendered,
      year: year,
      month: month
    };
  });

  return {
    articleStubs,
    totalArticles,
    totalPages,
    currentPage
  };
}

export async function getArticleBySlug(slug) {
  const params = {slug};
  const { data } = await axios.get(`${baseUrl}/posts`, {params});
  const article = data[0];
  const components = bodyParser(article.content.rendered);

  return {
    title: article.title.rendered,
    components: components,
    year: article.date.slice(0, 4),
    month: article.date.slice(5, 7),
    day: article.date.slice(8, 10)
  };
}
