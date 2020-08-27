export default function(to, from, savedPosition) {
  const DESKTOP_NAV_HEIGHT = 81;
  const MAX_MOBILE_NAV = 790;
  const scrollPosition = window.pageYOffset;
  const viewportWidth = window.innerWidth;

  return new Promise(resolve => {
    this.app.$once('triggerScroll', () => {
      resolve({
        x: 0,
        y:
          scrollPosition >= DESKTOP_NAV_HEIGHT &&
          viewportWidth >= MAX_MOBILE_NAV
            ? DESKTOP_NAV_HEIGHT
            : 0
      });
    });
  });
}
