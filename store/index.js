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
          routesHandled: ['index']
        }, {
          title: 'News',
          url: '/news',
          routesHandled: ['news', 'year-month-pageSlug']
        }, {
          title: 'Cancer',
          url: '/cancer/burkitt',
          subnavPath: '/cancer/',
          routesHandled: ['cancer-burkitt', 'cancer-research'],
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
          routesHandled: ['hostpitals']
        }, {
          title: 'Gallery',
          url: '#',
          routesHandled: ['gallery']
        }, {
          title: 'Press',
          url: '#',
          routesHandled: ['press']
        }, {
          title: 'About',
          url: '#',
          routesHandled: ['about']
        }, {
          title: 'Support',
          url: '#',
          routesHandled: ['support']
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
