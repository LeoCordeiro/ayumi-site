<template>
  <div>

    <!-- Header -->
    <section style="padding-top:64px;padding-bottom:36px">
      <div class="wrap" style="max-width:900px">
        <div class="page-anim page-anim-1 eyebrow-row">
          <span class="eyebrow-label">Legal</span>
          <div class="eyebrow-line"></div>
        </div>
        <h1 class="page-anim page-anim-2 page-h1">Modelo de Comissão</h1>
        <p class="page-anim page-anim-3 page-sub">Transparência total sobre como nossa remuneração funciona.</p>
      </div>
    </section>

    <!-- Stats rápidas -->
    <section style="padding-top:0;padding-bottom:32px">
      <div class="wrap" style="max-width:900px">
        <div class="stats-trio page-anim page-anim-4">
          <div class="stat-item">
            <p class="stat-val">R$&thinsp;0</p>
            <p class="stat-lbl">Custo antecipado</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <p class="stat-val">3–12%</p>
            <p class="stat-lbl">Faixa de comissão</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <p class="stat-val">5</p>
            <p class="stat-lbl">Segmentos ativos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabela de comissões -->
    <section style="padding-bottom:20px">
      <div class="wrap" style="max-width:900px">
        <div class="p-card" v-reveal>
          <div class="p-card-header">
            <div>
              <h2 class="p-card-title">Comissão por segmento</h2>
              <p class="p-card-sub">Calculada sobre o valor total do pedido realizado.</p>
            </div>
          </div>
          <div class="seg-list">
            <div v-for="s in segments" :key="s.name" class="seg-row">
              <div class="seg-info">
                <p class="seg-name">{{ s.name }}</p>
                <p class="seg-desc">{{ s.desc }}</p>
              </div>
              <div class="seg-bar-wrap">
                <div class="seg-bar-track">
                  <div class="seg-bar-fill" :style="{ width: s.pct }"></div>
                </div>
                <span class="seg-pct">{{ s.range }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Regras de cálculo -->
    <section style="padding-bottom:20px">
      <div class="wrap" style="max-width:900px">
        <div class="p-card" v-reveal>
          <h2 class="p-card-title" style="margin-bottom:20px">Regras de cálculo</h2>
          <ul class="rule-list">
            <li v-for="r in rules" :key="r" class="rule-item">
              <span class="rule-dot" aria-hidden="true"></span>
              {{ r }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Nota informativa -->
    <section style="padding-bottom:64px">
      <div class="wrap" style="max-width:900px">
        <div class="info-note" v-reveal>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p>Toda representação é formalizada com contrato contendo as comissões acordadas. Você receberá uma proposta personalizada após a primeira conversa.</p>
        </div>
        <div v-reveal style="text-align:center;margin-top:36px">
          <router-link to="/solicitar" class="btn-cta-page">
            Receba sua proposta personalizada
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const segments = [
  { name:'Moda e Vestuário',       desc:'Confecções, coleções, multimarcas',   range:'8–12%', pct:'90%' },
  { name:'Calçados e Acessórios',  desc:'Calçados, bolsas, cintos, bijuterias',range:'7–10%', pct:'75%' },
  { name:'Cosméticos e Beleza',    desc:'Beleza, higiene, maquiagem',          range:'5–8%',  pct:'60%' },
  { name:'Casa e Utilidades',      desc:'Artigos para o lar e decoração',      range:'5–8%',  pct:'55%' },
  { name:'Alimentos e Confeitaria',desc:'Doces, padaria, conservas',           range:'3–5%',  pct:'38%' },
]
const rules = [
  'Comissão calculada sobre o valor total em reais do pedido.',
  'Incide somente quando a venda é efetivamente realizada.',
  'Sem retenção mensal, taxa de manutenção ou custo fixo.',
  'Pagamento via transferência bancária após confirmação do pedido ou por acordo bilateral.',
  'Percentual exato definido em contrato antes do início da representação.',
]
</script>

<style scoped>
.eyebrow-row  { margin-bottom: 18px; }
.eyebrow-label{ font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#C9956C;display:block;margin-bottom:10px }
.eyebrow-line { height:1px;background:linear-gradient(to right,rgba(201,149,108,0.3),rgba(255,255,255,0.07),transparent) }
.page-h1      { font-size:clamp(2rem,5vw,3.6rem);font-weight:700;letter-spacing:-0.03em;line-height:1.08;color:#fff;margin-bottom:12px }
.page-sub     { font-size:15px;color:#737373;line-height:1.65;max-width:480px }

/* Stats */
.stats-trio {
  display: flex;
  align-items: center;
  gap: 0;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
}
.stat-item {
  flex: 1;
  padding: 24px 20px;
  text-align: center;
}
.stat-val  { font-size:2rem;font-weight:800;letter-spacing:-0.04em;color:#C9956C;line-height:1 }
.stat-lbl  { font-size:11px;color:#525252;margin-top:6px;font-weight:500 }
.stat-divider { width:1px;height:56px;background:rgba(255,255,255,0.07);flex-shrink:0 }

/* Card padrão */
.p-card {
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
  padding: 28px 32px;
}
.p-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.p-card-title { font-size:16px;font-weight:600;color:#fff }
.p-card-sub   { font-size:13px;color:#737373;margin-top:4px }

/* Segment rows */
.seg-list { display:flex;flex-direction:column;gap:16px }
.seg-row  { display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap }
.seg-info { min-width:160px }
.seg-name { font-size:14px;font-weight:500;color:#e2e2e2 }
.seg-desc { font-size:12px;color:#525252;margin-top:3px }
.seg-bar-wrap { display:flex;align-items:center;gap:12px;flex:1;min-width:140px }
.seg-bar-track{ flex:1;height:6px;border-radius:9999px;background:rgba(255,255,255,0.08);overflow:hidden }
.seg-bar-fill { height:100%;border-radius:9999px;background:linear-gradient(90deg,#C9956C,#E8C9A0);transition:width .6s }
.seg-pct { font-size:13px;font-weight:700;color:#C9956C;width:52px;text-align:right;flex-shrink:0 }

/* Rules */
.rule-list { display:flex;flex-direction:column;gap:14px }
.rule-item { display:flex;align-items:flex-start;gap:12px;font-size:14px;color:#a3a3a3;line-height:1.6 }
.rule-dot  { width:6px;height:6px;border-radius:50%;background:#C9956C;flex-shrink:0;margin-top:7px }

/* Info note */
.info-note {
  display:flex;align-items:flex-start;gap:14px;
  padding:20px 24px;border-radius:14px;
  border:1px solid rgba(201,149,108,0.2);
  background:rgba(201,149,108,0.07);
  font-size:14px;color:#a3a3a3;line-height:1.65;
}

/* CTA button */
.btn-cta-page {
  display:inline-flex;align-items:center;gap:8px;
  padding:14px 28px;border-radius:9999px;
  font-size:14px;font-weight:700;color:#fff;
  background:linear-gradient(135deg,#C9956C,#B8845B);
  box-shadow:0 0 28px rgba(201,149,108,0.35);
  text-decoration:none;
  transition:transform .2s,box-shadow .2s;
}
.btn-cta-page:hover { transform:translateY(-2px);box-shadow:0 0 40px rgba(201,149,108,0.5) }

@media(max-width:640px){
  .p-card { padding:20px 18px }
  .seg-row { flex-direction:column;align-items:flex-start;gap:10px }
  .seg-bar-wrap { width:100% }
  .stats-trio { flex-direction:column;gap:0 }
  .stat-divider { width:100%;height:1px }
}
</style>
