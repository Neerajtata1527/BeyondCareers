document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  if (faders.length === 0) {
    console.warn("No .fade-in elements found.");
  }

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".fade-slide");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  sliders.forEach(slide => {
    appearOnScroll.observe(slide);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const zooms = document.querySelectorAll(".fade-zoom");

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

  zooms.forEach(el => zoomObserver.observe(el));
});
