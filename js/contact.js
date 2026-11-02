// Client-side validation (EN/AR); on success opens WhatsApp. Nothing is stored or sent to a server.
const f = document.getElementById("contactForm");
const T = {
  name:["Enter your full name.","اكتب اسمك الكامل."], phone:["Enter a valid phone number (8–15 digits).","اكتب رقم هاتف صحيح (8–15 رقم)."],
  email:["Enter a valid email address.","صيغة البريد الإلكتروني غير صحيحة."], message:["Write a short message.","اكتب رسالتك."],
  fix:["Please fix the highlighted fields.","راجع الحقول المطلوبة."], ok:["Opening WhatsApp to send your message.","جاري فتح واتساب لإرسال رسالتك."],
  labels:[["Name","Phone","Email","Program"],["الاسم","الهاتف","البريد","البرنامج"]]
};
f.addEventListener("submit", e => {
  e.preventDefault();
  const i = document.documentElement.lang === "ar" ? 1 : 0;
  const v = n => f.elements[n].value.trim(), errs = {};
  if (v("name").length < 3) errs.name = T.name[i];
  if (!/^[+]?[0-9\s-]{8,15}$/.test(v("phone"))) errs.phone = T.phone[i];
  if (v("email") && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("email"))) errs.email = T.email[i];
  if (v("message").length < 5) errs.message = T.message[i];
  f.querySelectorAll("[data-err]").forEach(el => el.textContent = errs[el.dataset.err] || "");
  const out = document.getElementById("formStatus");
  if (Object.keys(errs).length) { out.className = "invalid-msg"; out.textContent = T.fix[i]; return; }
  out.className = "acc"; out.textContent = T.ok[i];
  const [a, b, c, d] = T.labels[i];
  openWhatsApp(`${a}: ${v("name")}\n${b}: ${v("phone")}\n${c}: ${v("email") || "-"}\n${d}: ${v("program")}\n${v("message")}`);
});
