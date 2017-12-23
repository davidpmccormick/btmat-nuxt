import Vuex from 'vuex';
import {
  getArticleStubs,
  getArticleBySlug,
  getPageById
} from '~/services/wordpress';

const createStore = () => {
  return new Vuex.Store({
    state: {
      isMobileNavShown: false,
      articleStubs: [],
      article: null,
      page: null,
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
          routesHandled: [
            'news',
            'year-month-pageSlug',
            'year',
            'news-page-pageNumber',
            'year-page-pageNumber'
          ]
        }, {
          title: 'Cancer',
          url: '/cancer/burkitt',
          subnavPath: '/cancer/',
          routesHandled: ['cancer-pageSlug'],
          subnavItems: [
            {
              title: 'Burkitt',
              url: '/cancer/burkitt'
            }, {
              title: 'Research',
              url: '/cancer/research'
            }, {
              title: 'Follow up',
              url: '/cancer/follow-up'
            }, {
              title: 'Future',
              url: '/cancer/future'
            }, {
              title: 'Other cancers',
              url: '/cancer/other-cancers'
            }, {
              title: 'Costs',
              url: '/cancer/diagnostic-and-treatment-costs'
            }
          ]
        }, {
          title: 'Hospitals',
          url: '/hospitals',
          routesHandled: ['hospitals']
        }, {
          title: 'Gallery',
          url: '/gallery',
          routesHandled: ['gallery']
        }, {
          title: 'Press',
          url: '/press',
          routesHandled: ['press']
        }, {
          title: 'About',
          url: '/about/our-work',
          routesHandled: ['about-pageSlug'],
          subnavPath: '/about/',
          subnavItems: [
            {
              title: 'Our work',
              url: '/about/our-work'
            },
            {
              title: 'The trust',
              url: '/about/the-trust'
            },
            {
              title: 'Founder',
              url: '/about/founder'
            },
            {
              title: 'Supporters',
              url: '/about/supporters'
            },
            {
              title: 'HQ',
              url: '/about/hq'
            },
            {
              title: 'South Africa',
              url: '/about/south-africa'
            }
          ]
        }, {
          title: 'Support',
          url: '/support/donate',
          routesHandled: ['support-pageSlug'],
          subnavPath: '/support/',
          subnavItems: [
            {
              title: 'Donate',
              url: '/support/donate'
            }, {
              title: 'Work with us',
              url: '/support/work-with-us'
            }
          ]
        }
      ]
    },
    actions: {
      async getArticleStubs({ commit }, query = {}) {
        const queryWithPage = query.page ? query : {...query, page: 1};
        const {
          articleStubs,
          totalPages,
          currentPage
        } = await getArticleStubs(queryWithPage);

        commit('setCurrentPage', currentPage);
        commit('setTotalPages', totalPages);
        commit('setArticleStubs', articleStubs);
      },
      async getArticleBySlug({ commit }, slug) {
        const article = await getArticleBySlug(slug);

        commit('setArticle', article);
      },
      async getPageById({ commit }, id) {
        const page = await getPageById(id);

        commit('setPage', page);
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
      },
      setPage(state, value) {
        state.page = value;
      },
      setIsMobileNavShown(state, value) {
        state.isMobileNavShown = value;
      }
    }
  });
};

export default createStore;
