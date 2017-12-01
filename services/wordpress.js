import axios from 'axios';

const baseUrl = 'http://btmat.org.uk/wp-json/wp/v2/';

export async function getArticleStubs(query = {}) {
  const articleStubFields = 'id,title.rendered,slug,author,excerpt.rendered,date';
  const options = Object.assign(query, {fields: articleStubFields});
  const { data, headers, config } = await axios.get(`${baseUrl}posts`, options);
  const totalArticles = headers['x-wp-total'];
  const totalPages = headers['x-wp-totalpages'];
  const currentPage = config.page || 1;

  const articleStubs = data.map((article) => {
    return article;
  });

  return {
    articleStubs,
    totalArticles,
    totalPages,
    currentPage
  };
}
