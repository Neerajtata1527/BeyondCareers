document.addEventListener("DOMContentLoaded", () => {
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  const zoomObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });

  const observeAll = (selector, observer, warnMsg) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0 && warnMsg) {
      console.warn(warnMsg);
    }
    elements.forEach(el => observer.observe(el));
  };

  observeAll(".fade-in", fadeObserver, "No .fade-in elements found.");
  observeAll(".fade-slide", fadeObserver);
  observeAll(".fade-zoom", zoomObserver);
});
