import axios from 'axios';
import wrapper from 'axios-cache-plugin';
import { bodyParser } from '../utils/body-parser';

const baseUrl = 'https://api.btmat.org.uk/wp-json/wp/v2';

const http = wrapper(axios, {
  maxCacheSize: 100
});
http.__addFilter(/.*/); // Cache everything

export async function getArticleStubs(query = {}, categories = 1) {
  const articleStubFields = 'id,title.rendered,slug,excerpt.rendered,date,better_featured_image';
  const params = Object.assign(query, {fields: articleStubFields, categories: categories});

  const { data, headers, config } = await http({
    url: `${baseUrl}/posts`,
    method: 'get',
    params
  });
  const totalArticles = headers['x-wp-total'];
  const totalPages = headers['x-wp-totalpages'];
  const currentPage = Number(config.params.page) || 1;

  const articleStubs = data.map((article) => {
    const year = article.date.slice(0, 4);
    const month = article.date.slice(5, 7);
    const date = article.date.slice(8, 10);

    return {
      id: article.id,
      title: article.title && article.title.rendered,
      slug: article.slug,
      excerpt: article.excerpt && `${article.excerpt.rendered.slice(0, -16)}&hellip;</p>`,
      year: year,
      month: month,
      date: date,
      featuredMedia: article.better_featured_image
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
  const { data } = await http({
    url: `${baseUrl}/posts`,
    method: 'get',
    params
  });
  const article = data[0];
  const components = bodyParser(article.content.rendered);
  const relatedArticles = article['jetpack-related-posts'].map(a => {
    const fullDate = new Date(a.date);
    const year = fullDate.getFullYear();
    const month = (fullDate.getMonth() + 1).toString();
    const paddedMonth = month.length < 2 ? `0${month}` : month;
    const date = fullDate.getDate();
    const splitUrl = a.url.split('/');
    const slug = splitUrl[splitUrl.length - 2];

    return {
      title: a.title,
      excerpt: a.excerpt,
      slug: slug,
      year: year,
      month: paddedMonth,
      date: date
    };
  });

  return {
    title: article.title.rendered,
    components: components,
    year: article.date.slice(0, 4),
    month: article.date.slice(5, 7),
    date: article.date.slice(8, 10),
    relatedArticles: relatedArticles
  };
}

export async function getPageById(id) {
  const page = await http({
    url: `${baseUrl}/pages/${id}`,
    method: 'get'
  });

  const components = bodyParser(page.data.content.rendered);

  return {
    title: page.data.title.rendered,
    components: components
  };
}

export async function getPostById(id) {
  const post = await http({
    url: `${baseUrl}/posts/${id}`,
    method: 'get'
  });

  const components = bodyParser(post.data.content.rendered);

  return {
    title: post.data.title.rendered,
    components: components
  };
}
