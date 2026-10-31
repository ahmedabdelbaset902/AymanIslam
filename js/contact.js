// Client-side validation; on success opens WhatsApp (nothing is stored or sent to a server).
const f = document.getElementById("contactForm");
f.addEventListener("submit", e => {
  e.preventDefault();
  const v = n => f.elements[n].value.trim(), errs = {};
  if (v("name").length < 3) errs.name = "Enter your full name.";
  if (!/^[+]?[0-9\s-]{8,15}$/.test(v("phone"))) errs.phone = "Enter a valid phone number (8–15 digits).";
  if (v("email") && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("email"))) errs.email = "Enter a valid email address.";
  if (v("message").length < 5) errs.message = "Write a short message.";
  f.querySelectorAll("[data-err]").forEach(el => el.textContent = errs[el.dataset.err] || "");
  const out = document.getElementById("formStatus");
  if (Object.keys(errs).length) { out.className = "invalid-msg"; out.textContent = "Please fix the highlighted fields."; return; }
  out.className = "acc"; out.textContent = "Opening WhatsApp to send your message.";
  openWhatsApp(`Name: ${v("name")}\nPhone: ${v("phone")}\nEmail: ${v("email") || "-"}\nProgram: ${v("program")}\n${v("message")}`);
});
