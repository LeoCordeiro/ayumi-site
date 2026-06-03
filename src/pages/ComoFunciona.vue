<template>
  <div>

    <section style="padding-top:64px;padding-bottom:40px">
      <div class="wrap">
        <div class="page-anim page-anim-1" style="margin-bottom:18px">
          <span class="sec-label">Como funciona</span>
          <div class="sec-line"></div>
        </div>
        <div class="page-anim page-anim-2" style="display:flex;flex-wrap:wrap;align-items:center;gap:16px">
          <h1 style="font-size:clamp(2.2rem,5vw,4.5rem);font-weight:700;letter-spacing:-0.03em;line-height:1.08;color:#fff">Como funciona.</h1>
          <span style="width:1px;height:48px;background:rgba(255,255,255,0.12);flex-shrink:0"></span>
          <p style="font-size:15px;color:#a3a3a3;max-width:260px;line-height:1.6">Como trabalhamos, do primeiro contato até a venda fechar.</p>
        </div>
      </div>
    </section>

    <section style="padding-top:8px;padding-bottom:48px">
      <div class="wrap">
        <div class="steps-wrapper">
          <div class="h-rule"></div>

          <!-- Steps 1-3 -->
          <div class="steps-row-3">
            <div v-for="step in steps.slice(0,3)" :key="step.n" class="step-card" v-reveal="{ delay: step.n * 70 }">
              <span class="step-badge">PASSO {{ step.n }}</span>
              <div class="step-icon" style="margin-top:10px;margin-bottom:18px">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" v-html="step.icon"></svg>
              </div>
              <h3 style="font-size:19px;font-weight:700;letter-spacing:-0.02em;color:#fff;margin-bottom:8px">{{ step.title }}</h3>
              <p style="font-size:13px;color:#737373;line-height:1.6;margin-bottom:14px;flex:1">{{ step.desc }}</p>
              <span class="actor-badge" :class="step.actor === 'Você faz' ? 'actor-copper' : step.actor === 'Sempre' ? 'actor-green' : 'actor-gray'">{{ step.actor }}</span>
            </div>
          </div>

          <div class="h-rule" style="margin-top:24px;margin-bottom:24px"></div>

          <!-- Steps 4-5 -->
          <div class="steps-row-2">
            <div v-for="step in steps.slice(3)" :key="step.n" class="step-card step-card-wide" v-reveal="{ delay: step.n * 70 }">
              <span class="step-badge">PASSO {{ step.n }}</span>
              <div style="display:flex;gap:18px;align-items:flex-start;padding-top:10px">
                <div class="step-icon" style="flex-shrink:0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" v-html="step.icon"></svg>
                </div>
                <div>
                  <h3 style="font-size:19px;font-weight:700;letter-spacing:-0.02em;color:#fff;margin-bottom:8px">{{ step.title }}</h3>
                  <p style="font-size:13px;color:#737373;line-height:1.6;margin-bottom:14px">{{ step.desc }}</p>
                  <span class="actor-badge" :class="step.actor === 'Você faz' ? 'actor-copper' : step.actor === 'Sempre' ? 'actor-green' : 'actor-gray'">{{ step.actor }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding-top:16px;padding-bottom:80px" v-reveal>
      <div class="wrap">
        <div class="cta-strip">
          <div class="cta-strip-grid"></div>
          <div style="position:relative;z-index:1;text-align:center">
            <h2 style="font-size:clamp(1.6rem,3vw,2.4rem);font-weight:700;letter-spacing:-0.03em;color:#fff;margin-bottom:10px">Pronto para começar?</h2>
            <p style="font-size:14px;color:#737373;max-width:360px;margin:0 auto 24px;line-height:1.65">Conhecemos seu catálogo, apresentamos os compradores certos e assinamos o contrato.</p>
            <router-link to="/solicitar" class="btn-primary">
              Agendar conversa
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const steps = [
  { n:1, title:'Primeiro contato', desc:'Você nos contacta via WhatsApp ou e-mail. Conversa rápida para entender seu portfólio, segmento e expectativas.', actor:'Você faz', icon:'<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>' },
  { n:2, title:'Apresentação da rede', desc:'Identificamos os compradores qualificados na nossa rede que combinam com seu produto e segmento.', actor:'A gente faz', icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
  { n:3, title:'Intermediação', desc:'Entramos em contato com os compradores, apresentamos seu portfólio e abrimos as negociações iniciais.', actor:'A gente faz', icon:'<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>' },
  { n:4, title:'Contrato e vendas', desc:'Você negocia e fecha diretamente com o comprador. Assinamos contrato de representação formalizado pela Lei 4.886/65.', actor:'Vocês fecham', icon:'<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
  { n:5, title:'Suporte contínuo', desc:'Acompanhamento permanente. Novas oportunidades, suporte em dúvidas e foco em manter o relacionamento ativo.', actor:'Sempre', icon:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>' },
]
</script>

<style scoped>
.sec-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#C9956C;display:block;margin-bottom:10px }
.sec-line  { height:1px;background:linear-gradient(to right,rgba(201,149,108,0.3),rgba(255,255,255,0.07),transparent) }

.steps-wrapper { border-radius:18px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.015);padding:28px 32px }
.h-rule { height:1px;background:rgba(255,255,255,0.07) }

.steps-row-3 { display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px }
@media(max-width:900px){ .steps-row-3 { grid-template-columns:1fr } }

.steps-row-2 { display:grid;grid-template-columns:repeat(2,1fr);gap:16px }
@media(max-width:900px){ .steps-row-2 { grid-template-columns:1fr } }

.step-card {
  position:relative;padding:22px 20px;border-radius:14px;
  background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);
  display:flex;flex-direction:column;transition:border-color .2s;
}
.step-card:hover { border-color:rgba(201,149,108,0.2) }
.step-card-wide { flex-direction:column }

.step-badge {
  position:absolute;top:-12px;left:16px;
  display:inline-flex;align-items:center;padding:3px 12px;
  border-radius:9999px;font-size:10px;font-weight:700;letter-spacing:.08em;
  background:#161616;border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.6);
}

.step-icon {
  width:42px;height:42px;border-radius:11px;
  background:rgba(201,149,108,0.12);border:1px solid rgba(201,149,108,0.2);
  display:flex;align-items:center;justify-content:center;
}

.actor-badge { display:inline-flex;padding:4px 12px;border-radius:9999px;font-size:11px;font-weight:600;align-self:flex-start }
.actor-copper { background:rgba(201,149,108,0.15);color:#C9956C;border:1px solid rgba(201,149,108,0.25) }
.actor-gray   { background:rgba(255,255,255,0.07);color:#a3a3a3;border:1px solid rgba(255,255,255,0.1) }
.actor-green  { background:rgba(34,197,94,0.1);color:#4ade80;border:1px solid rgba(34,197,94,0.2) }

.cta-strip {
  position:relative;border-radius:18px;overflow:hidden;
  padding:44px 32px;text-align:center;
  background:linear-gradient(135deg,rgba(201,149,108,0.1),rgba(255,255,255,0.025));
  border:1px solid rgba(201,149,108,0.18);
}
.cta-strip-grid {
  position:absolute;inset:0;opacity:.04;
  background-image:linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(to right,rgba(255,255,255,0.2) 1px,transparent 1px);
  background-size:48px 48px;
}

.btn-primary {
  display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:9999px;
  font-size:13.5px;font-weight:700;color:#fff;
  background:linear-gradient(135deg,#C9956C,#B8845B);
  box-shadow:0 0 28px rgba(201,149,108,0.38);
  transition:transform .2s,box-shadow .2s;
}
.btn-primary:hover { transform:translateY(-2px);box-shadow:0 0 40px rgba(201,149,108,0.5) }
</style>
