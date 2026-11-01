// Category filter for program cards
const btns = document.querySelectorAll("[data-filter]");
btns.forEach(b => b.addEventListener("click", () => {
  btns.forEach(x => { x.classList.remove("btn-acc"); x.classList.add("btn-out"); }); b.classList.remove("btn-out"); b.classList.add("btn-acc");
  document.querySelectorAll("[data-cat]").forEach(c => { c.hidden = b.dataset.filter !== "all" && c.dataset.cat !== b.dataset.filter; });
}));
