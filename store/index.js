import {
  getArticleStubs,
  getArticleBySlug,
  getPageById,
  getPostById
} from '~/services/wordpress';

export const state = () => ({
  fontsLoaded: false,
  researchProjects: null,
  newProjects: null,
  publicationsAndAbstracts: null,
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
    },
    {
      title: 'News',
      url: '/news',
      routesHandled: [
        'news',
        'year-month-pageSlug',
        'year',
        'news-page-pageNumber',
        'year-page-pageNumber'
      ]
    },
    {
      title: 'Cancer',
      url: '/cancer/burkitt',
      subnavPath: '/cancer/',
      routesHandled: ['cancer-pageSlug', 'cancer-research'],
      subnavItems: [
        {
          title: 'Burkitt',
          url: '/cancer/burkitt'
        },
        {
          title: 'Research',
          url: '/cancer/research'
        },
        {
          title: 'Follow up',
          url: '/cancer/follow-up'
        },
        {
          title: 'Future',
          url: '/cancer/future'
        },
        {
          title: 'Other cancers',
          url: '/cancer/other-cancers'
        },
        {
          title: 'Costs',
          url: '/cancer/diagnostic-and-treatment-costs'
        }
      ]
    },
    {
      title: 'Hospitals',
      url: '/hospitals',
      routesHandled: ['hospitals']
    },
    {
      title: 'Gallery',
      url: '/gallery',
      routesHandled: ['gallery']
    },
    {
      title: 'Press',
      url: '/press',
      routesHandled: ['press']
    },
    {
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
          url: '/about/beryl-thyer-memorial-africa-trust-btmat'
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
    },
    {
      title: 'Support',
      url: '/support/donate',
      routesHandled: ['support-pageSlug'],
      subnavPath: '/support/',
      subnavItems: [
        {
          title: 'Donate',
          url: '/support/donate'
        },
        {
          title: 'Work with us',
          url: '/support/work-with-us'
        }
      ]
    }
  ]
});

export const actions = {
  async getArticleStubs({ commit }, data = {}) {
    const query = data.query || {};
    const categories = data.categories || 1;
    const queryWithPage = query.page ? query : { ...query, page: 1 };
    const { articleStubs, totalPages, currentPage } = await getArticleStubs(
      queryWithPage,
      categories
    );

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
  },
  async getPostById({ commit }, id) {
    const post = await getPostById(id);

    commit('setPage', post);
  },
  async getResearch({ commit }, id) {
    const researchProjectsPromise = getArticleStubs({ per_page: 50 }, 4);
    const newProjectsPromise = getArticleStubs({ per_page: 50 }, 7);
    const publicationsAndAbstractsPromise = getArticleStubs(
      { per_page: 50 },
      6
    );
    const [
      researchProjects,
      newProjects,
      publicationsAndAbstracts
    ] = await Promise.all([
      researchProjectsPromise,
      newProjectsPromise,
      publicationsAndAbstractsPromise
    ]);

    commit('setResearchProjects', researchProjects);
    commit('setNewProjects', newProjects);
    commit('setPublicationsAndAbstracts', publicationsAndAbstracts);
  }
};

export const mutations = {
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
  },
  setResearchProjects(state, value) {
    state.researchProjects = value;
  },
  setNewProjects(state, value) {
    state.newProjects = value;
  },
  setPublicationsAndAbstracts(state, value) {
    state.publicationsAndAbstracts = value;
  },
  setFontsLoaded(state) {
    state.fontsLoaded = true;
  }
};
