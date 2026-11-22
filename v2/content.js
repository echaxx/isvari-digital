/* Blog posts & case studies (Indonesian + English). Edit text here; pages render automatically. */
const C_ICONS = {
  health: '<svg viewBox="0 0 24 24"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  drop: '<svg viewBox="0 0 24 24"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  car: '<svg viewBox="0 0 24 24"><path d="M3 16v-3l2-5h14l2 5v3z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg>',
  paid: '<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',
  seo: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  social: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',
  web: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M9 14l-2 2 2 2M15 14l2 2-2 2"/></svg>',
  ai: '<svg viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="12" rx="4"/><path d="M12 3v4M9 13h.01M15 13h.01"/></svg>',
};

const CONTENT = {
  cats: {
    all: { id: "Semua", en: "All" },
    paid: { id: "Iklan Berbayar", en: "Paid Ads" },
    seo: { id: "SEO & Pencarian AI", en: "SEO & AI Search" },
    social: { id: "Media Sosial", en: "Social Media" },
    web: { id: "Web & AI", en: "Web & AI" },
  },

  cases: [
    {
      slug: "laboratorium-medis",
      cats: ["seo"],
      g: "linear-gradient(150deg,#2a8466,#0d3a2b)",
      icon: "health",
      chart: { line: "0,62 30,58 60,52 90,44 120,36 150,22 200,6" },
      industry: { id: "Kesehatan · Laboratorium Medis", en: "Healthcare · Medical Lab" },
      title: { id: "5,34 jt impresi, 62 rb klik", en: "5.34M impressions, 62k clicks" },
      summary: {
        id: "Membangun fondasi organik yang menjadikan klinik ini sumber teratas yang direkomendasikan AI untuk pencarian kesehatan dalam 6 bulan.",
        en: "Built an organic foundation that turned the clinic into a top AI-recommended source for health queries in 6 months.",
      },
      services: ["SEO", "AEO", "GEO"],
      duration: { id: "6 bulan", en: "6 months" },
      metrics: [
        { v: { id: "5,34 jt", en: "5.34M" }, l: { id: "Impresi pencarian", en: "Search impressions" } },
        { v: { id: "62 rb", en: "62k" }, l: { id: "Klik dari pencarian", en: "Clicks from search" } },
        { v: { id: "6 bln", en: "6 mo" }, l: { id: "Menjadi rujukan AI", en: "To AI-recommended source" } },
      ],
      challenge: {
        id: "Pasien makin sering mencari informasi kesehatan lewat Google dan asisten AI seperti ChatGPT. Laboratorium ini butuh visibilitas organik yang kuat agar muncul, dan dipercaya, saat orang mencari layanan tes kesehatan.",
        en: "Patients increasingly look up health information on Google and AI assistants like ChatGPT. The lab needed strong organic visibility to appear, and be trusted, whenever people searched for health testing.",
      },
      strategy: {
        id: ["Audit SEO teknis dan perbaikan struktur website", "Konten edukasi kesehatan yang menjawab pertanyaan pasien", "Schema markup agar informasi mudah dipahami mesin pencari & AI", "Optimasi AEO/GEO supaya dikutip ChatGPT, Perplexity & Google AI Overviews"],
        en: ["Technical SEO audit and site structure fixes", "Health education content answering real patient questions", "Schema markup so search engines & AI understand the information", "AEO/GEO optimization to get cited by ChatGPT, Perplexity & Google AI Overviews"],
      },
      results: {
        id: ["5,34 juta impresi pencarian", "62 ribu klik ke website", "Menjadi sumber teratas yang direkomendasikan AI untuk pencarian kesehatan dalam 6 bulan"],
        en: ["5.34M search impressions", "62k clicks to the website", "Became a top AI-recommended source for health queries within 6 months"],
      },
    },
    {
      slug: "business-coaching",
      cats: ["paid"],
      g: "linear-gradient(150deg,#3a3d37,#111310)",
      icon: "target",
      chart: { bars: [62, 54, 46, 38, 31, 26] },
      industry: { id: "Business Coaching", en: "Business Coaching" },
      title: { id: "7.000+ leads, CPA turun ~51%", en: "7,000+ leads, CPA cut ~51%" },
      summary: {
        id: "Akuisisi tersegmentasi dengan dana Meta Ads Rp 2,5 M yang dikelola, sambil terus menurunkan biaya per pendaftar.",
        en: "Segmented acquisition across Rp 2.5B in managed Meta spend while steadily lowering cost per registrant.",
      },
      services: ["Meta Ads"],
      duration: { id: "Retainer bulanan", en: "Monthly retainer" },
      metrics: [
        { v: { id: "7.000+", en: "7,000+" }, l: { id: "Leads pendaftar", en: "Registrant leads" } },
        { v: { id: "~51%", en: "~51%" }, l: { id: "Penurunan CPA", en: "Lower CPA" } },
        { v: { id: "Rp 2,5 M", en: "Rp 2.5B" }, l: { id: "Dana Meta Ads dikelola", en: "Meta spend managed" } },
      ],
      challenge: {
        id: "Brand business coaching ini ingin menambah pendaftar program secara konsisten. Tantangannya: menjaga biaya per pendaftar tetap turun saat anggaran iklan terus dinaikkan.",
        en: "This business coaching brand wanted a steady flow of program registrants. The challenge: keep cost per registrant falling while ad budgets kept scaling up.",
      },
      strategy: {
        id: ["Segmentasi audiens berdasarkan tahap funnel", "Pengujian materi iklan dan pesan secara rutin", "Alokasi budget ke segmen dengan biaya per pendaftar terendah", "Laporan performa transparan setiap bulan"],
        en: ["Audience segmentation by funnel stage", "Continuous creative and messaging tests", "Budget shifted toward the lowest cost-per-registrant segments", "Transparent monthly performance reporting"],
      },
      results: {
        id: ["7.000+ leads pendaftar", "Biaya per akuisisi (CPA) turun sekitar 51%", "Rp 2,5 M dana Meta Ads dikelola"],
        en: ["7,000+ registrant leads", "Cost per acquisition (CPA) cut by ~51%", "Rp 2.5B in Meta spend managed"],
      },
    },
    {
      slug: "skincare-ibu-bayi",
      cats: ["paid", "social"],
      g: "linear-gradient(150deg,#ddb06f,#a8742f)",
      icon: "drop",
      chart: { line: "0,62 40,58 80,52 105,34 128,6 150,36 200,46" },
      industry: { id: "Skincare Ibu & Bayi", en: "Mom & Baby Skincare" },
      title: { id: "ROAS puncak ~6x", en: "~6x peak ROAS" },
      summary: {
        id: "Mengembangkan TikTok Ads sebagai channel penjualan baru selama puncak Ramadan–Lebaran dengan 2.500+ produk terjual.",
        en: "Scaled TikTok Ads as a new sales channel through the Ramadan–Lebaran peak with 2,500+ products sold.",
      },
      services: ["TikTok Ads", "Social Commerce"],
      duration: { id: "Musim Ramadan–Lebaran", en: "Ramadan–Lebaran season" },
      metrics: [
        { v: { id: "~6x", en: "~6x" }, l: { id: "ROAS puncak", en: "Peak ROAS" } },
        { v: { id: "2.500+", en: "2,500+" }, l: { id: "Produk terjual", en: "Products sold" } },
        { v: { id: "1", en: "1" }, l: { id: "Channel penjualan baru", en: "New sales channel" } },
      ],
      challenge: {
        id: "Brand skincare ibu & bayi ini ingin membuka TikTok sebagai channel penjualan baru, tepat saat musim belanja tersibuk: Ramadan hingga Lebaran.",
        en: "This mom & baby skincare brand wanted to open TikTok as a new sales channel, right at the busiest shopping season: Ramadan through Lebaran.",
      },
      strategy: {
        id: ["Membangun TikTok Ads sebagai channel penjualan dari awal", "Konten video pendek yang relevan dengan momen Ramadan", "Menaikkan budget bertahap mengikuti puncak permintaan", "Optimasi harian berdasarkan ROAS"],
        en: ["Set up TikTok Ads as a sales channel from scratch", "Short-form video content tied to the Ramadan moment", "Budget scaled in step with peak demand", "Daily optimization based on ROAS"],
      },
      results: {
        id: ["ROAS puncak sekitar 6x", "2.500+ produk terjual", "TikTok menjadi channel penjualan baru"],
        en: ["~6x peak ROAS", "2,500+ products sold", "TikTok established as a new sales channel"],
      },
    },
    {
      slug: "marketplace-otomotif",
      cats: ["paid"],
      g: "linear-gradient(150deg,#86a995,#3d6b57)",
      icon: "car",
      chart: { bars: [22, 32, 40, 50, 58, 66] },
      industry: { id: "Marketplace Otomotif", en: "Automotive Marketplace" },
      title: { id: "Rp 1,2 M dikelola, QLR 40–50%", en: "Rp 1.2B managed, 40–50% QLR" },
      summary: {
        id: "Membangun model akuisisi ganda B2B/B2C di Meta & Google untuk menyeimbangkan permintaan dan pasokan kendaraan.",
        en: "Built a dual B2B/B2C acquisition model across Meta & Google, balancing vehicle demand and supply.",
      },
      services: ["Meta Ads", "Google Ads"],
      duration: { id: "Retainer bulanan", en: "Monthly retainer" },
      metrics: [
        { v: { id: "Rp 1,2 M", en: "Rp 1.2B" }, l: { id: "Dana iklan dikelola", en: "Ad spend managed" } },
        { v: { id: "40–50%", en: "40–50%" }, l: { id: "Qualified lead rate", en: "Qualified lead rate" } },
        { v: { id: "B2B + B2C", en: "B2B + B2C" }, l: { id: "Model akuisisi", en: "Acquisition model" } },
      ],
      challenge: {
        id: "Marketplace otomotif membutuhkan dua sisi sekaligus: penjual kendaraan (pasokan) dan pembeli (permintaan). Kalau salah satu timpang, marketplace tidak berjalan.",
        en: "An automotive marketplace needs both sides at once: vehicle sellers (supply) and buyers (demand). If either side lags, the marketplace stalls.",
      },
      strategy: {
        id: ["Kampanye terpisah untuk B2B (pasokan) dan B2C (permintaan)", "Kombinasi Meta Ads dan Google Ads sesuai niat pencarian", "Penyesuaian budget untuk menyeimbangkan kedua sisi", "Fokus pada kualitas lead, bukan sekadar jumlah"],
        en: ["Separate campaigns for B2B (supply) and B2C (demand)", "Meta Ads and Google Ads matched to search intent", "Budget rebalancing to keep both sides healthy", "Focus on lead quality, not just volume"],
      },
      results: {
        id: ["Rp 1,2 M dana iklan dikelola", "Qualified lead rate 40–50%", "Model akuisisi ganda B2B/B2C yang seimbang"],
        en: ["Rp 1.2B in ad spend managed", "40–50% qualified lead rate", "A balanced dual B2B/B2C acquisition model"],
      },
    },
  ],

  posts: [
    {
      slug: "apa-itu-aeo-geo",
      cat: "seo",
      date: "2026-11-10",
      mins: 6,
      g: "linear-gradient(150deg,#2a8466,#0d3a2b)",
      title: { id: "Apa itu AEO & GEO? Cara agar brand Anda dikutip ChatGPT", en: "What are AEO & GEO? How to get your brand cited by ChatGPT" },
      excerpt: {
        id: "Pencarian kini tidak hanya di Google. Pelajari cara agar brand Anda muncul di jawaban ChatGPT, Perplexity, dan Google AI Overviews.",
        en: "Search is no longer just Google. Learn how to make your brand appear in answers from ChatGPT, Perplexity, and Google AI Overviews.",
      },
      body: {
        id: `<p>Semakin banyak orang bertanya langsung ke asisten AI, bukan lagi mengetik kata kunci di Google. Artinya, brand Anda perlu dikenali dan dikutip oleh AI, bukan hanya ranking di halaman pertama.</p>
<h2>SEO, AEO, dan GEO: apa bedanya?</h2>
<ul><li><b>SEO</b> (Search Engine Optimization): agar website ranking di hasil pencarian Google.</li><li><b>AEO</b> (Answer Engine Optimization): agar konten Anda dipilih sebagai jawaban langsung, misalnya di featured snippet.</li><li><b>GEO</b> (Generative Engine Optimization): agar brand Anda disebut dan dikutip oleh AI generatif seperti ChatGPT dan Perplexity.</li></ul>
<h2>3 langkah awal yang bisa Anda lakukan</h2>
<p><b>1. Jawab pertanyaan nyata.</b> Tulis konten yang menjawab pertanyaan pelanggan secara jelas dan ringkas di paragraf pertama.</p>
<p><b>2. Pakai schema markup.</b> Data terstruktur membantu mesin pencari dan AI memahami siapa Anda, apa layanan Anda, dan di mana lokasi Anda.</p>
<p><b>3. Bangun otoritas.</b> AI cenderung mengutip sumber yang sering disebut situs lain yang terpercaya. Liputan media, direktori industri, dan kolaborasi konten sangat membantu.</p>
<blockquote>SEO yang kuat tetap menjadi fondasi. AEO dan GEO adalah lapisan berikutnya agar brand Anda tetap terlihat di era pencarian AI.</blockquote>`,
        en: `<p>More and more people ask AI assistants directly instead of typing keywords into Google. That means your brand needs to be recognized and cited by AI, not just ranked on page one.</p>
<h2>SEO, AEO, and GEO: what's the difference?</h2>
<ul><li><b>SEO</b> (Search Engine Optimization): getting your website to rank in Google results.</li><li><b>AEO</b> (Answer Engine Optimization): getting your content picked as the direct answer, such as a featured snippet.</li><li><b>GEO</b> (Generative Engine Optimization): getting your brand mentioned and cited by generative AI like ChatGPT and Perplexity.</li></ul>
<h2>3 first steps you can take</h2>
<p><b>1. Answer real questions.</b> Write content that answers customer questions clearly and concisely in the first paragraph.</p>
<p><b>2. Use schema markup.</b> Structured data helps search engines and AI understand who you are, what you offer, and where you are.</p>
<p><b>3. Build authority.</b> AI tends to cite sources that other trusted sites mention often. Media coverage, industry directories, and content collaborations all help.</p>
<blockquote>Strong SEO is still the foundation. AEO and GEO are the next layer that keeps your brand visible in the age of AI search.</blockquote>`,
      },
    },
    {
      slug: "turunkan-cpa-meta-ads",
      cat: "paid",
      date: "2026-10-28",
      mins: 5,
      g: "linear-gradient(150deg,#3a3d37,#111310)",
      title: { id: "5 cara menurunkan CPA Meta Ads tanpa memotong budget", en: "5 ways to lower your Meta Ads CPA without cutting budget" },
      excerpt: {
        id: "Biaya per akuisisi terus naik? Ini lima langkah praktis yang kami pakai untuk menurunkan CPA sambil tetap menambah leads.",
        en: "Cost per acquisition keeps rising? Here are five practical steps we use to lower CPA while still growing leads.",
      },
      body: {
        id: `<p>CPA (cost per acquisition) yang tinggi sering membuat bisnis memotong budget iklan. Padahal, masalahnya biasanya ada di struktur kampanye, bukan di besarnya anggaran.</p>
<h2>1. Segmentasi berdasarkan tahap funnel</h2><p>Pisahkan audiens yang baru kenal brand Anda dengan audiens yang sudah pernah berinteraksi. Pesan untuk keduanya harus berbeda.</p>
<h2>2. Uji materi iklan secara rutin</h2><p>Materi iklan cepat "lelah". Siapkan beberapa variasi visual dan headline setiap minggu, lalu pertahankan yang terbaik.</p>
<h2>3. Perbaiki landing page</h2><p>Iklan yang bagus akan sia-sia jika halaman tujuannya lambat atau membingungkan. Satu halaman, satu tujuan, satu tombol aksi.</p>
<h2>4. Pindahkan budget ke segmen terbaik</h2><p>Evaluasi biaya per hasil di tiap segmen, lalu alihkan anggaran secara bertahap ke segmen yang paling efisien.</p>
<h2>5. Ukur hasil yang benar</h2><p>Pastikan pixel dan konversi tercatat dengan tepat. Optimasi hanya sebaik data yang Anda miliki.</p>
<blockquote>Dengan pendekatan ini, salah satu klien business coaching kami mendapatkan 7.000+ leads dengan CPA turun sekitar 51%.</blockquote>`,
        en: `<p>A high CPA (cost per acquisition) often pushes businesses to cut ad budgets. But the problem is usually campaign structure, not the size of the budget.</p>
<h2>1. Segment by funnel stage</h2><p>Separate people who are new to your brand from those who have already engaged. Each group needs a different message.</p>
<h2>2. Test creatives regularly</h2><p>Ad creatives fatigue fast. Prepare a few new visual and headline variations every week, then keep the winners.</p>
<h2>3. Fix the landing page</h2><p>Great ads are wasted on a slow or confusing page. One page, one goal, one call to action.</p>
<h2>4. Shift budget to the best segments</h2><p>Review cost per result for each segment, then gradually move budget toward the most efficient ones.</p>
<h2>5. Measure the right results</h2><p>Make sure your pixel and conversions are tracked correctly. Optimization is only as good as your data.</p>
<blockquote>With this approach, one of our business coaching clients generated 7,000+ leads while cutting CPA by about 51%.</blockquote>`,
      },
    },
    {
      slug: "tiktok-ads-ramadan",
      cat: "social",
      date: "2026-10-14",
      mins: 5,
      g: "linear-gradient(150deg,#ddb06f,#a8742f)",
      title: { id: "Strategi TikTok Ads untuk musim Ramadan–Lebaran", en: "A TikTok Ads playbook for the Ramadan–Lebaran season" },
      excerpt: {
        id: "Ramadan adalah musim belanja terbesar di Indonesia. Begini cara menyiapkan TikTok Ads agar penjualan ikut melonjak.",
        en: "Ramadan is Indonesia's biggest shopping season. Here's how to prepare TikTok Ads so your sales rise with it.",
      },
      body: {
        id: `<p>Selama Ramadan hingga Lebaran, perilaku belanja online berubah drastis. Waktu aktif bergeser ke sahur dan menjelang berbuka, dan orang lebih siap membeli.</p>
<h2>Sebelum Ramadan: siapkan fondasi</h2><p>Mulai kampanye 2–4 minggu lebih awal untuk mengumpulkan data dan audiens. Siapkan stok konten video pendek dalam jumlah cukup.</p>
<h2>Selama Ramadan: ikuti momen</h2><ul><li>Buat konten yang relevan dengan momen: sahur, ngabuburit, persiapan Lebaran.</li><li>Naikkan budget bertahap mengikuti puncak permintaan.</li><li>Pantau ROAS setiap hari dan matikan iklan yang tidak efisien.</li></ul>
<h2>Menjelang Lebaran: dorong konversi</h2><p>Gunakan penawaran terbatas dan pengingat waktu pengiriman. Ini fase dengan niat beli paling tinggi.</p>
<blockquote>Strategi ini membantu brand skincare ibu & bayi mencapai ROAS puncak sekitar 6x dengan 2.500+ produk terjual.</blockquote>`,
        en: `<p>From Ramadan through Lebaran, online shopping behavior changes dramatically. Active hours shift to pre-dawn (sahur) and right before breaking the fast, and people are more ready to buy.</p>
<h2>Before Ramadan: build the foundation</h2><p>Start campaigns 2–4 weeks early to collect data and audiences. Prepare a solid stock of short-form videos.</p>
<h2>During Ramadan: ride the moments</h2><ul><li>Create content tied to the moments: sahur, waiting to break the fast, Lebaran prep.</li><li>Scale budget gradually with peak demand.</li><li>Check ROAS daily and pause inefficient ads.</li></ul>
<h2>Before Lebaran: push conversions</h2><p>Use limited-time offers and shipping-deadline reminders. This is the phase with the highest purchase intent.</p>
<blockquote>This strategy helped a mom & baby skincare brand reach a ~6x peak ROAS with 2,500+ products sold.</blockquote>`,
      },
    },
    {
      slug: "elemen-landing-page",
      cat: "web",
      date: "2026-09-30",
      mins: 4,
      g: "linear-gradient(150deg,#86a995,#3d6b57)",
      title: { id: "7 elemen landing page yang bikin pengunjung jadi pelanggan", en: "7 landing page elements that turn visitors into customers" },
      excerpt: {
        id: "Landing page adalah tempat iklan Anda berubah jadi penjualan. Pastikan tujuh elemen penting ini sudah ada.",
        en: "Your landing page is where ads become sales. Make sure these seven essential elements are in place.",
      },
      body: {
        id: `<p>Banyak bisnis fokus ke iklan, tapi lupa bahwa keputusan beli terjadi di landing page. Berikut tujuh elemen yang selalu kami pastikan ada.</p>
<ul><li><b>Headline yang jelas:</b> sebutkan manfaat utama dalam satu kalimat.</li><li><b>Satu tombol aksi utama:</b> jangan bingungkan pengunjung dengan banyak pilihan.</li><li><b>Bukti sosial:</b> angka hasil, logo klien, atau ulasan.</li><li><b>Kecepatan:</b> halaman harus terbuka dalam hitungan detik, terutama di HP.</li><li><b>Tampilan mobile:</b> sebagian besar pengunjung datang dari ponsel.</li><li><b>Form singkat:</b> minta data seperlunya saja.</li><li><b>Pelacakan konversi:</b> agar Anda tahu iklan mana yang benar-benar menghasilkan.</li></ul>
<h2>Mulai dari yang paling berdampak</h2><p>Jika waktu terbatas, perbaiki kecepatan dan tombol aksi lebih dulu. Dua hal ini biasanya memberi kenaikan konversi paling cepat.</p>`,
        en: `<p>Many businesses focus on ads but forget that the buying decision happens on the landing page. Here are seven elements we always make sure are there.</p>
<ul><li><b>A clear headline:</b> state the main benefit in one sentence.</li><li><b>One primary call to action:</b> don't confuse visitors with too many choices.</li><li><b>Social proof:</b> result numbers, client logos, or reviews.</li><li><b>Speed:</b> the page should load in seconds, especially on mobile.</li><li><b>Mobile-first layout:</b> most visitors arrive on their phones.</li><li><b>A short form:</b> ask only for what you need.</li><li><b>Conversion tracking:</b> so you know which ads actually deliver.</li></ul>
<h2>Start with the highest impact</h2><p>If time is tight, fix speed and the call to action first. These two usually give the fastest conversion lift.</p>`,
      },
    },
    {
      slug: "agen-ai-whatsapp",
      cat: "web",
      date: "2026-09-16",
      mins: 4,
      g: "linear-gradient(150deg,#1f6b52,#0b2f23)",
      icon: "ai",
      title: { id: "Agen AI WhatsApp: kapan bisnis Anda membutuhkannya?", en: "WhatsApp AI agents: when does your business need one?" },
      excerpt: {
        id: "Chat pelanggan menumpuk dan tim kewalahan? Agen AI WhatsApp bisa membantu, asal dipakai di situasi yang tepat.",
        en: "Customer chats piling up and your team overwhelmed? A WhatsApp AI agent can help, if used in the right situations.",
      },
      body: {
        id: `<p>WhatsApp adalah channel utama banyak bisnis di Indonesia. Saat jumlah chat terus bertambah, respons yang lambat bisa membuat calon pelanggan pergi.</p>
<h2>Tanda Anda butuh agen AI</h2><ul><li>Banyak pertanyaan yang sama diulang setiap hari (harga, jadwal, lokasi).</li><li>Chat masuk di luar jam kerja tidak terbalas.</li><li>Tim menghabiskan banyak waktu untuk menyalin data ke sistem lain.</li></ul>
<h2>Apa yang bisa dilakukan agen AI?</h2><p>Agen AI bisa menjawab pertanyaan umum berdasarkan dokumen bisnis Anda (teknologi RAG), mencatat data pelanggan, lalu meneruskan percakapan penting ke tim manusia.</p>
<h2>Mulai dari yang kecil</h2><p>Pilih satu alur yang paling sering terjadi, otomatiskan, lalu ukur hasilnya. Setelah berjalan baik, baru perluas ke alur lain dengan otomasi seperti n8n.</p>`,
        en: `<p>WhatsApp is the main channel for many businesses in Indonesia. As chat volume grows, slow replies can drive potential customers away.</p>
<h2>Signs you need an AI agent</h2><ul><li>The same questions repeat every day (pricing, schedules, location).</li><li>Chats outside business hours go unanswered.</li><li>Your team spends hours copying data into other systems.</li></ul>
<h2>What can an AI agent do?</h2><p>An AI agent can answer common questions based on your business documents (RAG technology), record customer details, and hand important conversations to your human team.</p>
<h2>Start small</h2><p>Pick the single most frequent flow, automate it, and measure the results. Once it works well, expand to other flows with automations such as n8n.</p>`,
      },
    },
  ],
};

/* Shared card renderers (used by home, blog and case-study pages) */
const CR = {
  logo: '<svg viewBox="64 44 176 244" fill="currentColor" aria-hidden="true"><rect x="72" y="53" width="108" height="17" rx="8.5"/><rect x="98" y="94" width="62" height="190" rx="31"/><circle cx="206" cy="254" r="27"/></svg>',
  L: {
    id: { min: "mnt baca", read: "Baca artikel", readCase: "Baca studi kasus", featured: "Artikel pilihan" },
    en: { min: "min read", read: "Read article", readCase: "Read case study", featured: "Featured" },
  },
  t: (o, lang) => (o && typeof o === "object" && !Array.isArray(o) ? o[lang] ?? o.en : o),
  date: (d, lang) => new Date(d + "T00:00:00").toLocaleDateString(lang === "id" ? "id-ID" : "en-US", { day: "numeric", month: "short", year: "numeric" }),
  chart(c) {
    if (!c) return "";
    if (c.line) return `<svg class="visual__chart" viewBox="0 0 200 70" preserveAspectRatio="none"><path class="ar" d="M${c.line} L200,70 L0,70 Z"/><path class="ln" d="M${c.line}"/></svg>`;
    return `<svg class="visual__chart" viewBox="0 0 200 70" preserveAspectRatio="none">${c.bars
      .map((h, i) => `<rect x="${i * 34 + 4}" y="${70 - h}" width="22" height="${h}" rx="5" style="animation-delay:${i * 0.08}s"/>`)
      .join("")}</svg>`;
  },
  postIcon: (p) => C_ICONS[p.icon || p.cat],
  postCard(p, lang, base, featured) {
    const t = (o) => CR.t(o, lang), L = CR.L[lang];
    return `<a class="pcard${featured ? " pcard--featured" : ""}" href="${base}blog/post.html?p=${p.slug}">
      <div class="pcard__cover" style="background:${p.g}">
        <span class="pcard__mark">${CR.logo}</span>
        <span class="visual__ico pcard__ico">${CR.postIcon(p)}</span>
        <span class="pcard__cat">${featured ? L.featured + " · " : ""}${t(CONTENT.cats[p.cat])}</span>
      </div>
      <div class="pcard__body">
        <p class="pcard__meta">${CR.date(p.date, lang)} · ${p.mins} ${L.min}</p>
        <h3>${t(p.title)}</h3>
        <p class="pcard__ex">${t(p.excerpt)}</p>
        <span class="pcard__more">${L.read} <i>→</i></span>
      </div>
    </a>`;
  },
  caseCard(c, lang, base) {
    const t = (o) => CR.t(o, lang), L = CR.L[lang];
    return `<a class="ccard" href="${base}studi-kasus/detail.html?c=${c.slug}">
      <div class="ccard__visual" style="background:${c.g}">
        <span class="pcard__mark">${CR.logo}</span>
        <span class="visual__ico">${C_ICONS[c.icon]}</span>
        <b class="ccard__big">${t(c.metrics[0].v)}</b>
        <span class="ccard__unit">${t(c.metrics[0].l)}</span>
        ${CR.chart(c.chart)}
      </div>
      <div class="ccard__body">
        <span class="rcard__tag">${t(c.industry)}</span>
        <h3>${t(c.title)}</h3>
        <p>${t(c.summary)}</p>
        <div class="tags">${c.services.map((s) => `<span>${s}</span>`).join("")}</div>
        <span class="pcard__more">${L.readCase} <i>→</i></span>
      </div>
    </a>`;
  },
};
