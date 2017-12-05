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
      activeRoute: null,
      navItems: [
        {
          title: 'Home',
          url: '/',
          name: 'index'
        }, {
          title: 'News',
          url: '/news',
          name: 'news'
        }, {
          title: 'Cancer',
          url: '/cancer/burkitt',
          subnavPath: '/cancer/',
          name: 'cancer',
          subnavItems: [
            {
              title: 'Burkitt',
              url: '/cancer/burkitt',
              parent: 'cancer',
              name: 'cancer-burkitt'
            }, {
              title: 'Research',
              url: '/cancer/research',
              name: 'cancer-research'
            }
          ]
        }, {
          title: 'Hospitals',
          url: '#',
          name: 'hospitals'
        }, {
          title: 'Gallery',
          url: '#',
          name: 'gallery'
        }, {
          title: 'Press',
          url: '#',
          name: 'press'
        }, {
          title: 'About',
          url: '#',
          name: 'about'
        }, {
          title: 'Support',
          url: '#',
          name: 'support'
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
      },
      setNavItems(state, value) {
        state.navItems = value;
      },
      setActiveRoute(state, value) {
        state.activeRoute = value;
      }
    }
  });
};

export default createStore;
