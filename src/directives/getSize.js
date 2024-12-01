const onResize = {
  mounted(el, { value: callback }) {
    const resizeObserver = new ResizeObserver(() => {
      if (typeof callback === "function") {
        callback(el.getBoundingClientRect());
      }
    });
    resizeObserver.observe(el);
    el._resizeObserver = resizeObserver;
  },
  unmounted(el) {
    if (el._resizeObserver) {
      el._resizeObserver.unobserve(el);
      delete el._resizeObserver;
    }
  },
};

export default onResize;
