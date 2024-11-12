export const commonMixin = {
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
  },
};
