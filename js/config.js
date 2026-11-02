// Central configuration: edit trainer details, links and prices here only.
window.SITE = {
  phone: "201064729909",          // WhatsApp number, international format, no "+"
  phoneDisplay: "01064729909",
  brand: "AYMAN ISLAM",
  email: "",                      // add an email to show it in the footer
  defaultMsg: "Hi Coach Ayman, I'm interested in your personal training programs. Can I get the details?",
  social: { facebook: "https://www.facebook.com/ayman.islam.941426?locale=ar_AR", instagram:"https://www.instagram.com/aymanislam67?obrf=OGo1eHU1ZWRpOTJu", youtube: "#" }, // "#" = hidden
  // Pricing cards (rendered on Home and Pricing pages)
  plans: [
    { name: "Basic", price: "800", features: ["Personalized workout plan", "Basic guidance", "Monthly follow-up"] },
    { name: "Standard", price: "1500", recommended: true, features: ["Personalized workout plan", "Nutrition guidance", "Weekly follow-up", "Progress monitoring"] },
    { name: "Premium", price: "2000", features: ["Fully personalized training", "Nutrition plan", "Continuous follow-up", "Priority communication"] }
  ]
};
