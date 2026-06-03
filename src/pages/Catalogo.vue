<template>
  <div>

    <section style="padding-top:64px;padding-bottom:36px">
      <div class="wrap">
        <div class="page-anim page-anim-1" style="margin-bottom:18px">
          <span class="sec-label">Segmentos</span>
          <div class="sec-line"></div>
        </div>
        <h1 class="page-anim page-anim-2" style="font-size:clamp(2.2rem,5vw,4.5rem);font-weight:700;letter-spacing:-0.03em;line-height:1.08;color:#fff">
          Segmentos de<br /><span style="color:#C9956C">atuação</span>
        </h1>
        <p class="page-anim page-anim-3" style="margin-top:16px;max-width:460px;font-size:16px;color:#a3a3a3;line-height:1.65">
          Trabalhamos com fornecedores qualificados e com histórico para abrir mercado em todo o Brasil.
        </p>
      </div>
    </section>

    <section style="padding-top:8px;padding-bottom:32px">
      <div class="wrap">
        <div style="display:flex;flex-direction:column;gap:18px">
          <div v-for="(seg, i) in segs" :key="seg.title" class="seg-card" v-reveal="{ delay: i * 80 }">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0" class="seg-inner">
              <!-- Left -->
              <div style="padding:28px 32px">
                <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
                  <div style="width:46px;height:46px;border-radius:12px;background:rgba(201,149,108,0.12);border:1px solid rgba(201,149,108,0.22);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" v-html="seg.icon"></svg>
                  </div>
                  <div>
                    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px">
                      <h2 style="font-size:17px;font-weight:600;letter-spacing:-0.01em;color:#fff">{{ seg.title }}</h2>
                      <span class="badge-copper">{{ seg.range }}</span>
                    </div>
                    <p style="font-size:11px;color:#525252;margin-top:2px">Comissão sobre pedido realizado</p>
                  </div>
                </div>
                <p style="font-size:13.5px;color:#737373;line-height:1.65;margin-bottom:18px">{{ seg.desc }}</p>
                <ul style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:22px">
                  <li v-for="p in seg.products" :key="p" style="display:flex;align-items:center;gap:7px;font-size:13px;color:#a3a3a3">
                    <span style="width:4px;height:4px;border-radius:50%;background:rgba(201,149,108,0.7);flex-shrink:0"></span>{{ p }}
                  </li>
                </ul>
                <router-link to="/solicitar" class="seg-btn">
                  Quero representar minha marca
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
                </router-link>
              </div>
              <!-- Right -->
              <div class="seg-right">
                <h3 style="font-size:10.5px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#525252;margin-bottom:16px">Compradores atendidos</h3>
                <ul style="display:flex;flex-direction:column;gap:10px;margin-bottom:auto">
                  <li v-for="c in seg.buyers" :key="c" style="display:flex;align-items:center;gap:10px;font-size:13px;color:#a3a3a3">
                    <span style="width:22px;height:22px;border-radius:50%;background:rgba(201,149,108,0.12);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>{{ c }}
                  </li>
                </ul>
                <div style="margin-top:20px;padding:13px 16px;border-radius:11px;border:1px solid rgba(201,149,108,0.15);background:rgba(201,149,108,0.06);display:flex;align-items:center;gap:10px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" style="flex-shrink:0"><circle cx="12" cy="11" r="3"/><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                  <span style="font-size:13px;color:#C9956C;font-weight:500">{{ seg.coverage }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding-top:24px;padding-bottom:80px" v-reveal>
      <div class="wrap">
        <div class="commission-box">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center" class="commission-inner">
            <div>
              <span class="sec-label" style="margin-bottom:12px">Modelo de comissão</span>
              <h2 style="font-size:clamp(1.6rem,3vw,2.4rem);font-weight:700;letter-spacing:-0.03em;color:#fff;line-height:1.15;margin-bottom:12px">
                Por segmento,<br /><span style="color:#C9956C">sem surpresas</span>
              </h2>
              <p style="font-size:14px;color:#737373;line-height:1.65">Calculada sobre o valor total do pedido. Só sobre vendas realizadas — sem custo fixo.</p>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px">
              <div v-for="r in rates" :key="r.label" style="display:flex;align-items:center;justify-content:space-between;padding:13px 18px;border-radius:11px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03)">
                <span style="font-size:14px;font-weight:500;color:#d4d4d4">{{ r.label }}</span>
                <span style="font-size:15px;font-weight:700;color:#C9956C">{{ r.range }}</span>
              </div>
              <router-link to="/solicitar" class="btn-primary-full">Receba proposta personalizada</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const segs = [
  { title:'Moda e Vestuário', range:'8–12%', desc:'Fabricantes com histórico e portfólio estruturado. Conectamos com lojistas, multimarcas e distribuidoras em todo o país.', products:['Camisetas e blusas','Calças e bermudas','Vestidos e saias','Coleções completas'], buyers:['Lojistas de todo o Brasil','Multimarcas e boutiques','Distribuidoras regionais','Redes de varejo de moda'], coverage:'Todo o Brasil', icon:'<path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.86H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.86l.58-3.57a2 2 0 00-1.34-2.23z"/>' },
  { title:'Cosméticos e Beleza', range:'5–8%', desc:'Marcas com histórico e linha definida. Rede de salões, farmácias e distribuidoras de beleza em todo o Brasil.', products:['Produtos de beleza','Higiene pessoal','Maquiagem','Tratamentos capilares'], buyers:['Salões de beleza','Farmácias e drogarias','Distribuidoras especializadas','Lojas de estética'], coverage:'Todo o Brasil', icon:'<path d="M12 2a5 5 0 015 5v3H7V7a5 5 0 015-5z"/><path d="M7 10v9a2 2 0 002 2h6a2 2 0 002-2v-9"/>' },
  { title:'Calçados e Acessórios', range:'7–10%', desc:'Fabricantes com histórico de produção para varejistas, distribuidoras e redes de calçados em todo o país.', products:['Calçados femininos','Calçados masculinos','Bolsas e carteiras','Cintos e bijuterias'], buyers:['Lojistas de calçados','Multimarcas e boutiques','Distribuidoras nacionais','Sapatarias e calçadistas'], coverage:'Todo o Brasil', icon:'<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>' },
  { title:'Casa e Utilidades', range:'5–8%', desc:'Fabricantes de artigos para o lar com histórico para redes de varejo, lojas especializadas e atacadistas em todo o Brasil.', products:['Cama, mesa e banho','Utensílios domésticos','Organização','Decoração e quadros'], buyers:['Lojas de utilidades domésticas','Atacadistas para o lar','Redes de decoração','Lojas de departamento'], coverage:'Todo o Brasil', icon:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
  { title:'Alimentos e Confeitaria', range:'3–5%', desc:'Pequenas indústrias alimentícias com histórico de produção para mercados, padarias e redes de todo o Brasil.', products:['Doces e confeitaria','Produtos de pão','Conservas','Produtos regionais'], buyers:['Mercados e mercearias','Padarias e confeitarias','Redes regionais','Distribuidoras alimentícias'], coverage:'Todo o Brasil', icon:'<path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>' },
]
const rates = [
  { label:'Moda e Vestuário', range:'8–12%' },
  { label:'Calçados e Acessórios', range:'7–10%' },
  { label:'Cosméticos e Beleza', range:'5–8%' },
  { label:'Casa e Utilidades', range:'5–8%' },
  { label:'Alimentos e Confeitaria', range:'3–5%' },
]
</script>

<style scoped>
.sec-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#C9956C;display:block;margin-bottom:10px }
.sec-line  { height:1px;background:linear-gradient(to right,rgba(201,149,108,0.3),rgba(255,255,255,0.07),transparent) }
.badge-copper { padding:3px 9px;border-radius:9999px;font-size:10.5px;font-weight:700;background:rgba(201,149,108,0.15);color:#C9956C;border:1px solid rgba(201,149,108,0.22);white-space:nowrap;flex-shrink:0 }

.seg-card { border-radius:16px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.015);overflow:hidden;transition:border-color .25s }
.seg-card:hover { border-color:rgba(201,149,108,0.2) }
.seg-inner { display:grid;grid-template-columns:1fr 1fr }
@media(max-width:900px){ .seg-inner { grid-template-columns:1fr } }

.seg-right { border-left:1px solid rgba(255,255,255,0.07);padding:28px 32px;display:flex;flex-direction:column }
@media(max-width:900px){ .seg-right { border-left:none;border-top:1px solid rgba(255,255,255,0.07) } }

.seg-btn { display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:9999px;font-size:13px;font-weight:500;color:#a3a3a3;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);transition:all .2s }
.seg-btn:hover { color:#fff;border-color:rgba(201,149,108,0.3);background:rgba(201,149,108,0.07) }

.commission-box { border-radius:18px;border:1px solid rgba(201,149,108,0.2);overflow:hidden;background:linear-gradient(135deg,rgba(201,149,108,0.09),rgba(255,255,255,0.025));padding:36px 40px }
.commission-inner { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center }
@media(max-width:900px){ .commission-inner { grid-template-columns:1fr } }

.btn-primary-full { display:flex;align-items:center;justify-content:center;padding:14px;border-radius:9999px;font-size:14px;font-weight:700;color:#fff;background:linear-gradient(135deg,#C9956C,#B8845B);box-shadow:0 0 22px rgba(201,149,108,0.3);transition:transform .2s,box-shadow .2s }
.btn-primary-full:hover { transform:translateY(-2px);box-shadow:0 0 36px rgba(201,149,108,0.45) }
</style>
