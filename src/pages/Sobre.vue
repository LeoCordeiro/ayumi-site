<template>
  <div>

    <section style="padding-top:64px;padding-bottom:40px">
      <div class="wrap">
        <div class="page-anim page-anim-1" style="margin-bottom:18px">
          <span class="sec-label">Sobre nós</span>
          <div class="sec-line"></div>
        </div>
        <h1 class="page-anim page-anim-2 page-h1">
          A Ayumi<br /><span style="color:#C9956C">Representações</span>
        </h1>
        <p class="page-anim page-anim-3 page-subtitle">
          Quem fabrica geralmente não tem dificuldade com o produto — a dificuldade maior é chegar até quem compra.
        </p>
      </div>
    </section>

    <section style="padding-top:16px;padding-bottom:48px;position:relative">
      <div class="wrap">
        <div class="grid-2" v-reveal>

          <!-- Info board -->
          <div class="info-board">
            <div class="info-board-header">
              <span class="dot-pulse"></span>
              <span style="font-size:12px;font-weight:600;color:#C9956C;letter-spacing:.04em">Ayumi Representações</span>
            </div>
            <div class="metrics-grid">
              <div class="metric-cell"><p class="metric-label">Sede</p><p class="metric-value">São Paulo, SP</p></div>
              <div class="metric-cell"><p class="metric-label">Fundação</p><p class="metric-value">Fev / 2024</p></div>
              <div class="metric-cell"><p class="metric-label">Segmentos</p><p class="metric-value">5 ativos</p></div>
              <div class="metric-cell"><p class="metric-label">Formalizado</p><p class="metric-value">Lei 4.886/65</p></div>
            </div>
            <div style="padding:18px 22px;border-top:1px solid rgba(255,255,255,0.06);background:rgba(201,149,108,0.05)">
              <p style="font-size:13px;color:#a3a3a3;line-height:1.65;font-style:italic">"A gente só ganha quando você vende. Nosso sucesso depende do seu."</p>
              <p style="font-size:11.5px;color:#C9956C;margin-top:8px;font-weight:500">— Tayssa Aiumy Cesário, Responsável</p>
            </div>
          </div>

          <!-- Text column -->
          <div>
            <p style="font-size:15px;color:#a3a3a3;line-height:1.7;margin-bottom:18px">Por isso criamos a Ayumi Representações. Trabalhamos com fornecedores que têm histórico e portfólio estruturado, conectando-os a compradores ativos em todo o Brasil.</p>
            <p style="font-size:14px;color:#737373;line-height:1.7;margin-bottom:28px">Cada representação é formalizada com contrato pela Lei 4.886/65, com proteção jurídica completa para o fabricante e para a Ayumi.</p>
            <router-link to="/solicitar" class="btn-copper">
              Fale com a Aiumy
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17L17 7m0 0H7m10 0v10"/></svg>
            </router-link>
            <div class="mini-stats" v-reveal="{ delay: 200 }">
              <div class="mini-stat" v-for="s in miniStats" :key="s.value">
                <p class="mini-stat-value">{{ s.value }}</p>
                <p class="mini-stat-label">{{ s.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding-top:32px;padding-bottom:80px">
      <div class="wrap">
        <div v-reveal style="margin-bottom:36px">
          <div class="eyebrow-row">
            <span class="sec-label">Diferenciais</span>
          </div>
          <div class="sec-line" style="margin-bottom:20px"></div>
          <h2 class="section-h2">Por que escolher a <span style="color:#C9956C">Ayumi</span></h2>
        </div>
        <div class="diffs-grid" v-reveal="{ stagger:true, interval:80 }">
          <div v-for="d in diffs" :key="d.title" class="diff-card">
            <div class="diff-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" v-html="d.icon"></svg>
            </div>
            <h3 style="font-size:13.5px;font-weight:600;color:#fff;margin-bottom:7px">{{ d.title }}</h3>
            <p style="font-size:13px;color:#737373;line-height:1.6">{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const miniStats = [
  { value: 'R$0', label: 'Custo fixo' },
  { value: '24h', label: 'Resposta' },
  { value: '100%', label: 'Formal' },
]
const diffs = [
  { title:'Zero custo fixo', desc:'A marca não paga nada antecipado. Comissão só sobre vendas fechadas.', icon:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>' },
  { title:'Rede de compradores', desc:'Acesso a lojistas, distribuidoras e redes com poder de compra real em todo o Brasil.', icon:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>' },
  { title:'Só ganhamos quando você vende', desc:'Sem venda, sem comissão. Nosso resultado depende diretamente do seu.', icon:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>' },
  { title:'Contrato formalizado', desc:'Toda representação segue Lei 4.886/65 com proteção jurídica completa.', icon:'<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
  { title:'Atendimento pessoal', desc:'Gestão direta, sem burocracia. Comunicação constante com responsável dedicada.', icon:'<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>' },
  { title:'Atuação nacional', desc:'De Norte a Sul — conectamos fabricantes a compradores em todo o Brasil.', icon:'<circle cx="12" cy="11" r="3"/><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>' },
]
</script>

<style scoped>
.sec-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#C9956C;display:block;margin-bottom:10px }
.sec-line  { height:1px;background:linear-gradient(to right,rgba(201,149,108,0.3),rgba(255,255,255,0.07),transparent) }
.page-h1   { font-size:clamp(2.2rem,5vw,4.5rem);font-weight:700;letter-spacing:-0.03em;line-height:1.08;color:#fff;margin-top:10px }
.page-subtitle { margin-top:16px;max-width:480px;font-size:16px;color:#a3a3a3;line-height:1.65 }
.eyebrow-row { display:flex;justify-content:space-between;margin-bottom:10px }
.section-h2  { font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:700;letter-spacing:-0.03em;color:#fff;line-height:1.1 }

.grid-2 { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start }
@media(max-width:900px){ .grid-2 { grid-template-columns:1fr } }

.info-board { border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;background:rgba(255,255,255,0.02) }
.info-board-header { padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.07);background:rgba(201,149,108,0.06);display:flex;align-items:center;gap:10px }
.dot-pulse { width:7px;height:7px;border-radius:50%;background:#C9956C;display:inline-block;animation:pulse 2s infinite }
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.metrics-grid { display:grid;grid-template-columns:1fr 1fr }
.metric-cell { padding:20px 22px;border-right:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06) }
.metric-cell:nth-child(2n){ border-right:none }
.metric-cell:nth-child(3),.metric-cell:nth-child(4){ border-bottom:none }
.metric-label { font-size:10.5px;text-transform:uppercase;letter-spacing:.12em;color:#525252;margin-bottom:6px;font-weight:500 }
.metric-value { font-size:15px;font-weight:600;color:#fff;letter-spacing:-0.01em }

.btn-copper { display:inline-flex;align-items:center;gap:7px;padding:11px 22px;border-radius:9999px;font-size:13px;font-weight:600;color:#111;background:linear-gradient(135deg,#C9956C,#E8C9A0);transition:transform .2s,box-shadow .2s }
.btn-copper:hover { transform:translateY(-2px);box-shadow:0 6px 24px rgba(201,149,108,0.35) }

.mini-stats { display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px }
.mini-stat { padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);text-align:center }
.mini-stat-value { font-size:1.5rem;font-weight:700;letter-spacing:-0.03em;color:#C9956C;line-height:1 }
.mini-stat-label { font-size:11px;color:#525252;margin-top:5px }

.diffs-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:14px }
@media(max-width:900px){ .diffs-grid { grid-template-columns:repeat(2,1fr) } }
@media(max-width:600px){ .diffs-grid { grid-template-columns:1fr } }

.diff-card { padding:20px;border-radius:14px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);transition:all .2s }
.diff-card:hover { border-color:rgba(201,149,108,0.2);background:rgba(201,149,108,0.04) }
.diff-icon { width:36px;height:36px;border-radius:9px;background:rgba(201,149,108,0.12);border:1px solid rgba(201,149,108,0.18);display:flex;align-items:center;justify-content:center;margin-bottom:12px }
</style>
