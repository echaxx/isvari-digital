const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const header = $("#header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), { passive: true });

const burger = $("#burger");
const nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
$$("#nav a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", false);
}));

const links = $$(".nav a:not(.btn)");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${e.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("section[id]").forEach((s) => spy.observe(s));

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    reveal.unobserve(e.target);
  });
}, { threshold: 0.12 });
$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  reveal.observe(el);
});

const countUp = (el) => {
  const target = parseFloat(el.dataset.count);
  const dec = +(el.dataset.dec || 0);
  const pre = el.dataset.prefix || "";
  const suf = el.dataset.suffix || "";
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / 1600, 1);
    const v = target * (1 - Math.pow(1 - p, 3));
    el.textContent = pre + v.toFixed(dec) + suf;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const counter = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    $$("[data-count]", e.target).forEach(countUp);
    counter.unobserve(e.target);
  });
}, { threshold: 0.4 });
counter.observe($(".stats"));

const art = $(".hero__art");
art.addEventListener("mousemove", (e) => {
  const r = art.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  $$(".float", art).forEach((f, i) => {
    f.style.translate = `${x * (14 + i * 8)}px ${y * (14 + i * 8)}px`;
  });
});
art.addEventListener("mouseleave", () => $$(".float", art).forEach((f) => (f.style.translate = "")));

const form = $("#form");
const note = $("#formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, company, service, message } = form.elements;
  const okName = name.value.trim().length > 1;
  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  name.classList.toggle("invalid", !okName);
  email.classList.toggle("invalid", !okEmail);
  if (!okName || !okEmail) {
    note.textContent = "Please enter your name and a valid email.";
    note.classList.add("err");
    return;
  }
  note.classList.remove("err");
  note.textContent = `Thank you, ${name.value.trim()}! Opening your email app…`;
  const body = `Name: ${name.value}\nCompany: ${company.value}\nInterested in: ${service.value}\n\n${message.value}`;
  location.href = `mailto:hello@isvari.digital?subject=${encodeURIComponent("Free consultation — " + service.value)}&body=${encodeURIComponent(body)}`;
  form.reset();
});
