const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 12 ? "0 10px 40px rgba(0,0,0,.25)" : "none";
});

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const service = data.get("service");
  const message = data.get("message") || "Ön görüşme istiyorum.";
  const text = encodeURIComponent(
    `Merhaba, ben ${name}. ${service} hakkında bilgi almak istiyorum. ${message}`
  );
  formNote.hidden = false;
  window.open(`https://wa.me/905322044949?text=${text}`, "_blank", "noopener");
});
