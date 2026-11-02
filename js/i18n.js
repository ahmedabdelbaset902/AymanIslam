// EN/AR language switcher. Loaded in <head> so direction + Bootstrap RTL are set before first paint.
// To translate a new string, add "English text": "Arabic text" to AR below.
(() => {
  const html = document.documentElement;
  let lang = "en";
  try { lang = localStorage.getItem("lang") || ((navigator.language || "").startsWith("ar") ? "ar" : "en"); } catch (e) {}
  const setDir = l => {
    html.lang = l; html.dir = l === "ar" ? "rtl" : "ltr";
    const bs = document.getElementById("bs");
    if (bs) bs.href = bs.href.replace(/bootstrap(\.rtl)?\.min\.css/, l === "ar" ? "bootstrap.rtl.min.css" : "bootstrap.min.css");
  };
  setDir(lang);

  const AR = {
    "Home":"الرئيسية","About":"عن الكوتش","Programs":"البرامج","Nutrition":"التغذية","Pricing":"الأسعار","Results":"النتائج","FAQ":"الأسئلة الشائعة","Contact":"تواصل معنا","Success Stories":"قصص النجاح",
    "Start Your Journey":"ابدأ رحلتك الآن","Menu":"القائمة","Back to top":"للأعلى","Previous":"السابق","Next":"التالي","Language":"اللغة",
    "Personal training and coaching built around you. Stronger. Fitter. Healthier. (Placeholder text)":"تدريب شخصي وإشراف كامل مبني حولك. أقوى. أنسب. أصح. (نص تجريبي)","Links":"روابط",
    "Ayman Islam Personal Training":"أيمن إسلام للتدريب الشخصي","Welcome to Iron":"مرحباً بك في IRON","Personal Training":"التدريب الشخصي","Train with":"تدرّب مع","Ayman Islam":"أيمن إسلام",
    "Stronger · Fitter · Healthier. Real plans, real coaching, real follow-up.":"أقوى · أنسب · أصح. خطط حقيقية، تدريب حقيقي، ومتابعة حقيقية.",
    "Start Training Now":"ابدأ التمرين الآن","Explore Programs":"اكتشف البرامج","Strength Training":"تمارين القوة","Muscle Building":"بناء العضلات","Fat Burning":"حرق الدهون","Better Health":"صحة أفضل",
    "Years of experience":"سنوات خبرة","Happy clients":"عميل سعيد","Transformations":"تحول ناجح","Training programs":"البرامج التدريبية",
    "Meet your coach":"تعرّف على الكوتش","Certified personal trainer with 10+ years of experience in muscle building, fat loss and conditioning. I build plans around your schedule and goals, then follow up every week. (Placeholder text)":"مدرب شخصي معتمد بخبرة أكثر من 10 سنوات في بناء العضلات وحرق الدهون واللياقة. أصمم لك خطة على قدر وقتك وهدفك، وأتابعك كل أسبوع. (نص تجريبي)",
    "Certifications (placeholder)":"شهادات معتمدة (placeholder)","Hundreds of clients coached":"تدريب مئات العملاء","Learn more":"اعرف المزيد",
    "Weight Loss":"خسارة الوزن","Burn fat and improve overall fitness.":"حرق الدهون وتحسين اللياقة العامة.","Add lean mass and shape your physique.":"زيادة الكتلة العضلية وتشكيل الجسم.","Get stronger and perform better.":"كن أقوى وحسّن أداءك.","Fitness & Conditioning":"اللياقة والتحمل","Build endurance and everyday movement.":"تحسين التحمل والحركة اليومية.",
    "Why train with me":"ليه تتدرب معايا؟","Personalized plans":"خطط مخصصة","Built around your goal and level.":"مبنية على هدفك ومستواك.","Expert guidance":"إرشاد احترافي","Form coaching that keeps you safe.":"تصحيح الأداء لتتجنب الإصابة.","Nutrition support":"دعم غذائي","General nutrition coaching for your lifestyle.":"إرشادات تغذية عامة تناسب نمط حياتك.","Progress tracking":"تتبع التقدم","Regular measurements and photo check-ins.":"قياسات وصور دورية.","Continuous follow-up":"متابعة مستمرة","Weekly feedback and plan updates.":"ملاحظات أسبوعية وتحديث الخطة.","Flexible programs":"برامج مرنة","Schedules that fit your week.":"مواعيد تناسب جدولك.",
    "Real transformations":"تحولات حقيقية","Before":"قبل","After":"بعد","Coach Ayman portrait":"صورة الكوتش أيمن","Client before and after transformation":"تحول عميل قبل وبعد","67 kg → 75 kg":"67 كجم إلى 75 كجم","12 weeks · 14 kg lost (example)":"12 أسبوع · نزول 14 كجم (مثال)","\"I followed the plan and the results showed.\" (Placeholder)":"\"التزمت بالخطة وشفت النتيجة.\" (نص تجريبي)",
    "Client reviews":"آراء العملاء","Great coaching and real follow-up. My results beat what I expected. (Placeholder)":"تدريب ممتاز ومتابعة حقيقية. نتيجتي فاقت توقعاتي. (نص تجريبي)","Mohamed A.":"محمد ع.","Sara M.":"سارة م.","Karim H.":"كريم ح.",
    "Your decision today can change your life.":"قرارك النهارده ممكن يغيّر حياتك.","Message the coach now":"تواصل مع الكوتش الآن",
    "Coach Ayman Islam in the gym with a chain around his neck":"الكوتش أيمن إسلام في الجيم وحول رقبته سلسلة حديد","Iron Pulse Personal Training poster with Coach Ayman Islam":"بوستر آيرون بالس للتدريب الشخصي مع الكوتش أيمن إسلام",
    "About the coach":"عن الكوتش","Experience, discipline and a clear philosophy":"خبرة وانضباط وفلسفة واضحة","Biography":"السيرة المهنية","Fitness coach with over ten years of experience. (Placeholder: replace with your own bio)":"مدرب لياقة بخبرة أكثر من عشر سنوات. (نص تجريبي: استبدله بسيرتك)","My journey":"رحلتي","I started training as a hobby and turned it into a career helping hundreds of people change their lifestyle.":"بدأت التدريب كهواية وحولتها لمهنة ساعدت فيها مئات الأشخاص على تغيير نمط حياتهم.","Philosophy":"الفلسفة","Consistency beats perfection, and the best plan is the one that fits your life.":"الاستمرارية أهم من الكمال، وأفضل خطة هي التي تناسب حياتك.",
    "Certifications":"الشهادات","Add your certificates here (placeholder).":"ضع شهاداتك هنا (placeholder).","Achievements":"الإنجازات","Competitions and milestones (placeholder).":"بطولات ومحطات مهمة (placeholder).","500+ clients":"+500 عميل","Experience with every fitness level.":"خبرة مع كل مستويات اللياقة.","Contact the coach":"تواصل مع الكوتش",
    "Pick the program that matches your goal":"اختر البرنامج المناسب لهدفك","All":"الكل","Body change":"تغيير الجسم","Performance":"الأداء","Coaching type":"نوع التدريب",
    "For clients who want to lose body fat and improve fitness.":"لمن يريد خسارة الدهون وتحسين اللياقة.","Increase muscle mass and develop your physique.":"زيادة الكتلة العضلية وتطوير الجسم.","Improve physical strength and performance.":"تحسين القوة البدنية والأداء.","Online Coaching":"التدريب أونلاين","Remote personalized coaching and progress monitoring.":"تدريب مخصص عن بعد مع متابعة التقدم.","One-to-one coaching and workout supervision.":"تدريب فردي وإشراف مباشر على التمرين.",
    "Custom plan and follow-up":"خطة مخصصة ومتابعة","Beginners":"المبتدئون","Beginner to intermediate":"من مبتدئ إلى متوسط","Intermediate to advanced":"من متوسط إلى متقدم","Everyone":"الجميع","Monthly":"شهري","Join now":"اشترك الآن",
    "Nutrition plans":"خطط التغذية","General coaching information, not medical advice":"معلومات تدريبية عامة وليست نصيحة طبية","Fat loss":"خسارة الدهون","Balanced meals with suitable calories.":"وجبات متوازنة بسعرات مناسبة.","Muscle gain":"بناء العضلات","Enough protein and energy to train hard.":"بروتين وطاقة كافية للتمرين.","Healthy lifestyle":"نمط حياة صحي","Eating habits you can stick to.":"عادات غذائية تقدر تستمر عليها.",
    "Healthy eating tips":"نصائح للأكل الصحي","Drink water regularly.":"اشرب الماء بانتظام.","Include protein in every meal.":"ضع البروتين في كل وجبة.","Sleep 7 to 9 hours.":"نم من 7 إلى 9 ساعات.","Sample meal plan (example)":"نموذج خطة وجبات (مثال)","Meal":"الوجبة","Example":"مثال","Breakfast":"الفطار","Eggs, oats and fruit":"بيض وشوفان وفاكهة","Lunch":"الغداء","Chicken, rice and salad":"دجاج وأرز وسلطة","Dinner":"العشاء","Tuna, vegetables and yogurt":"تونة وخضار وزبادي",
    "This is general information. Consult a doctor if you have a medical condition.":"هذه معلومات عامة. استشر طبيباً إذا كانت لديك حالة صحية.","Request your plan":"اطلب خطتك",
    "Pricing & membership":"الأسعار والاشتراكات","Choose a package and chat on WhatsApp (prices are placeholders)":"اختر الباقة وتواصل على واتساب (الأسعار placeholder)","Recommended":"الأكثر طلباً","Basic":"الأساسية","Standard":"القياسية","Premium":"المميزة","EGP / month":"ج.م / شهر",
    "Personalized workout plan":"خطة تمرين مخصصة","Basic guidance":"إرشاد أساسي","Monthly follow-up":"متابعة شهرية","Nutrition guidance":"إرشاد غذائي","Weekly follow-up":"متابعة أسبوعية","Progress monitoring":"متابعة التقدم","Fully personalized training":"تدريب مخصص بالكامل","Nutrition plan":"خطة تغذية","Priority communication":"أولوية في التواصل","Subscribe on WhatsApp":"اشترك عبر واتساب",
    "Success stories":"قصص النجاح","Real results, shared with client permission (placeholder examples)":"نتائج حقيقية بموافقة العملاء (أمثلة placeholder)","Short result summary and client quote. (Placeholder)":"ملخص قصير للنتيجة ورأي العميل. (نص تجريبي)",
    "WhatsApp is the fastest way to reach me":"واتساب هو أسرع طريقة للتواصل معي","Full name *":"الاسم الكامل *","Phone number *":"رقم الهاتف *","Email":"البريد الإلكتروني","Interested program":"البرنامج المهتم به","Message *":"رسالتك *","Send via WhatsApp":"أرسل عبر واتساب","Contact details":"بيانات التواصل","Chat on WhatsApp":"تحدث معي على واتساب",
    "Everything you need to know before you start":"كل ما تحتاج معرفته قبل البدء","How do I start training?":"كيف أبدأ التدريب؟","Message us on WhatsApp. We'll set your goal and level, then choose the right package.":"راسلنا على واتساب، وسنحدد هدفك ومستواك ثم نختار الباقة المناسبة.","Are the programs suitable for beginners?":"هل البرامج مناسبة للمبتدئين؟","Yes. Every plan starts from your current level.":"نعم. كل خطة تبدأ من مستواك الحالي.","Do you provide nutrition plans?":"هل تقدمون خطط تغذية؟","Yes, general nutrition guidance is included in the packages. It is not medical advice.":"نعم، إرشادات تغذية عامة ضمن الباقات، وهي ليست نصيحة طبية.","Is online coaching available?":"هل التدريب أونلاين متاح؟","Yes, with regular check-ins on WhatsApp.":"نعم، مع متابعة دورية على واتساب.","How can I subscribe?":"كيف أشترك؟","Press the subscribe button on a package and WhatsApp opens with a ready message.":"اضغط زر الاشتراك في الباقة وسيفتح واتساب برسالة جاهزة.","How long does it take to see results?":"كم أحتاج لأرى النتائج؟","Most clients notice first results in 4 to 8 weeks, depending on consistency.":"أغلب العملاء يلاحظون أول النتائج خلال 4 إلى 8 أسابيع حسب الالتزام.","Do I need gym equipment?":"هل أحتاج معدات جيم؟","No. Plans are built for the gym or for home, depending on what you have.":"لا. الخطط مصممة للجيم أو للمنزل حسب المتاح لديك."
  };
  const rx = s => { let m;
    if ((m = s.match(/^\[Photo: (.+)\]$/))) return `[صورة: ${tr(m[1]) || m[1]}]`;
    if ((m = s.match(/^(\d+) weeks$/))) return `${m[1]} أسبوع`;
    if ((m = s.match(/^Duration: (.+?)( \(editable\))?$/))) return `المدة: ${tr(m[1]) || m[1]}${m[2] ? " (قابلة للتعديل)" : ""}`;
    if ((m = s.match(/^Best for: (.+)$/))) return `مناسب لـ: ${tr(m[1]) || m[1]}`;
    if (s.startsWith("©")) return `© ${new Date().getFullYear()} Ahmed Abdelbaset جميع الحقوق محفوظة.`;
  };
  const tr = s => AR[s] || rx(s);

  // WhatsApp message to the coach, in the visitor's language
  const waAr = m => { let x;
    if (m === window.SITE.defaultMsg) return "مرحباً كابتن أيمن، أنا مهتم ببرامج التدريب الشخصي. ممكن أعرف التفاصيل؟";
    if ((x = m.match(/interested in the (.+) program\.$/))) return `مرحباً كابتن أيمن، أنا مهتم ببرنامج ${tr(x[1]) || x[1]}.`;
    if ((x = m.match(/subscribe to the (.+) package\.$/))) return `مرحباً كابتن أيمن، أريد الاشتراك في الباقة ${tr(x[1]) || x[1]}.`;
    if (/personalized nutrition plan/.test(m)) return "مرحباً كابتن أيمن، أريد خطة تغذية مخصصة.";
    return m;
  };

  const saved = new WeakMap(), ATTRS = ["alt", "aria-label"];
  const apply = l => {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n; (n = w.nextNode());) {
      if (["SCRIPT", "STYLE"].includes(n.parentNode.nodeName)) continue;
      if (l === "ar") { const o = saved.get(n) ?? n.nodeValue, t = tr(o.trim().replace(/\s+/g, " ")); if (t) { saved.set(n, o); n.nodeValue = o.replace(o.trim(), () => t); } }
      else if (saved.has(n)) n.nodeValue = saved.get(n);
    }
    ATTRS.forEach(a => document.querySelectorAll(`[${a}]`).forEach(el => {
      el._o = el._o || {};
      if (l === "ar") { const o = el._o[a] ?? el.getAttribute(a), t = tr(o); if (t) { el._o[a] = o; el.setAttribute(a, t); } }
      else if (el._o[a] != null) el.setAttribute(a, el._o[a]);
    }));
    const parts = (apply.title = apply.title || document.title).split(" | ");
    document.title = l === "ar" ? [tr(parts[0]) || parts[0], "أيمن إسلام للتدريب الشخصي"].join(" | ") : apply.title;
    const b = document.getElementById("langBtn"); if (b) b.textContent = l === "ar" ? "English" : "العربية";
  };

  document.addEventListener("DOMContentLoaded", () => {
    const base = window.openWhatsApp;
    window.openWhatsApp = m => base(document.documentElement.lang === "ar" ? waAr(m || window.SITE.defaultMsg) : m);
    apply(lang);
    document.getElementById("langBtn").addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      try { localStorage.setItem("lang", lang); } catch (e) {}
      setDir(lang); apply(lang);
    });
  });
})();
