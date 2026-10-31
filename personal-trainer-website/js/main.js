(() => {
  const cfg = window.SITE_CONFIG;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // WhatsApp click-to-chat: any element with data-wa (optional custom message as value)
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      const msg = el.dataset.wa || cfg.defaultMessage;
      window.open(`https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    });
  });

  // Navbar turns solid on scroll; back-to-top visibility
  const nav = document.querySelector(".site-nav");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    nav.classList.toggle("is-solid", scrollY > 40);
    toTop.classList.toggle("show", scrollY > 600);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));

  // Close mobile menu after choosing a link
  const menu = document.getElementById("menu");
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    if (menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }));

  // Active link highlighting
  const links = [...menu.querySelectorAll(".nav-link")];
  const spy = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

  // Animated counters (run once when visible)
  const count = el => {
    const end = +el.dataset.count, t0 = performance.now(), d = reduce ? 1 : 1400;
    const tick = t => {
      const p = Math.min((t - t0) / d, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString("en");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { count(e.target); co.unobserve(e.target); }
  }), { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(el => co.observe(el));
})();
