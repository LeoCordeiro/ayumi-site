<template>
  <div>

    <!-- ─── HERO ─── -->
    <section class="hero">
      <!-- Glow copper intensificado no hero (adicional ao background do site) -->
      <div class="hero-glow-top" aria-hidden="true"></div>
      <div class="hero-vignette" aria-hidden="true"></div>
      <div class="wrap">

        <!-- H1 -->
        <div class="hero-anim hero-anim-2" style="text-align:center">
          <h1 class="hero-h1">
            Representamos sua marca<br />
            direto para os compradores<br />
            <span class="hero-h1-grad">em todo o Brasil</span>
          </h1>
        </div>

        <!-- Subtítulo -->
        <div class="hero-anim hero-anim-3" style="text-align:center;margin-top:1.5rem">
          <p class="hero-sub">
            Trabalhamos com fabricantes e indústrias para abrir canais de venda em todo o Brasil.
            <strong style="color:#e2e2e2;font-weight:600">Sem mensalidade.</strong>
            Você paga só quando a gente fecha uma venda.
          </p>
        </div>

        <!-- CTAs -->
        <div class="hero-anim hero-anim-4" style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:2.5rem">
          <router-link to="/solicitar" class="btn-cta-hero">
            <span class="hcb-border" aria-hidden="true"><span class="hcb-spin"></span></span>
            <span class="hcb-particles" aria-hidden="true"><i class="p1"></i><i class="p2"></i><i class="p3"></i><i class="p4"></i><i class="p5"></i></span>
            <span class="hcb-label">Fale com a Aiumy <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg></span>
          </router-link>
          <router-link to="/como-funciona" class="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".3" fill="#C9956C"/><path d="m10 8 5 4-5 4V8z" fill="#C9956C"/></svg>
            Como funciona
          </router-link>
        </div>

        <!-- Trust items -->
        <div class="hero-anim hero-anim-5" style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin-top:1.75rem">
          <span v-for="t in trusts" :key="t" class="trust-item">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            {{ t }}
          </span>
        </div>

      </div>
    </section>

    <!-- ─── BENTO GRID ─── -->
    <section class="section-gap hero-anim hero-anim-5">
      <div class="wrap">
        <div class="bento-grid">

          <!-- R$0 -->
          <div class="bento-card" style="grid-column:span 1;display:flex;flex-direction:column;justify-content:space-between;min-height:176px">
            <div>
              <p style="font-size:3.2rem;font-weight:800;letter-spacing:-0.05em;line-height:1;color:#fff">R$&nbsp;0</p>
              <p style="font-size:13px;color:#737373;margin-top:8px">Custo fixo para o fabricante</p>
            </div>
            <div style="display:flex;align-items:center;gap:7px;font-size:12px;color:#C9956C;margin-top:18px">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              Sem custo antecipado — comissão só sobre vendas
            </div>
          </div>

          <!-- Comissão -->
          <div class="bento-card" style="display:flex;flex-direction:column;justify-content:space-between;min-height:176px">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
              <div>
                <p style="font-size:2.1rem;font-weight:800;letter-spacing:-0.04em;color:#fff">3–12%</p>
                <p style="font-size:13px;color:#737373;margin-top:4px">Comissão por venda</p>
              </div>
              <span class="badge-copper">Por segmento</span>
            </div>
            <div style="margin-top:14px;display:flex;flex-direction:column;gap:7px">
              <div v-for="seg in segments" :key="seg.name" style="display:flex;align-items:center;gap:10px">
                <div style="height:5px;flex:1;border-radius:9999px;background:rgba(255,255,255,0.08);overflow:hidden">
                  <div :style="{ width:seg.width, background:'linear-gradient(90deg,#C9956C,#E8C9A0)', height:'100%', borderRadius:'9999px' }"></div>
                </div>
                <span style="font-size:10.5px;color:#737373;width:112px;text-align:right;flex-shrink:0">
                  {{ seg.name }} <strong style="color:#C9956C">{{ seg.range }}</strong>
                </span>
              </div>
            </div>
          </div>

          <!-- Contrato -->
          <div class="bento-card" style="display:flex;flex-direction:column;justify-content:space-between;min-height:176px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
              <div class="icon-box">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div>
                <p style="font-size:13px;font-weight:600;color:#fff">Contrato formalizado</p>
                <p style="font-size:11px;color:#737373">Lei 4.886/65</p>
              </div>
            </div>
            <ul style="display:flex;flex-direction:column;gap:7px">
              <li v-for="item in legalItems" :key="item" style="display:flex;align-items:center;gap:8px;font-size:12px;color:#a3a3a3">
                <span style="width:16px;height:16px;border-radius:50%;background:rgba(201,149,108,0.14);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Cobertura -->
          <div class="bento-card" style="grid-column:span 2;display:flex;align-items:center;gap:24px;min-height:152px">
            <div class="coverage-rings">
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
              <div class="ring ring-3"></div>
              <div class="ring-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="11" r="3"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/></svg>
              </div>
            </div>
            <div style="flex:1">
              <p style="font-size:1.5rem;font-weight:700;letter-spacing:-0.02em;color:#fff">Cobertura nacional</p>
              <p style="font-size:13px;color:#737373;margin-top:4px;margin-bottom:12px">De Norte a Sul do Brasil</p>
              <div style="display:flex;flex-wrap:wrap;gap:6px">
                <span v-for="tag in coverageTags" :key="tag" class="tag-copper">{{ tag }}</span>
              </div>
            </div>
          </div>

          <!-- 24h -->
          <div class="bento-card" style="display:flex;flex-direction:column;justify-content:space-between;min-height:152px">
            <div>
              <p style="font-size:2.6rem;font-weight:800;letter-spacing:-0.04em;color:#C9956C;line-height:1">24h</p>
              <p style="font-size:13px;color:#737373;margin-top:5px">Primeira resposta garantida</p>
            </div>
            <a href="https://wa.me/5511960636061" target="_blank" class="wa-link">
              <div style="width:30px;height:30px;border-radius:8px;background:rgba(34,197,94,0.14);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#4ade80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </div>
              <div>
                <p style="font-size:12px;font-weight:600;color:#fff">(11) 96063-6061</p>
                <p style="font-size:10px;color:#737373">WhatsApp direto</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── STATS ─── -->
    <section class="section-gap" v-reveal>
      <div class="wrap">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-cell">
            <p class="stat-value">{{ stat.value }}</p>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SEGMENTOS ─── -->
    <section class="section-gap">
      <div class="wrap">

        <div v-reveal style="margin-bottom:44px">
          <div class="eyebrow-row">
            <span class="section-eyebrow">Segmentos</span>
            <span style="font-size:10.5px;color:#404040;letter-spacing:0.1em">05</span>
          </div>
          <div class="section-divider"></div>
          <div class="section-title-row">
            <h2 class="section-title">Onde atuamos</h2>
            </div>
        </div>

        <div class="segs-grid" v-reveal="{ stagger:true, interval:100 }">
          <div v-for="seg in segmentCards" :key="seg.title" class="seg-card">
            <div class="seg-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" v-html="seg.icon"></svg>
            </div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
              <h3 style="font-size:15px;font-weight:600;letter-spacing:-0.01em;color:#fff">{{ seg.title }}</h3>
              <span class="badge-copper" style="font-size:10px">{{ seg.range }}</span>
            </div>
            <p style="font-size:13px;color:#737373;line-height:1.6;margin-bottom:16px">{{ seg.desc }}</p>
            <ul style="display:flex;flex-direction:column;gap:6px">
              <li v-for="item in seg.items" :key="item" style="display:flex;align-items:center;gap:7px;font-size:12px;color:#525252">
                <span style="width:4px;height:4px;border-radius:50%;background:rgba(201,149,108,0.6);flex-shrink:0"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── CTA FINAL ─── -->
    <section class="section-gap section-bottom" v-reveal>
      <div class="wrap">
        <div class="cta-block">
          <div class="cta-bg-grid"></div>
          <div class="cta-glow-dot"></div>
          <div class="cta-content">
            <h2 class="cta-title">
              Pronto para vender mais<br />
              <span style="color:#C9956C">em todo o Brasil?</span>
            </h2>
            <p class="cta-desc">
              Sem taxa fixa. Você paga comissão só quando a gente fecha a venda. Contrato pela Lei 4.886/65.
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
              <router-link to="/solicitar" class="btn-primary">
                Fale com a Aiumy
              </router-link>
              <a href="https://wa.me/5511960636061" target="_blank" class="btn-ghost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#4ade80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                WhatsApp agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const trusts = ['Sem mensalidade ou taxa fixa', 'Contrato pela Lei 4.886/65', 'Fornecedores com histórico · atuação nacional']

const segments = [
  { name: 'Moda', range: '8–12%', width: '90%' },
  { name: 'Calçados', range: '7–10%', width: '75%' },
  { name: 'Cosméticos', range: '5–8%', width: '60%' },
  { name: 'Casa', range: '5–8%', width: '55%' },
  { name: 'Alimentos', range: '3–5%', width: '38%' },
]

const legalItems = ['Proteção jurídica completa', 'Assinatura eletrônica', 'Comissões garantidas em contrato']
const coverageTags = ['Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste']

const stats = [
  { value: 'BR', label: 'Cobertura nacional' },
  { value: '5', label: 'Segmentos ativos' },
  { value: '24h', label: 'Primeira resposta' },
  { value: '0%', label: 'Custo antecipado' },
]

const segmentCards = [
  {
    title: 'Moda e Vestuário', range: '8–12%',
    desc: 'Fabricantes com histórico para lojistas, multimarcas e distribuidoras em todo o país.',
    items: ['Camisetas, blusas e coleções', 'Calças, bermudas e vestidos', 'Lojistas e multimarcas no Brasil'],
    icon: '<path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.86H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.86l.58-3.57a2 2 0 00-1.34-2.23z"/>',
  },
  {
    title: 'Cosméticos e Beleza', range: '5–8%',
    desc: 'Marcas com histórico para salões, farmácias e distribuidoras de beleza em todo o Brasil.',
    items: ['Produtos de beleza e higiene', 'Maquiagem e tratamentos', 'Salões, farmácias, distribuidoras'],
    icon: '<path d="M12 2a5 5 0 015 5v3H7V7a5 5 0 015-5z"/><path d="M7 10v9a2 2 0 002 2h6a2 2 0 002-2v-9"/>',
  },
  {
    title: 'Calçados e Acessórios', range: '7–10%',
    desc: 'Fabricantes de calçados, bolsas e acessórios para varejistas e distribuidoras em todo o Estado.',
    items: ['Calçados femininos e masculinos', 'Bolsas, carteiras e cintos', 'Multimarcas e distribuidoras'],
    icon: '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>',
  },
  {
    title: 'Casa e Utilidades', range: '5–8%',
    desc: 'Artigos para o lar, cama, mesa e banho para redes de varejo, lojas especializadas e atacadistas.',
    items: ['Cama, mesa e banho', 'Decoração e organização', 'Redes de varejo e atacadistas'],
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  },
  {
    title: 'Alimentos e Confeitaria', range: '3–5%',
    desc: 'Pequenas indústrias para mercados, padarias e redes regionais com demanda constante.',
    items: ['Doces, confeitaria e conservas', 'Produtos de padaria', 'Mercados, padarias, redes'],
    icon: '<path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
  },
]
</script>

<style scoped>
/* ─── Seção hero — transparente, herda o background do site ─── */
.hero {
  padding-top: 72px;
  padding-bottom: 96px;
  position: relative;
}

/* Glow copper mais intenso especificamente no hero */
.hero-glow-top {
  position: absolute;
  top: -260px; left: 50%;
  transform: translateX(-50%);
  width: 1200px; height: 800px;
  background: radial-gradient(ellipse at center top, rgba(201,149,108,0.28) 0%, transparent 58%);
  pointer-events: none; z-index: 0;
}
.hero-vignette {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 0%, transparent 42%, rgba(8,8,8,0.65) 72%, #080808 100%);
  pointer-events: none; z-index: 0;
}

/* Texto H1 com gradiente copper */
.hero-h1-grad {
  background: linear-gradient(90deg, #E8C9A0 0%, #C9956C 55%, #B8845B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Espaçamento padrão entre seções ─── */
.section-gap { padding-top: 32px; padding-bottom: 32px; }
.section-bottom { padding-bottom: 72px; }

/* ─── Hero textos ─── */
.hero-h1 {
  font-size: clamp(2.4rem, 5.5vw, 4.8rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.07;
  color: #fff;
  margin: 0 auto;
  max-width: 860px;
  text-align: center;
}
.hero-sub {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #a3a3a3;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

/* ─── Trust ─── */
.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: #525252;
}

/* ─── Buttons ─── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #C9956C, #B8845B);
  box-shadow: 0 0 28px rgba(201,149,108,0.38), 0 1px 0 rgba(255,255,255,0.12) inset;
  transition: transform .2s, box-shadow .2s;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(201,149,108,0.5); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 500;
  color: #a3a3a3;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  transition: color .2s, border-color .2s, background .2s;
}
.btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.18); background: rgba(255,255,255,0.09); }

/* ─── Hero CTA — borda giratória + partículas (ref: lumina-video) ─── */
.btn-cta-hero {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 26px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
  transition: transform .25s, box-shadow .25s;
  background: linear-gradient(135deg, #C9956C, #B8845B);
  box-shadow: 0 0 32px rgba(201,149,108,0.42), 0 1px 0 rgba(255,255,255,0.12) inset;
  text-decoration: none;
  isolation: isolate;
}
.btn-cta-hero:hover {
  transform: scale(1.05);
  box-shadow: 0 0 52px 10px rgba(201,149,108,0.52);
}
/* Invólucro da borda giratória */
.hcb-border {
  position: absolute; inset: -1px;
  border-radius: 9999px; overflow: hidden;
}
/* Div girando com conic-gradient — cria a borda animada */
.hcb-spin {
  position: absolute;
  inset: -100%; width: 300%; height: 300%;
  animation: hcb-rotate 3s linear infinite;
  background: conic-gradient(from 0deg, transparent 0deg, transparent 85deg, rgba(232,201,160,0.95) 180deg, transparent 275deg, transparent 360deg);
}
@keyframes hcb-rotate { to { transform: rotate(360deg); } }
/* Preenchimento interno — faz aparecer apenas a borda de 2px */
.btn-cta-hero::before {
  content: '';
  position: absolute; inset: 2px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #C9956C, #B8845B);
  z-index: 0;
}
/* Partículas flutuando para cima */
.hcb-particles {
  position: absolute; inset: 0;
  overflow: hidden; border-radius: 9999px;
  pointer-events: none; z-index: 1;
}
.hcb-particles i {
  position: absolute; bottom: -6px;
  width: 2px; height: 2px; border-radius: 50%;
  background: rgba(255,255,255,0.9);
  animation: hcb-float ease-in-out infinite;
  font-style: normal;
}
.hcb-particles .p1 { left: 12%; animation-duration: 2.4s; animation-delay: 0.2s; }
.hcb-particles .p2 { left: 30%; animation-duration: 2.6s; animation-delay: 0.6s; opacity: 0.7; }
.hcb-particles .p3 { left: 48%; animation-duration: 2.1s; animation-delay: 0.0s; }
.hcb-particles .p4 { left: 65%; animation-duration: 2.8s; animation-delay: 1.0s; opacity: 0.8; }
.hcb-particles .p5 { left: 82%; animation-duration: 1.9s; animation-delay: 1.4s; }
@keyframes hcb-float {
  0%   { transform: translateY(0); opacity: 1; }
  80%  { opacity: 0; }
  100% { transform: translateY(-52px); opacity: 0; }
}
/* Label do botão — acima de tudo */
.hcb-label {
  position: relative; z-index: 2;
  display: inline-flex; align-items: center; gap: 8px;
}

/* ─── Bento ─── */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 900px) { .bento-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .bento-grid { grid-template-columns: 1fr; } }

.bento-card {
  padding: 22px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.08);
  transition: border-color .25s, background .25s;
}
.bento-card:hover {
  border-color: rgba(201,149,108,0.2);
  background: linear-gradient(135deg, rgba(201,149,108,0.07), rgba(255,255,255,0.02));
}

.icon-box {
  width: 38px; height: 38px;
  border-radius: 10px;
  background: rgba(201,149,108,0.14);
  border: 1px solid rgba(201,149,108,0.2);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

/* Coverage rings */
.coverage-rings {
  position: relative;
  width: 80px; height: 80px;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(201,149,108,0.18);
  animation: pulse 2s infinite;
}
.ring-1 { inset: 0; animation-delay: 0s; }
.ring-2 { inset: 12px; animation-delay: .5s; }
.ring-3 { inset: 24px; animation-delay: 1s; }
.ring-center {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: rgba(201,149,108,0.18);
  border: 1px solid rgba(201,149,108,0.3);
  display: flex; align-items: center; justify-content: center;
  z-index: 1;
}

.wa-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  text-decoration: none;
  transition: background .2s;
  margin-top: 14px;
}
.wa-link:hover { background: rgba(255,255,255,0.07); }

/* ─── Badges & Tags ─── */
.badge-copper {
  padding: 3px 9px;
  border-radius: 9999px;
  font-size: 10.5px;
  font-weight: 700;
  background: rgba(201,149,108,0.15);
  color: #C9956C;
  border: 1px solid rgba(201,149,108,0.22);
  white-space: nowrap;
  flex-shrink: 0;
}
.tag-copper {
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid rgba(201,149,108,0.2);
  background: rgba(201,149,108,0.1);
  color: #C9956C;
}

/* ─── Stats ─── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.08);
}
@media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }

.stat-cell {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 28px 16px;
  background: #161616;
  text-align: center;
}
.stat-value { font-size: 2.4rem; font-weight: 800; letter-spacing: -0.04em; color: #C9956C; line-height: 1; }
.stat-label { font-size: 11px; color: #525252; margin-top: 6px; font-weight: 500; }

/* ─── Section headers ─── */
.eyebrow-row {
  display: flex; justify-content: space-between;
  margin-bottom: 10px;
}
.section-eyebrow {
  font-size: 10.5px; font-weight: 700;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: #C9956C;
}
.section-divider {
  height: 1px;
  background: linear-gradient(to right, rgba(201,149,108,0.3), rgba(255,255,255,0.07), transparent);
  margin-bottom: 28px;
}
.section-title-row {
  display: flex; flex-direction: column; gap: 8px;
}
@media (min-width: 768px) {
  .section-title-row { flex-direction: row; align-items: flex-end; justify-content: space-between; }
}
.section-title {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 700; letter-spacing: -0.03em;
  color: #fff; line-height: 1.1;
}
.section-desc { font-size: 13px; color: #737373; max-width: 240px; line-height: 1.6; }

/* ─── Segment cards ─── */
.segs-grid { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; }

.seg-card {
  flex: 0 0 calc(33.333% - 11px);
  padding: 24px;
  border-radius: 16px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.07);
  transition: all .25s;
}
.seg-card:hover { border-color: rgba(201,149,108,0.2); background: rgba(201,149,108,0.04); transform: translateY(-2px); }
@media (max-width: 900px) { .seg-card { flex: 0 0 calc(50% - 8px); } }
@media (max-width: 600px) { .seg-card { flex: 0 0 100%; } }
.seg-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(201,149,108,0.12); border: 1px solid rgba(201,149,108,0.2);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}

/* ─── CTA Block ─── */
.cta-block {
  position: relative; border-radius: 20px; overflow: hidden;
  padding: 56px 40px; text-align: center;
  background: linear-gradient(135deg, rgba(201,149,108,0.12), rgba(255,255,255,0.025) 50%, rgba(201,149,108,0.06));
  border: 1px solid rgba(201,149,108,0.18);
}
.cta-bg-grid {
  position: absolute; inset: 0; opacity: .04;
  background-image: linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px);
  background-size: 48px 48px;
}
.cta-glow-dot {
  position: absolute; top: -40px; right: -40px;
  width: 200px; height: 200px; border-radius: 50%;
  background: radial-gradient(circle, rgba(201,149,108,0.2), transparent 70%);
  pointer-events: none;
}
.cta-content { position: relative; z-index: 1; }
.cta-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700; letter-spacing: -0.03em; color: #fff;
  margin-bottom: 14px; line-height: 1.15;
}
.cta-desc { font-size: 15px; color: #737373; max-width: 420px; margin: 0 auto 32px; line-height: 1.65; }
</style>
