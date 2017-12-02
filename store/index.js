import Vuex from 'vuex';
import {
  getArticleStubs,
  getArticleBySlug
} from '~/services/wordpress';

const createStore = () => {
  return new Vuex.Store({
    state: {
      articleStubs: [],
      article: null,
      totalPages: null,
      currentPage: null,
      navItems: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'News',
          url: '/news'
        },
        {
          title: 'Cancer',
          url: '/cancer/burkitt',
          subnavPath: '/cancer/',
          subnavItems: [
            {
              title: 'Burkitt',
              url: '/cancer/burkitt',
              parent: 'cancer'
            },
            {
              title: 'Research',
              url: '/cancer/research'
            }
          ]
        }
      ]
    },
    actions: {
      async getArticleStubs({ commit }, page = 1) {
        const {
          articleStubs,
          totalPages,
          currentPage
        } = await getArticleStubs({page});

        commit('setCurrentPage', currentPage);
        commit('setTotalPages', totalPages);
        commit('setArticleStubs', articleStubs);
      },
      async getArticleBySlug({ commit }, slug) {
        const article = await getArticleBySlug(slug);

        commit('setArticle', article);
      }
    },
    mutations: {
      setArticleStubs(state, value) {
        state.articleStubs = value;
      },
      setArticle(state, value) {
        state.article = value;
      },
      setTotalPages(state, value) {
        state.totalPages = Number(value);
      },
      setCurrentPage(state, value) {
        state.currentPage = Number(value);
      }
    }
  });
};

export default createStore;
