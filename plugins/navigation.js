export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    store.commit('setActiveRoute', to.name);
    store.commit('setIsMobileNavShown', false);
  });
};
