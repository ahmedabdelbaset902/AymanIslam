// Shared layout (navbar/footer), WhatsApp, counters, back-to-top.
(() => {
  const root = document.body.dataset.root || "", S = window.SITE;
  const socials = [["facebook","Facebook"],["instagram","Instagram"],["youtube","YouTube"]].filter(([k]) => S.social[k] && S.social[k] !== "#")
    .map(([k,n]) => `<a class="me-3" href="${S.social[k]}" target="_blank" rel="noopener" aria-label="${n}"><i class="bi bi-${k}"></i></a>`).join("");
  const links = [["index.html","Home"],["pages/about.html","About"],["pages/programs.html","Programs"],["pages/nutrition.html","Nutrition"],["pages/pricing.html","Pricing"],["pages/success-stories.html","Results"],["pages/faq.html","FAQ"],["pages/contact.html","Contact"]];
  const here = location.pathname.split("/").pop() || "index.html";
  const nav = links.map(([h,t]) => `<li class="nav-item"><a class="nav-link ${h.endsWith(here)?'active':''}" href="${root}${h}">${t}</a></li>`).join("");
  const logo = `${root}assets/images/general/logo.webp`;
  document.body.insertAdjacentHTML("afterbegin", `<nav class="navbar navbar-expand-lg fixed-top" id="nav"><div class="container">
   <a class="navbar-brand" href="${root}index.html"><img src="${logo}" alt="">${S.brand}</a>
   <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Menu"><span class="navbar-toggler-icon"></span></button>
   <div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav mx-auto">${nav}</ul>
   <button class="btn btn-out py-2 px-3 mx-lg-2 my-2 my-lg-0" id="langBtn" type="button" aria-label="Language"></button><button class="btn btn-acc" data-wa>Start Your Journey</button></div></div></nav>`);
  document.body.insertAdjacentHTML("beforeend", `<footer><div class="container"><div class="row g-4">
   <div class="col-md-5"><h3><img src="${logo}" alt="" height="40"> ${S.brand}</h3><p class="mut">Personal training and coaching built around you. Stronger. Fitter. Healthier. (Placeholder text)</p></div>
   <div class="col-md-3"><h4 class="h6">Links</h4>${links.slice(1,7).map(([h,t])=>`<div><a href="${root}${h}">${t}</a></div>`).join("")}</div>
   <div class="col-md-4"><h4 class="h6">Contact</h4><div class="mut"><a href="tel:+${S.phone}" dir="ltr">${S.phoneDisplay}</a>${S.email ? "<br>" + S.email : ""}</div>
   <div class="fs-4 mt-2">${socials}</div></div></div>
   <hr class="border-secondary"><p class="mut small mb-0">© ${new Date().getFullYear()} Ahmed Abdelbaset All rights reserved.</p></div></footer>
   <button class="btn btn-acc" id="toTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>
   <button class="wa-float" data-wa aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></button>`);
  const navEl = document.getElementById("nav"), top = document.getElementById("toTop");
  const onScroll = () => { navEl.classList.toggle("solid", scrollY > 40); top.style.display = scrollY > 600 ? "block" : "none"; };
  addEventListener("scroll", onScroll, {passive:true}); onScroll();
  top.addEventListener("click", () => scrollTo({top:0}));
  // WhatsApp: any [data-wa] element (its value = custom message)
  window.openWhatsApp = msg => window.open(`https://wa.me/${S.phone}?text=${encodeURIComponent(msg || S.defaultMsg)}`, "_blank", "noopener");
  document.addEventListener("click", e => { const b = e.target.closest("[data-wa]"); if (b) { e.preventDefault(); openWhatsApp(b.dataset.wa); } });
  // Pricing cards from SITE.plans (Home + Pricing pages)
  const plansEl = document.getElementById("plans");
  if (plansEl) plansEl.innerHTML = S.plans.map(p => `<div class="col-md-4"><div class="card-x ${p.recommended ? "rec" : ""}">${p.recommended ? '<span class="badge bg-danger mb-2">Recommended</span>' : ""}<h3 class="h3">${p.name}</h3><div class="price">${p.price} <small class="fs-6 mut">EGP / month</small></div><ul class="list-unstyled my-3">${p.features.map(f => `<li><i class="bi bi-check2 acc"></i> ${f}</li>`).join("")}</ul><button class="btn btn-acc w-100" data-wa="Hi Coach Ayman, I'd like to subscribe to the ${p.name} package.">Subscribe on WhatsApp</button></div></div>`).join("");
  // Animated counters
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; io.unobserve(en.target);
    const el = en.target, end = +el.dataset.count, t0 = performance.now();
    const step = t => { const p = Math.min((t - t0) / 1500, 1); el.textContent = Math.round(end * p).toLocaleString("en") + (p === 1 ? "+" : ""); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), {threshold:.5});
  document.querySelectorAll("[data-count]").forEach(el => io.observe(el));
})();
