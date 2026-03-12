document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.getElementById("site-nav");
  const revealNodes = document.querySelectorAll(".reveal");
  const sectionLinks = document.querySelectorAll('.site-nav__link[href^="#"], .site-nav__link[href*="#"]');
  const homeSections = Array.from(document.querySelectorAll("main section[id]"));

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (revealNodes.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
  }

  if (homeSections.length && sectionLinks.length) {
    const linkMap = new Map();
    sectionLinks.forEach((link) => {
      const hash = link.getAttribute("href")?.split("#")[1];
      if (hash) linkMap.set(hash, link);
    });

    const setActiveLink = (id) => {
      sectionLinks.forEach((link) => link.classList.remove("is-active"));
      const current = linkMap.get(id);
      if (current) current.classList.add("is-active");
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveLink(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -55% 0px" }
    );

    homeSections.forEach((section) => sectionObserver.observe(section));
  }
});
