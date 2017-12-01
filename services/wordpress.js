import axios from 'axios';

const baseUrl = 'http://btmat.org.uk/wp-json/wp/v2/';

export async function getArticleStubs(query = {}) {
  const articleStubFields = 'id,title.rendered,slug,author,excerpt.rendered,date';
  const { data } = await axios.get(`${baseUrl}posts`, (Object.assign(query, {fields: articleStubFields})));

  const articleStubs = data
    .map((article) => {
      return article;
    });

  return articleStubs;
}
