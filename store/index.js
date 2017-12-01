import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      articleStubs: [],
      totalArticles: null,
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
    mutations: {
      setArticleStubs(state, value) {
        state.articleStubs = value;
      },
      setTotalArticles(state, value) {
        state.totalArticles = value;
      },
      setTotalPages(state, value) {
        state.totalPages = value;
      },
      setCurrentPage(state, value) {
        state.currentPage = value;
      }
    }
  });
};

export default createStore;
