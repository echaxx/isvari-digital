const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Language (Indonesian default, English second) */
const ID = I18N_ID;
const LANGS = ["id", "en"];
let lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("isvari-lang") || "id";
if (!LANGS.includes(lang)) lang = "id";
const EN_MSG = { saved: "\u2665 Saved: ", removed: "Removed from saved results", show: "Show result: ", err: "Please enter your name and a valid email.", subject: "Free consultation: ", name: "Name", service: "Service" };
const pick = (en, key, i) => (lang === "id" ? { ...en, ...ID[key][i] } : en);
const msg = (k) => (lang === "id" ? ID.msg : EN_MSG)[k];
const fmt = (n, d = 0) => n.toLocaleString(lang === "id" ? "id-ID" : "en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

/* Toast */
const toast = $("#toast");
let toastTimer;
const showToast = (msg) => {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
};

/* Mobile menu */
const burger = $("#burger");
const nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
$$("a", nav).forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  })
);

/* Active nav link on scroll */
const sections = ["services", "results", "about", "contact"].map((id) => document.getElementById(id));
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      $$(".topbar__nav a:not(.btn)").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => navObserver.observe(s));

/* Headline word rotator */
const rotatorWords = ["Ads", "SEO", "Content", "AI"];
const rotator = $("#rotator");
let rotIndex = 0;
if (!reduceMotion) {
  setInterval(() => {
    rotator.classList.add("out");
    setTimeout(() => {
      rotIndex = (rotIndex + 1) % rotatorWords.length;
      rotator.textContent = (lang === "id" ? ID.rotator : rotatorWords)[rotIndex];
      rotator.classList.remove("out");
      rotator.classList.add("in");
      requestAnimationFrame(() => requestAnimationFrame(() => rotator.classList.remove("in")));
    }, 420);
  }, 2400);
}

/* Results gallery */
const LOGO = '<svg viewBox="64 44 176 244" fill="currentColor" aria-hidden="true"><rect x="72" y="53" width="108" height="17" rx="8.5"/><rect x="98" y="94" width="62" height="190" rx="31"/><circle cx="206" cy="254" r="27"/></svg>';
const ICONS = {
  health: '<svg viewBox="0 0 24 24"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  drop: '<svg viewBox="0 0 24 24"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  car: '<svg viewBox="0 0 24 24"><path d="M3 16v-3l2-5h14l2 5v3z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg>',
};
const line = (pts) =>
  `<svg class="visual__chart" viewBox="0 0 200 70" preserveAspectRatio="none"><path class="ar" d="M${pts} L200,70 L0,70 Z"/><path class="ln" d="M${pts}"/></svg>`;
const bars = (hs) =>
  `<svg class="visual__chart" viewBox="0 0 200 70" preserveAspectRatio="none">${hs
    .map((h, i) => `<rect x="${i * 34 + 4}" y="${70 - h}" width="22" height="${h}" rx="5" style="animation-delay:${i * 0.08}s"/>`)
    .join("")}</svg>`;
const stories = [
  { g: "linear-gradient(150deg,#2a8466,#0d3a2b)", icon: "health", big: "5.34M", unit: "search impressions", chart: line("0,62 30,58 60,52 90,44 120,36 150,22 200,6"), tag: "Healthcare · Medical Lab", title: "5.34M impressions, 62k clicks", desc: "Built an organic foundation that turned the clinic into a top AI-recommended source for health queries in 6 months." },
  { g: "linear-gradient(150deg,#3a3d37,#111310)", icon: "target", big: "7,000+", unit: "leads, CPA cut ~51%", chart: bars([62, 54, 46, 38, 31, 26]), tag: "Business Coaching", title: "7,000+ leads, CPA cut ~51%", desc: "Segmented acquisition across Rp 2.5B in managed Meta spend while steadily lowering cost per registrant." },
  { g: "linear-gradient(150deg,#ddb06f,#a8742f)", icon: "drop", big: "~6x", unit: "peak ROAS on TikTok Ads", chart: line("0,62 40,58 80,52 105,34 128,6 150,36 200,46"), tag: "Mom & Baby Skincare", title: "~6x peak ROAS", desc: "Scaled TikTok Ads as a new sales channel through the Ramadan–Lebaran peak with 2,500+ products sold." },
  { g: "linear-gradient(150deg,#86a995,#3d6b57)", icon: "car", big: "Rp 1.2B", unit: "managed, 40–50% QLR", chart: bars([22, 32, 40, 50, 58, 66]), tag: "Automotive Marketplace", title: "Rp 1.2B managed, 40–50% QLR", desc: "Built a dual B2B/B2C acquisition model across Meta & Google, balancing vehicle demand and supply." },
];
let current = 0;
const liked = new Set();
const visual = $("#galleryVisual");
const strips = $("#galleryStrips");
const storyBody = $(".story__body");
const heart = $("#heart");
const avatar = $("#storyAvatar");

const renderVisual = (s) => {
  visual.style.setProperty("--g", s.g);
  visual.innerHTML = `<span class="visual__mark">${LOGO}</span><span class="visual__ico">${ICONS[s.icon]}</span><p class="visual__big">${s.big}</p><p class="visual__unit">${s.unit}</p>${s.chart}`;
  avatar.style.setProperty("--g", s.g);
  avatar.innerHTML = ICONS[s.icon];
};

const renderStrips = () => {
  strips.innerHTML = "";
  stories.forEach((st, i) => {
    if (i === current) return;
    const s = pick(st, "stories", i);
    const b = document.createElement("button");
    b.className = "strip";
    b.style.setProperty("--g", s.g);
    b.dataset.label = s.tag.split(" · ")[0];
    b.setAttribute("aria-label", `${msg("show")}${s.tag}`);
    b.innerHTML = `<span class="strip__ico">${ICONS[s.icon]}</span><span class="strip__num">${s.big}</span>`;
    b.addEventListener("click", () => showStory(i));
    strips.appendChild(b);
  });
};

const showStory = (i) => {
  current = i;
  const s = pick(stories[i], "stories", i);
  visual.classList.add("fade");
  storyBody.classList.add("fade");
  setTimeout(() => {
    renderVisual(s);
    $("#storyTitle").textContent = s.title;
    $("#storyTag").textContent = s.tag;
    $("#storyDesc").textContent = s.desc;
    heart.classList.toggle("liked", liked.has(i));
    heart.setAttribute("aria-pressed", liked.has(i));
    visual.classList.remove("fade");
    storyBody.classList.remove("fade");
    renderStrips();
  }, 300);
};

heart.addEventListener("click", () => {
  const isLiked = liked.has(current) ? (liked.delete(current), false) : (liked.add(current), true);
  heart.classList.toggle("liked", isLiked);
  heart.setAttribute("aria-pressed", isLiked);
  heart.classList.remove("pop");
  void heart.offsetWidth;
  heart.classList.add("pop");
  showToast(isLiked ? `${msg("saved")}${pick(stories[current], "stories", current).tag}` : msg("removed"));
});
renderVisual(pick(stories[0], "stories", 0));
renderStrips();

/* Word slider */
const slides = [
  { word: "Leads.", sub: "7,000+ leads generated for a business coaching brand.", ring: 70 },
  { word: "Sales.", sub: "2,500+ products sold through one Ramadan–Lebaran peak.", ring: 55 },
  { word: "Reach.", sub: "15M+ search impressions across SEO & AI search.", ring: 85 },
  { word: "ROI.", sub: "Rp 3.9B+ in ad spend managed with a focus on return.", ring: 95 },
];
const sliderWord = $("#sliderWord");
const sliderSub = $("#sliderSub");
const dots = $("#dots");
let slide = 0;
let slideTimer;

slides.forEach((s, i) => {
  const d = document.createElement("button");
  d.className = "dot" + (i === 0 ? " active" : "");
  d.setAttribute("role", "tab");
  d.setAttribute("aria-label", s.word.replace(".", ""));
  d.addEventListener("click", () => {
    goSlide(i);
    restartSlider();
  });
  dots.appendChild(d);
});

const goSlide = (i) => {
  slide = i;
  sliderWord.classList.add("out");
  sliderSub.style.opacity = 0;
  setTimeout(() => {
    const sl = pick(slides[i], "slides", i);
    sliderWord.textContent = sl.word;
    sliderSub.textContent = sl.sub;
    sliderWord.classList.remove("out");
    sliderSub.style.opacity = 1;
  }, 300);
  $$(".dot", dots).forEach((d, j) => d.classList.toggle("active", j === i));
  $("#ringFg").style.strokeDashoffset = 100 - slides[i].ring;
};
const restartSlider = () => {
  clearInterval(slideTimer);
  if (!reduceMotion) slideTimer = setInterval(() => goSlide((slide + 1) % slides.length), 3200);
};
$("#slider").addEventListener("mouseenter", () => clearInterval(slideTimer));
$("#slider").addEventListener("mouseleave", restartSlider);
restartSlider();

/* Count-up helper */
const countUp = (el, { to, prefix = "", suffix = "", decimals = 0, duration = 1200 }) => {
  if (reduceMotion) {
    el.textContent = prefix + fmt(to, decimals) + suffix;
    return;
  }
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + fmt(to * eased, decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

/* Impact switcher */
const icons = {
  ads: '<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',
  seo: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  social: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',
  web: '<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
};
const impacts = [
  { name: "Paid Performance", icon: "ads", desc: "Meta, Google, TikTok & LinkedIn Ads, up to Rp 500M/month managed.", title: "Cut CPA by", to: 51, prefix: "", suffix: "%", cap: "for a business coaching brand on Meta Ads" },
  { name: "SEO, AEO & GEO", icon: "seo", desc: "Rank on Google and get cited by ChatGPT, Perplexity & AI Overviews.", title: "Search impressions", to: 15, prefix: "", suffix: "M+", cap: "earned across SEO & AI-search work" },
  { name: "Social & Content", icon: "social", desc: "Strategy, banners & short-form video for Instagram, TikTok & LinkedIn.", title: "Peak ROAS", to: 6, prefix: "~", suffix: "x", cap: "on TikTok Ads during Ramadan–Lebaran" },
  { name: "Web & AI Builds", icon: "web", desc: "Fast WordPress sites, WhatsApp AI agents, n8n automations & custom apps.", title: "Projects delivered", to: 50, prefix: "", suffix: "+", cap: "sites, campaigns & automations shipped" },
];
const pills = $("#pills");
const impactNum = $("#impactNum");
let curImpact = 0;
const setImpact = (i) => {
  curImpact = i;
  const d = pick(impacts[i], "impacts", i);
  $$(".pill", pills).forEach((p, j) => {
    p.classList.toggle("active", j === i);
    p.setAttribute("aria-selected", j === i);
  });
  $("#impactTitle").textContent = d.title;
  $("#impactCap").textContent = d.cap;
  countUp(impactNum, { to: d.to, prefix: d.prefix, suffix: d.suffix, duration: 900 });
};
const pillHTML = (i) => {
  const d = pick(impacts[i], "impacts", i);
  return `<span class="pill__ico">${icons[d.icon]}</span>${d.name}<span class="pill__desc">${d.desc}</span>`;
};
impacts.forEach((d, i) => {
  const b = document.createElement("button");
  b.className = "pill";
  b.setAttribute("role", "tab");
  b.innerHTML = pillHTML(i);
  b.addEventListener("click", () => setImpact(i));
  pills.appendChild(b);
});
setImpact(0);

/* Services accordion */
$$(".acc").forEach((acc) => {
  $(".acc__head", acc).addEventListener("click", () => {
    const open = !acc.classList.contains("open");
    $$(".acc").forEach((a) => {
      a.classList.remove("open");
      $(".acc__head", a).setAttribute("aria-expanded", false);
    });
    if (open) {
      acc.classList.add("open");
      $(".acc__head", acc).setAttribute("aria-expanded", true);
    }
  });
});

/* Results filter */
$$(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    $$(".filter").forEach((b) => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".rcard").forEach((card) => {
      const show = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.toggle("hidden", !show);
    });
  })
);

/* Engagement tabs */
const engageText = [
  "Fixed-scope projects such as a new website, landing page, or AI automation, with a clear timeline and deliverables.",
  "Ongoing management of your ads, SEO, and social channels, with monthly reporting and continuous optimization.",
  "An expert review of your current campaigns, website, or search visibility, plus a prioritized action plan.",
];
const engageDesc = $("#engageDesc");
let curEngage = 0;
const engageTxt = (i) => (lang === "id" ? ID.engage : engageText)[i];
engageDesc.textContent = engageTxt(0);
$$(".etab").forEach((t) =>
  t.addEventListener("click", () => {
    $$(".etab").forEach((x) => x.classList.toggle("active", x === t));
    engageDesc.style.opacity = 0;
    setTimeout(() => {
      curEngage = +t.dataset.i;
      engageDesc.textContent = engageTxt(curEngage);
      engageDesc.style.opacity = 1;
    }, 200);
  })
);

/* Contact form */
const form = $("#form");
let service = "Paid Ads";
$$("#choice button").forEach((b) =>
  b.addEventListener("click", () => {
    $$("#choice button").forEach((x) => x.classList.toggle("active", x === b));
    service = b.textContent;
  })
);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const err = $("#formError");
  form.name.classList.toggle("invalid", !name);
  form.email.classList.toggle("invalid", !/^\S+@\S+\.\S+$/.test(email));
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    err.textContent = msg("err");
    return;
  }
  err.textContent = "";
  service = $("#choice button.active").textContent;
  const subject = encodeURIComponent(`${msg("subject")}${service}`);
  const body = encodeURIComponent(`${msg("name")}: ${name}\nEmail: ${email}\n${msg("service")}: ${service}\n\n${form.message.value}`);
  window.location.href = `mailto:hello@isvari.digital?subject=${subject}&body=${body}`;
  $("#formFields").hidden = true;
  $("#formDone").hidden = false;
});
$("#formReset").addEventListener("click", () => {
  form.reset();
  $("#formFields").hidden = false;
  $("#formDone").hidden = true;
});

/* Scroll reveal + stats */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    });
  },
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

let statsDone = false;
const statFormat = (el) => {
  const en = { to: parseFloat(el.dataset.count), prefix: el.dataset.prefix || "", suffix: el.dataset.suffix || "", decimals: parseInt(el.dataset.decimals || "0", 10) };
  return lang === "id" ? { ...en, ...ID.stats[el.dataset.stat] } : en;
};
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      $$("[data-count]", e.target).forEach((el) =>
        countUp(el, { ...statFormat(el), duration: 1500 })
      );
      statsDone = true;
      statsObserver.unobserve(e.target);
    });
  },
  { threshold: 0.4 }
);
statsObserver.observe($("#stats"));

$("#year").textContent = new Date().getFullYear();

/* Language switcher */
const enCache = new Map();
const cached = (el, attr) => {
  const k = el.dataset.i18n + (attr || "") + (el.dataset.i18nPh || "") + (el.dataset.i18nAria || "");
  if (!enCache.has(el)) enCache.set(el, {});
  const c = enCache.get(el);
  if (!(k in c)) c[k] = attr ? el.getAttribute(attr) : el.innerHTML;
  return c[k];
};
const enMeta = { title: document.title, desc: $('meta[name="description"]').content };

const applyLang = (next) => {
  lang = next;
  localStorage.setItem("isvari-lang", lang);
  document.documentElement.lang = lang;
  const isId = lang === "id";
  $$("[data-i18n]").forEach((el) => {
    const en = cached(el);
    el.innerHTML = isId ? ID.text[el.dataset.i18n] : en;
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const en = cached(el, "placeholder");
    el.setAttribute("placeholder", isId ? ID.ph[el.dataset.i18nPh] : en);
  });
  $$("[data-i18n-aria]").forEach((el) => {
    const en = cached(el, "aria-label");
    el.setAttribute("aria-label", isId ? ID.aria[el.dataset.i18nAria] : en);
  });
  document.title = isId ? ID.meta.title : enMeta.title;
  $('meta[name="description"]').content = isId ? ID.meta.desc : enMeta.desc;

  rotator.textContent = (isId ? ID.rotator : rotatorWords)[rotIndex];
  const s = pick(stories[current], "stories", current);
  renderVisual(s);
  $("#storyTitle").textContent = s.title;
  $("#storyTag").textContent = s.tag;
  $("#storyDesc").textContent = s.desc;
  renderStrips();
  const sl = pick(slides[slide], "slides", slide);
  sliderWord.textContent = sl.word;
  sliderSub.textContent = sl.sub;
  $$(".dot", dots).forEach((d, i) => d.setAttribute("aria-label", pick(slides[i], "slides", i).word.replace(".", "")));
  $$(".pill", pills).forEach((p, i) => (p.innerHTML = pillHTML(i)));
  setImpact(curImpact);
  engageDesc.textContent = engageTxt(curEngage);
  $("#homePosts").innerHTML = CONTENT.posts.slice(0, 3).map((p) => CR.postCard(p, lang, "")).join("");
  if (statsDone) $$("[data-count]").forEach((el) => {
    const f = statFormat(el);
    el.textContent = f.prefix + fmt(f.to, f.decimals) + f.suffix;
  });
  $$("#lang button").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
};
$$("#lang button").forEach((b) =>
  b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    applyLang(b.dataset.lang);
    showToast(lang === "id" ? "Bahasa: Indonesia" : "Language: English");
  })
);
applyLang(lang);
