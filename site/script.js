(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const EMAIL = "drielson95@gmail.com";

  /* ================= Tema ================= */
  const root = document.documentElement;
  $("#themeBtn").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    $('meta[name="theme-color"]').content = next === "dark" ? "#0B0F14" : "#F3F4F6";
    try { localStorage.setItem("theme", next); } catch (e) { /* sem storage */ }
  });

  /* ================= Projetos ================= */
  const PROJECTS = [
    {
      id: "acesso", name: "Acesso Justiça", kind: "Marketplace jurídico", live: true, url: "acessojustica.com.br",
      short: "Conecta quem precisa de um advogado a especialistas de todo o Brasil, com triagem dos casos por IA.",
      tags: ["React", "Supabase", "OpenAI", "PIX"],
      nums: [["14", "áreas do Direito classificadas por IA"], ["260+", "migrations no banco de dados"], ["~90", "funções serverless"]],
      challenge: "Quem precisa de ajuda jurídica não sabe a quem recorrer. Do outro lado, advogados gastam tempo e dinheiro com contatos que não são da sua área nem da sua região.",
      solution: "Uma plataforma completa: o cidadão descreve o caso, a IA identifica a área do Direito e o sistema distribui para advogados da especialidade e da região, que participam por assinatura.",
      results: ["Triagem automática dos casos em 14 áreas do Direito", "Distribuição por área, região e plano do advogado", "Assinaturas recorrentes com cartão e PIX", "Aviso por e-mail e WhatsApp a cada novo caso"],
      tech: ["Banco PostgreSQL (Supabase) versionado em mais de 260 migrations, com segurança por perfil (RLS)", "Cerca de 90 funções serverless para IA, pagamentos, e-mails e integrações", "Classificação por LLM blindada para categorias válidas, sem caso sem destino", "Webhooks de pagamento com reconciliação automática"],
      stack: ["React", "TypeScript", "PostgreSQL", "Supabase", "Deno", "OpenAI", "Stripe", "Mercado Pago"],
      link: ["Visitar acessojustica.com.br", "https://www.acessojustica.com.br"],
    },
    {
      id: "galvapro", name: "GalvaPro", kind: "Gestão de produção industrial", live: true, url: "galvapro.space",
      short: "Digitalizou o chão de fábrica de uma indústria de galvanoplastia: cada lote rastreado da entrada à entrega.",
      tags: ["React", "PostgreSQL", "RLS", "Serverless"],
      nums: [["4", "etapas de produção rastreadas"], ["10", "perfis de acesso por função"], ["Ponta a ponta", "da entrada ao financeiro"]],
      challenge: "A produção era controlada em papel e planilhas. Não dava para saber onde cada lote estava, quanto pesava em cada etapa nem quanto cada cliente devia.",
      solution: "Um sistema web com quadro de produção por etapas, registro de peso, tela de expedição para tablet, pedidos de venda, cheques, contas a pagar e relatórios gerenciais.",
      results: ["Cada lote rastreado em 4 etapas, com histórico de peso auditável", "Cada funcionário vê apenas a sua etapa", "Entrega de um pedido inteiro com um toque", "Relatórios de faturamento, clientes e despesas em PDF"],
      tech: ["Modelagem PostgreSQL com Row Level Security e 10 papéis de acesso", "Escritas validadas em funções serverless antes de gravar no banco", "Migração de SSR para SPA em Vite, simplificando o deploy", "Rotinas resilientes a migrações de banco ainda não aplicadas"],
      stack: ["React 19", "TypeScript", "PostgreSQL", "Supabase", "Vercel"],
      link: ["Visitar galvapro.space", "https://galvapro.space"],
    },
    {
      id: "reportb", name: "ReportB", kind: "Engenharia de dados de mídia paga", live: true, url: "reportb · painel",
      short: "Pipeline que une Meta Ads e Google Ads num só modelo de dados, com um agente de IA que analisa e ajusta campanhas.",
      tags: ["Python", "PostgreSQL", "Ads APIs", "Agente IA"],
      nums: [["2", "plataformas num modelo único"], ["~196/mês", "conversões falsas encontradas"], ["100%", "das alterações com confirmação"]],
      challenge: "Quem anuncia vê os dados em painéis separados, com métricas calculadas de formas diferentes, e otimizar campanhas exige tempo e um especialista.",
      solution: "Um pipeline que reúne os dados das duas plataformas num modelo único e consistente, e um agente de IA que diagnostica, sugere e aplica ajustes, sempre pedindo confirmação antes.",
      results: ["Encontrou cerca de 196 conversões falsas por mês em um cliente real", "Corrigiu anúncios que levavam à página errada", "Métricas comparáveis entre Meta e Google no mesmo painel"],
      tech: ["Ingestão incremental e idempotente via Google Ads API (GAQL) e Meta Graph API", "Fato na granularidade dia × plataforma × anúncio, com chave composta", "CTR, CPA e ROAS calculados na leitura, nunca persistidos", "Agente via MCP com prévia, confirmação, teto de orçamento e log de auditoria"],
      stack: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Google Ads API", "Graph API", "MCP"],
    },
    {
      id: "turin", name: "Turin Gestão", kind: "SaaS para delivery e varejo", live: true, url: "turinpdv.com.br",
      short: "Cardápio online, pedidos em tempo real e frente de caixa num só sistema para pequenos negócios.",
      tags: ["Next.js", "Realtime", "Multi-tenant", "PWA"],
      nums: [["2", "segmentos no mesmo sistema"], ["31", "migrations com isolamento por loja"], ["Offline", "caixa vende sem internet"]],
      challenge: "Lojas de bairro usam várias ferramentas soltas para caixa, estoque, fiado e delivery, e pagam por todas elas.",
      solution: "Um sistema que se adapta ao ramo: delivery com cardápio online e frete automático, ou mercado com caixa rápido, estoque e fiado. Funciona no computador, no tablet e no celular.",
      results: ["Pedidos chegam na hora, com alerta sonoro", "Frete calculado pelo CEP do cliente", "Caixa continua vendendo mesmo sem internet", "Comanda impressa em impressora térmica"],
      tech: ["Multi-tenant com tenant_id e Row Level Security em todas as tabelas", "Pedidos em tempo real via Supabase Realtime (WebSocket)", "Geocodificação em cascata com 3 fontes e guarda de sanidade", "Datas calculadas no fuso do Brasil, não no UTC do servidor"],
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Zod", "Stripe", "PWA"],
      link: ["Visitar turinpdv.com.br", "https://www.turinpdv.com.br"],
    },
    {
      id: "curadoria", name: "Curadoria", kind: "IA para seleção de executivos", live: true, url: "curadoria · executive search",
      short: "Pipeline de RAG que lê currículos e indica os três melhores candidatos para uma vaga de liderança em cerca de um minuto.",
      tags: ["RAG", "LangGraph", "ChromaDB", "GCP"],
      nums: [["~1 min", "por análise"], ["100%", "das citações conferidas"], ["0,90", "MRR da busca semântica"]],
      challenge: "Selecionar executivos exige horas lendo currículos, e cada indicação precisa ser justificada para o cliente com evidências.",
      solution: "Um agente que compara a vaga com a base de currículos e escreve um parecer em que cada argumento aponta o trecho exato do currículo de onde saiu.",
      results: ["Cerca de 1 minuto e US$ 0,26 por análise", "100% das citações conferidas automaticamente", "Dados pessoais removidos antes de chegar à IA"],
      tech: ["Chunking por frase e embeddings multilíngues locais, com busca no ChromaDB e fusão RRF", "Benchmark próprio: busca híbrida 0,69 × semântica 0,90 de MRR, e o dado decidiu", "56 testes automatizados, incluindo auditoria de viés", "Infraestrutura no GCP com Terraform e CI no GitHub Actions"],
      stack: ["Python", "LangGraph", "Claude", "ChromaDB", "Pydantic", "GCP", "Terraform"],
      link: ["Ver código no GitHub", "https://github.com/Dbenas/Ex-search"],
    },
    {
      id: "governanca", group: "dados", name: "Governança de Dados", kind: "Gestora de ativos de um grande banco", live: true, liveLabel: "Em uso interno", url: "painel · governança de dados",
      art: "sankey", note: "Imagem ilustrativa: os dados do cliente são sigilosos e não são exibidos.",
      short: "Painéis que mostram de onde vêm, por onde passam e para onde vão os dados de uma gestora de ativos de grande banco.",
      tags: ["Python", "pandas", "Regex", "SVG/JS"],
      nums: [["2", "painéis interativos complementares"], ["Sankey", "linhagem origem → destino"], ["Automático", "atualização agendada e publicada"]],
      challenge: "A gestora precisava enxergar como os dados circulam entre áreas e sistemas, mas a informação estava espalhada em formulários e planilhas preenchidos por cada área, em texto livre.",
      solution: "Um pipeline em Python que lê as respostas, padroniza e categoriza cada origem, tratamento e destino, e gera dois painéis interativos com linhagem em Sankey, matriz área × sistema e a jornada completa de cada dado.",
      results: ["Visão clara da linhagem dos dados por área e por sistema", "Contagens confiáveis, sem duplicidade nem categorias fragmentadas", "Atualização automatizada e agendada, publicada em pasta corporativa", "Painéis em uso interno, abrindo com um clique e funcionando offline"],
      tech: ["Categorização canônica por regras (regex) sobre texto livre, contando cada resposta uma vez por categoria", "Leitura tolerante de colunas e tratamento de planilha real: células mescladas, limpeza e seleção automática da aba", "Gráficos próprios em SVG/JS: barras, rosca, Sankey interativo e a “trilha do dado” em linha do tempo serpenteada", "Gerador Python + template HTML com saída 100% autocontida; contagens validadas com Python e Node.js antes de publicar"],
      stack: ["Python", "pandas", "Regex", "JavaScript", "SVG", "Power Automate", "Task Scheduler"],
    },
    {
      id: "auditoria", group: "dados", name: "Auditoria de Prontuários", kind: "Saúde pública · Atenção Primária", live: true, liveLabel: "Entregue · Fase 1", url: "painel · auditoria emulti",
      art: "bars", note: "Imagem ilustrativa: os dados de saúde são sigilosos e não são exibidos.",
      short: "Auditoria dos atendimentos da equipe multiprofissional em mais de 30 Unidades Básicas de Saúde, da extração via API ao painel de metas em Power BI.",
      tags: ["Python", "pandas", "API REST", "Power BI"],
      nums: [["30+", "unidades de saúde cobertas"], ["615", "atendimentos auditados"], ["8% a 111%", "variação da meta entre unidades"]],
      challenge: "Uma organização social de saúde precisava saber se os atendimentos da equipe multiprofissional estavam registrados corretamente em prontuário e se cada unidade cumpria a meta pactuada. A conferência era manual e fragmentada.",
      solution: "Conduzi reuniões com a coordenação e as equipes técnicas para definir regras de negócio e o dicionário de dados, extraí os registros por API, tratei e analisei tudo em Python e entreguei um painel em Power BI com a visão por unidade, profissional e tipo de atendimento.",
      results: ["Visão única e auditável da produção da equipe multiprofissional", "Unidades críticas e acima da meta identificadas em segundos", "Categorias profissionais sub-representadas evidenciadas", "Regras de negócio documentadas, base para as próximas fases"],
      tech: ["Extração via API REST com Python (requests), sem planilhas intermediárias", "Limpeza e padronização de profissionais, tipos de atendimento e unidades com pandas", "Validação de consistência: totais por categoria e por tipo fecham com o total geral", "Modelo de dados e medidas DAX no Power BI, com filtros por unidade, período, ano e mês"],
      stack: ["Python", "pandas", "requests", "API REST", "Power BI", "DAX"],
    },
  ];

  const ribbon = (x1, a1, b1, x2, a2, b2, cls) => {
    const m = (x1 + x2) / 2;
    return `<path class="rb ${cls}" d="M${x1} ${a1} C${m} ${a1} ${m} ${a2} ${x2} ${a2} L${x2} ${b2} C${m} ${b2} ${m} ${b1} ${x1} ${b1}Z"/>`;
  };
  const barsArt = () => {
    const ends = [600, 575, 520, 470, 410, 340, 250, 150], meta = 560;
    const rows = ends.map((x, i) => {
      const y = 38 + i * 34;
      return `<text x="98" y="${y + 15}" text-anchor="end">UBS ${String.fromCharCode(65 + i)}</text><rect class="bar${x >= meta ? " a" : ""}" x="110" y="${y}" width="${x - 110}" height="22" rx="3"/>`;
    }).join("");
    return `<svg class="art" viewBox="0 0 700 350" role="img" aria-label="Ilustração de painel: percentual da meta por unidade de saúde">
      ${rows}<line class="meta" x1="${meta}" y1="26" x2="${meta}" y2="318"/><text x="${meta}" y="18" text-anchor="middle">META</text>
      <text x="350" y="340" text-anchor="middle">% DA META POR UNIDADE</text></svg>`;
  };
  const ART = {
    bars: barsArt(),
    sankey: `<svg class="art" viewBox="0 0 700 350" role="img" aria-label="Ilustração de linhagem de dados: origens, tratamentos e destinos">
      ${ribbon(84, 60, 100, 343, 70, 110, "a")}${ribbon(84, 100, 130, 343, 190, 220, "")}${ribbon(84, 150, 200, 343, 110, 160, "")}${ribbon(84, 220, 300, 343, 220, 300, "b")}
      ${ribbon(357, 70, 120, 616, 50, 100, "a")}${ribbon(357, 120, 160, 616, 130, 175, "")}${ribbon(357, 190, 250, 616, 175, 220, "b")}${ribbon(357, 250, 300, 616, 240, 290, "a")}
      <rect class="nd" x="70" y="60" width="14" height="70" rx="2"/><rect class="nd" x="70" y="150" width="14" height="50" rx="2"/><rect class="nd" x="70" y="220" width="14" height="80" rx="2"/>
      <rect class="nd" x="343" y="70" width="14" height="100" rx="2"/><rect class="nd" x="343" y="190" width="14" height="110" rx="2"/>
      <rect class="nd" x="616" y="50" width="14" height="50" rx="2"/><rect class="nd" x="616" y="130" width="14" height="90" rx="2"/><rect class="nd" x="616" y="240" width="14" height="50" rx="2"/>
      <text x="77" y="332" text-anchor="middle">ORIGEM</text><text x="350" y="332" text-anchor="middle">TRATAMENTO</text><text x="623" y="332" text-anchor="middle">DESTINO</text>
    </svg>`,
  };
  const shot = (p, eager) => `
    <span class="shot"><span class="shot-frame">
      <span class="shot-bar"><i></i><i></i><i></i><span>${p.url}</span></span>
      ${p.art ? ART[p.art] : `<img src="assets/projetos/${p.id}.webp" alt="Tela do ${p.name}" width="1400" height="700" ${eager ? "" : 'loading="lazy"'} decoding="async">`}
    </span></span>`;
  const statusLabel = p => p.live ? (p.liveLabel || "Em produção") : p.status;
  const statusHtml = p => p.live
    ? `<span class="status"><i class="dot" aria-hidden="true"></i>${statusLabel(p)}</span>`
    : `<span class="status dev">${p.status}</span>`;

  const card = (p, i, list) => `
    <button class="proj reveal${i === 0 && list.length % 2 ? " featured" : ""}" type="button" data-id="${p.id}" aria-haspopup="dialog">
      ${shot(p, false)}
      <span class="proj-info">
        <span class="proj-top"><span>${p.kind}</span>${statusHtml(p)}</span>
        <h3>${p.name}</h3>
        <span class="proj-short">${p.short}</span>
        <span class="proj-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</span>
        <span class="proj-more">Ver detalhes <span aria-hidden="true">→</span></span>
      </span>
    </button>`;
  $("#projCount").textContent = PROJECTS.length;
  $("#projects").innerHTML = PROJECTS.filter(p => p.group !== "dados").map(card).join("");
  $("#projectsData").innerHTML = PROJECTS.filter(p => p.group === "dados").map(card).join("");

  /* ================= Painel do projeto ================= */
  const sheet = $("#sheet");
  const body = $("#sheetBody");
  let trigger = null;

  function openProject(id, from) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    trigger = from || null;
    body.innerHTML = `
      <div class="sheet-close"><span>Projeto · ${PROJECTS.indexOf(p) + 1}/${PROJECTS.length}</span><button class="sheet-x" type="button" data-close aria-label="Fechar">✕</button></div>
      ${shot(p, true)}
      ${p.note ? `<p class="shot-note">${p.note}</p>` : ""}
      <div class="sheet-head">
        <p class="eyebrow"><span>${p.kind}</span> · ${statusLabel(p)}</p>
        <h2 id="sheetTitle">${p.name}</h2>
        <p>${p.short}</p>
      </div>
      <div class="sheet-nums">${p.nums.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("")}</div>
      <div class="sheet-sec"><h3>O desafio</h3><p>${p.challenge}</p></div>
      <div class="sheet-sec"><h3>A solução</h3><p>${p.solution}</p></div>
      <div class="sheet-sec"><h3>O resultado</h3><ul class="results">${p.results.map(r => `<li>${r}</li>`).join("")}</ul></div>
      <div class="sheet-sec"><h3>Detalhes técnicos</h3>
        <div class="tech"><ul>${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div></div>
      </div>
      <div class="sheet-ctas">
        ${p.link ? `<a class="btn btn-line" href="${p.link[1]}" target="_blank" rel="noopener">${p.link[0]} ↗</a>` : ""}
        <a class="btn btn-accent" href="#contato" data-close>Quero algo assim</a>
      </div>`;
    sheet.showModal();
    sheet.scrollTop = 0;
  }
  function closeSheet() {
    if (!sheet.open || sheet.classList.contains("closing")) return;
    if (reduceMotion) { sheet.close(); return; }
    sheet.classList.add("closing");
    sheet.addEventListener("animationend", () => { sheet.classList.remove("closing"); sheet.close(); }, { once: true });
  }
  sheet.addEventListener("close", () => trigger?.focus({ preventScroll: true }));
  sheet.addEventListener("cancel", e => { e.preventDefault(); closeSheet(); });
  sheet.addEventListener("click", e => { if (e.target === sheet || e.target.closest("[data-close]")) closeSheet(); });
  $("#projetos").addEventListener("click", e => {
    const el = e.target.closest(".proj");
    if (el) openProject(el.dataset.id, el);
  });

  /* ================= Trajetória ================= */
  const ROLES = [
    ["2026 — hoje", "Cientista de Dados Sênior", "Plataforma de dados no Azure: Databricks, Data Factory, Data Lake, governança e otimização de custo de compute."],
    ["2025 — 2026", "Cientista de Dados Sênior", "Pipelines de ETL, KPIs e dashboards, e machine learning com vendas e geodados para prever produção."],
    ["2025", "Engenheiro de Dados", "Pipelines integrando sistemas, modelagem em PostgreSQL e BI em Tableau."],
    ["2021 — 2024", "Cientista de Dados Sênior", "Pipelines escaláveis, integração de múltiplas fontes e análises preditivas."],
    ["2019 — 2021", "Analista de Dados Sênior", "Modelos preditivos para prazos de obras e machine learning aplicado a materiais."],
    ["2011 — 2019", "Analista de Sistemas", "Desenvolvimento e suporte de sistemas."],
  ];
  const CERTS = [
    ["Advanced Machine Learning Operations", "Databricks"],
    ["Engenharia de Dados", "Data Science Academy"],
    ["Álgebra Linear para Ciência de Dados", "FGV"],
    ["Probabilidade e Estatística", "Data Science Academy"],
    ["Power BI para Business Intelligence", "Data Science Academy"],
    ["Sistemas de Banco de Dados", "DIO"],
    ["DBA", "Oracle Cloud"],
    ["APIs com Postman", "FGV"],
  ];
  $("#roles").innerHTML = ROLES.map(([t, r, d]) => `<li class="reveal"><time>${t}</time><div><b>${r}</b><p>${d}</p></div></li>`).join("");
  $("#certs").innerHTML = CERTS.map(([n, by]) => `<li class="reveal">${n}<em>${by}</em></li>`).join("");

  /* ================= Menu mobile ================= */
  const nav = $("#nav");
  const menuBtn = $("#menuBtn");
  const setMenu = open => {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  /* ================= Contato ================= */
  const toast = $("#toast");
  let tt;
  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.textContent = "E-mail copiado";
      toast.classList.add("show");
      clearTimeout(tt);
      tt = setTimeout(() => toast.classList.remove("show"), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  });

  const clock = $("#clock");
  const fmt = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
  const tick = () => { const [h, m] = fmt.format(new Date()).split(":"); clock.innerHTML = `${h}<b>:</b>${m}`; };
  tick();
  setInterval(tick, 15000);
  $("#year").textContent = new Date().getFullYear();

  /* ================= Scroll ================= */
  const topbar = $(".topbar");
  const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      const sib = [...en.target.parentElement.children];
      en.target.style.transitionDelay = `${Math.min(sib.indexOf(en.target), 5) * 60}ms`;
      en.target.classList.add("in");
      setTimeout(() => { en.target.style.transitionDelay = ""; }, 1200);
      io.unobserve(en.target);
    }), { rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(el => io.observe(el));

    const links = $$(".nav a");
    const spy = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => spy.observe(s));
  } else {
    $$(".reveal").forEach(el => el.classList.add("in"));
  }
})();
