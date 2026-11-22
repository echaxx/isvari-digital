/* Shared logic for blog & case-study pages. Static UI text: [Indonesian, English]. */
const SITE = {
 "nav.services": [
  "Layanan",
  "Services"
 ],
 "nav.cases": [
  "Studi Kasus",
  "Case Studies"
 ],
 "nav.blog": [
  "Blog",
  "Blog"
 ],
 "nav.about": [
  "Tentang",
  "About"
 ],
 "nav.contact": [
  "Kontak",
  "Contact"
 ],
 "nav.cta": [
  "Konsultasi Gratis",
  "Free Consultation"
 ],
 "footer.tag": [
  "Partner pertumbuhan digital yang dipimpin perempuan",
  "Women-led digital growth partner"
 ],
 "ar.burger": [
  "Buka menu",
  "Toggle menu"
 ],
 "ar.top": [
  "Kembali ke atas",
  "Back to top"
 ],
 "blog.title": [
  "Blog | Isvari Digital",
  "Blog | Isvari Digital"
 ],
 "blog.kicker": [
  "Blog Isvari",
  "Isvari Blog"
 ],
 "blog.h1": [
  "Wawasan untuk <span class=\"light\">tumbuh lebih cepat.</span>",
  "Insights to <span class=\"light\">grow faster.</span>"
 ],
 "blog.lead": [
  "Tips praktis seputar iklan digital, SEO & pencarian AI, media sosial, website, dan otomasi AI dari tim Isvari.",
  "Practical tips on digital ads, SEO & AI search, social media, websites, and AI automation from the Isvari team."
 ],
 "blog.search": [
  "Cari artikel...",
  "Search articles..."
 ],
 "blog.empty": [
  "Belum ada artikel yang cocok. Coba kata kunci lain.",
  "No matching articles. Try another keyword."
 ],
 "post.back": [
  "← Semua artikel",
  "← All articles"
 ],
 "post.share": [
  "Bagikan",
  "Share"
 ],
 "post.copy": [
  "Salin link",
  "Copy link"
 ],
 "post.copied": [
  "Link disalin!",
  "Link copied!"
 ],
 "post.related": [
  "Artikel terkait",
  "Related articles"
 ],
 "post.notfound": [
  "Artikel tidak ditemukan.",
  "Article not found."
 ],
 "post.prev": [
  "← Sebelumnya",
  "← Previous"
 ],
 "post.next": [
  "Berikutnya →",
  "Next →"
 ],
 "cases.title": [
  "Studi Kasus | Isvari Digital",
  "Case Studies | Isvari Digital"
 ],
 "cases.kicker": [
  "Studi kasus",
  "Case studies"
 ],
 "cases.h1": [
  "Hasil nyata, <span class=\"light\">cerita lengkap.</span>",
  "Real results, <span class=\"light\">the full story.</span>"
 ],
 "cases.lead": [
  "Angka nyata dari kampanye nyata. Lihat tantangan, strategi, dan hasil di balik setiap proyek.",
  "Real numbers from real campaigns. See the challenge, strategy, and results behind each project."
 ],
 "s1v": [
  "Rp 3,9 M+",
  "Rp 3.9B+"
 ],
 "s1l": [
  "Dana iklan dikelola",
  "Ad spend managed"
 ],
 "s2v": [
  "15 jt+",
  "15M+"
 ],
 "s2l": [
  "Impresi pencarian",
  "Search impressions"
 ],
 "s3v": [
  "~6x",
  "~6x"
 ],
 "s3l": [
  "ROAS kampanye tertinggi",
  "Peak campaign ROAS"
 ],
 "s4v": [
  "6+ thn",
  "6+ yrs"
 ],
 "s4l": [
  "Pengalaman gabungan",
  "Combined expertise"
 ],
 "s5v": [
  "50+",
  "50+"
 ],
 "s5l": [
  "Proyek selesai",
  "Projects delivered"
 ],
 "case.back": [
  "← Semua studi kasus",
  "← All case studies"
 ],
 "case.industry": [
  "Industri",
  "Industry"
 ],
 "case.services": [
  "Layanan",
  "Services"
 ],
 "case.duration": [
  "Durasi",
  "Timeline"
 ],
 "case.challenge": [
  "Tantangan",
  "The challenge"
 ],
 "case.strategy": [
  "Strategi kami",
  "Our strategy"
 ],
 "case.results": [
  "Hasil",
  "Results"
 ],
 "case.next": [
  "Studi kasus berikutnya",
  "Next case study"
 ],
 "case.notfound": [
  "Studi kasus tidak ditemukan.",
  "Case study not found."
 ],
 "cta.h": [
  "Siap menumbuhkan brand Anda?",
  "Ready to grow your brand?"
 ],
 "cta.p": [
  "Konsultasi gratis dengan tim Isvari, respons cepat setiap hari.",
  "Free consultation with the Isvari team, fast response every day."
 ],
 "cta.btn": [
  "Konsultasi Gratis",
  "Free Consultation"
 ]
};
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const params = new URLSearchParams(location.search);
let lang = params.get("lang") || localStorage.getItem("isvari-lang") || "id";
if (!["id", "en"].includes(lang)) lang = "id";
const tt = (k) => SITE[k][lang === "id" ? 0 : 1];
const tr = (o) => CR.t(o, lang);
const hooks = [];

/* Toast */
const toast = $("#toast");
let toastTimer;
const showToast = (m) => {
  toast.textContent = m;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
};

/* Mobile menu */
const burger = $("#burger");
const nav = $("#nav");
const closeMenu = () => {
  nav.classList.remove("open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", false);
};
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
$$("a", nav).forEach((a) => a.addEventListener("click", closeMenu));

/* Scroll reveal */
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    }),
  { threshold: 0.1 }
);
const observeReveal = (root = document) => $$(".reveal:not(.visible)", root).forEach((el) => revealObserver.observe(el));

/* Category filter chips */
const renderCats = (box, keys, active, items, catOf) => {
  box.innerHTML = keys
    .map((k) => {
      const n = k === "all" ? items.length : items.filter((it) => catOf(it).includes(k)).length;
      return `<button class="filter${k === active ? " active" : ""}" data-c="${k}">${tr(CONTENT.cats[k])} <span class="filter__n">${n}</span></button>`;
    })
    .join("");
};

const SHARE_ICONS = {
  copy: '<svg viewBox="0 0 24 24"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-1.5-1-2-2l1-1-1-2z"/></svg>',
  in: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
};

const pages = {
  blog() {
    let cat = CONTENT.cats[params.get("cat")] ? params.get("cat") : "all";
    let q = "";
    const posts = CONTENT.posts;
    const cats = $("#cats"), input = $("#q");
    const render = () => {
      renderCats(cats, ["all", "paid", "seo", "social", "web"], cat, posts, (p) => [p.cat]);
      const list = posts.filter(
        (p) => (cat === "all" || p.cat === cat) && (!q || `${tr(p.title)} ${tr(p.excerpt)} ${tr(CONTENT.cats[p.cat])}`.toLowerCase().includes(q))
      );
      const feat = cat === "all" && !q && list.length > 0;
      $("#featured").innerHTML = feat ? CR.postCard(list[0], lang, "../", true) : "";
      $("#postGrid").innerHTML = (feat ? list.slice(1) : list).map((p) => CR.postCard(p, lang, "../")).join("");
      $("#empty").hidden = list.length > 0;
      document.title = tt("blog.title");
    };
    cats.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      cat = b.dataset.c;
      render();
    });
    input.addEventListener("input", () => {
      q = input.value.trim().toLowerCase();
      render();
    });
    hooks.push(render);
  },

  post() {
    const posts = CONTENT.posts;
    const i = posts.findIndex((p) => p.slug === params.get("p"));
    const el = $("#article");
    const render = () => {
      if (i < 0) {
        el.innerHTML = `<p class="empty">${tt("post.notfound")}</p><a class="btn btn--dark" href="./">${tt("post.back")}</a>`;
        $("#relatedWrap").hidden = true;
        return;
      }
      const p = posts[i];
      const prev = posts[(i - 1 + posts.length) % posts.length];
      const next = posts[(i + 1) % posts.length];
      const url = encodeURIComponent(location.href.split("#")[0]);
      document.title = `${tr(p.title)} | Isvari Digital`;
      el.innerHTML = `
        <a class="back" href="./">${tt("post.back")}</a>
        <header class="ahead">
          <a class="acat" href="./?cat=${p.cat}">${tr(CONTENT.cats[p.cat])}</a>
          <h1 class="atitle">${tr(p.title)}</h1>
          <p class="ameta">${CR.date(p.date, lang)} · ${p.mins} ${CR.L[lang].min} · Isvari Digital</p>
        </header>
        <div class="acover" style="background:${p.g}">
          <span class="acover__mark">${CR.logo}</span>
          <span class="acover__ico">${CR.postIcon(p)}</span>
          <span class="orb orb--1"></span><span class="orb orb--2"></span>
        </div>
        <div class="alayout">
          <aside class="ashare">
            <span>${tt("post.share")}</span>
            <button type="button" data-copy aria-label="${tt("post.copy")}" title="${tt("post.copy")}">${SHARE_ICONS.copy}</button>
            <a href="https://wa.me/?text=${encodeURIComponent(tr(p.title) + " ")}${url}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">${SHARE_ICONS.wa}</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${SHARE_ICONS.in}</a>
          </aside>
          <div class="prose">${tr(p.body)}</div>
        </div>
        <nav class="apager">
          <a href="post.html?p=${prev.slug}"><span>${tt("post.prev")}</span><b>${tr(prev.title)}</b></a>
          <a href="post.html?p=${next.slug}" class="apager__next"><span>${tt("post.next")}</span><b>${tr(next.title)}</b></a>
        </nav>`;
      const related = [...posts.filter((x) => x !== p && x.cat === p.cat), ...posts.filter((x) => x !== p && x.cat !== p.cat)].slice(0, 3);
      $("#related").innerHTML = related.map((x) => CR.postCard(x, lang, "../")).join("");
    };
    el.addEventListener("click", (e) => {
      if (!e.target.closest("[data-copy]")) return;
      (navigator.clipboard ? navigator.clipboard.writeText(location.href) : Promise.reject())
        .then(() => showToast(tt("post.copied")))
        .catch(() => showToast(location.href));
    });
    const bar = $("#progress");
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const total = r.height - innerHeight * 0.6;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, -r.top / Math.max(total, 1)))})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    hooks.push(render, onScroll);
  },

  cases() {
    let cat = CONTENT.cats[params.get("cat")] ? params.get("cat") : "all";
    const list = CONTENT.cases;
    const cats = $("#cats");
    const render = () => {
      renderCats(cats, ["all", "paid", "seo", "social"], cat, list, (c) => c.cats);
      $("#caseGrid").innerHTML = list
        .filter((c) => cat === "all" || c.cats.includes(cat))
        .map((c) => CR.caseCard(c, lang, "../"))
        .join("");
      document.title = tt("cases.title");
    };
    cats.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      cat = b.dataset.c;
      render();
    });
    hooks.push(render);
  },

  case() {
    const list = CONTENT.cases;
    const i = list.findIndex((c) => c.slug === params.get("c"));
    const el = $("#caseView");
    const render = () => {
      if (i < 0) {
        el.innerHTML = `<p class="empty">${tt("case.notfound")}</p><a class="btn btn--dark" href="./">${tt("case.back")}</a>`;
        return;
      }
      const c = list[i];
      const next = list[(i + 1) % list.length];
      document.title = `${tr(c.industry)} | ${tt("cases.title")}`;
      el.innerHTML = `
        <a class="back" href="./">${tt("case.back")}</a>
        <div class="chero">
          <div class="chero__intro">
            <span class="rcard__tag">${tr(c.industry)}</span>
            <h1 class="atitle">${tr(c.title)}</h1>
            <p class="lead">${tr(c.summary)}</p>
            <dl class="cfacts">
              <div><dt>${tt("case.industry")}</dt><dd>${tr(c.industry)}</dd></div>
              <div><dt>${tt("case.services")}</dt><dd>${c.services.join(", ")}</dd></div>
              <div><dt>${tt("case.duration")}</dt><dd>${tr(c.duration)}</dd></div>
            </dl>
          </div>
          <div class="chero__visual" style="background:${c.g}">
            <span class="pcard__mark">${CR.logo}</span>
            <span class="visual__ico">${C_ICONS[c.icon]}</span>
            <b class="ccard__big">${tr(c.metrics[0].v)}</b>
            <span class="ccard__unit">${tr(c.metrics[0].l)}</span>
            ${CR.chart(c.chart)}
          </div>
        </div>
        <div class="cmetrics">${c.metrics.map((m) => `<div class="cmetric"><b>${tr(m.v)}</b><span>${tr(m.l)}</span></div>`).join("")}</div>
        <div class="cblocks">
          <section class="cblock"><span class="cblock__num">01</span><h2>${tt("case.challenge")}</h2><p>${tr(c.challenge)}</p></section>
          <section class="cblock cblock--dark"><span class="cblock__num">02</span><h2>${tt("case.strategy")}</h2><ul class="clist">${tr(c.strategy).map((s) => `<li>${s}</li>`).join("")}</ul></section>
          <section class="cblock cblock--green"><span class="cblock__num">03</span><h2>${tt("case.results")}</h2><ul class="clist clist--check">${tr(c.results).map((s) => `<li>${s}</li>`).join("")}</ul></section>
        </div>
        <a class="cnext" href="detail.html?c=${next.slug}">
          <span>${tt("case.next")}</span>
          <b>${tr(next.industry)}: ${tr(next.title)}</b>
          <i aria-hidden="true">→</i>
        </a>`;
    };
    hooks.push(render);
  },
};

/* Language switcher */
const applyLang = (next) => {
  lang = next;
  localStorage.setItem("isvari-lang", lang);
  document.documentElement.lang = lang;
  $$("[data-t]").forEach((el) => (el.innerHTML = tt(el.dataset.t)));
  $$("[data-t-ph]").forEach((el) => el.setAttribute("placeholder", tt(el.dataset.tPh)));
  $$("[data-t-aria]").forEach((el) => el.setAttribute("aria-label", tt(el.dataset.tAria)));
  $$("#lang button").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
  hooks.forEach((f) => f());
  observeReveal();
};
$$("#lang button").forEach((b) =>
  b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    applyLang(b.dataset.lang);
    showToast(lang === "id" ? "Bahasa: Indonesia" : "Language: English");
  })
);

$("#year").textContent = new Date().getFullYear();
pages[document.body.dataset.page]?.();
applyLang(lang);
