import Vuex from 'vuex';
import { getArticleStubs } from '~/services/wordpress';

const createStore = () => {
  return new Vuex.Store({
    state: {
      articleStubs: [],
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
          subnavItems: [
            {
              title: 'Burkitt',
              url: '/cancer/burkitt'
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
      }
    },
    mutations: {
      setArticleStubs(state, value) {
        state.articleStubs = value;
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
