<template>
  <div>

    <!-- Header -->
    <section style="padding-top:64px;padding-bottom:36px">
      <div class="wrap" style="max-width:900px">
        <div class="page-anim page-anim-1 eyebrow-row">
          <span class="eyebrow-label">Legal</span>
          <div class="eyebrow-line"></div>
        </div>
        <h1 class="page-anim page-anim-2 page-h1">Termos de Uso</h1>
        <p class="page-anim page-anim-3 page-sub">Última atualização: Junho de 2026</p>
      </div>
    </section>

    <!-- Sumário rápido -->
    <section style="padding-bottom:28px">
      <div class="wrap" style="max-width:900px">
        <div class="summary-banner page-anim page-anim-4">
          <div class="summary-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Sem custo antecipado</span>
          </div>
          <div class="summary-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span>Contrato pela Lei 4.886/65</span>
          </div>
          <div class="summary-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Rescisão com 30 dias de aviso</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Cláusulas -->
    <section style="padding-bottom:80px">
      <div class="wrap" style="max-width:900px">
        <div style="display:flex;flex-direction:column;gap:14px">
          <div v-for="(t, i) in terms" :key="t.title" class="term-card" v-reveal="{ delay: i * 50 }">
            <div class="term-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="term-body">
              <h2 class="term-title">{{ t.title }}</h2>
              <p class="term-text">{{ t.text }}</p>
            </div>
          </div>
        </div>

        <!-- Rodapé legal -->
        <div class="legal-footer" v-reveal>
          <p>Ayumi Representações · CNPJ 54.033.016/0001-20</p>
          <p>atendimento@aiumyrepresentacoes.com.br · (11) 96063-6061</p>
          <p style="margin-top:4px;font-size:12px;color:#404040">Foro competente: Comarca de São Paulo, SP</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const terms = [
  {
    title: 'Sobre o serviço',
    text: 'A Ayumi Representações opera sob a Lei 4.886/65, conectando fabricantes e fornecedores com histórico a compradores em todo o Brasil.',
  },
  {
    title: 'Escopo da representação',
    text: 'Nossos serviços incluem: identificação de compradores, intermediação de negociações, apresentação de portfólio e suporte comercial contínuo ao longo do relacionamento.',
  },
  {
    title: 'Modelo de remuneração',
    text: 'Cobramos comissão exclusivamente sobre vendas realizadas, sem custo antecipado. A comissão varia de 3% a 12% conforme o segmento, definida em contrato antes do início da representação.',
  },
  {
    title: 'Responsabilidades',
    text: 'A Ayumi atua como intermediária comercial. Não se responsabiliza por inadimplência do comprador, atrasos em entregas ou qualidade dos produtos — esses aspectos são de responsabilidade das partes contratantes.',
  },
  {
    title: 'Formalização',
    text: 'Toda representação é formalizada com contrato eletrônico sob a Lei 4.886/65 e o Código de Processo Civil, com validade jurídica completa e proteção para ambas as partes.',
  },
  {
    title: 'Duração e rescisão',
    text: 'Qualquer das partes pode encerrar o contrato com aviso prévio de 30 dias. Comissões sobre pedidos já realizados permanecem devidas após a rescisão.',
  },
  {
    title: 'Foro competente',
    text: 'Aplica-se exclusivamente a legislação brasileira. O foro competente para resolução de disputas é a Comarca de São Paulo, Estado de São Paulo.',
  },
]
</script>

<style scoped>
.eyebrow-row   { margin-bottom:18px }
.eyebrow-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#C9956C;display:block;margin-bottom:10px }
.eyebrow-line  { height:1px;background:linear-gradient(to right,rgba(201,149,108,0.3),rgba(255,255,255,0.07),transparent) }
.page-h1       { font-size:clamp(2rem,5vw,3.6rem);font-weight:700;letter-spacing:-0.03em;line-height:1.08;color:#fff;margin-bottom:12px }
.page-sub      { font-size:15px;color:#737373;line-height:1.65 }

/* Sumário */
.summary-banner {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 18px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.02);
}
.summary-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #a3a3a3;
}

/* Term cards */
.term-card {
  display: flex;
  gap: 24px;
  padding: 24px 28px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.02);
  transition: border-color .2s, background .2s;
}
.term-card:hover {
  border-color: rgba(201,149,108,0.18);
  background: rgba(201,149,108,0.03);
}
.term-num {
  font-size: 11px;
  font-weight: 700;
  color: #C9956C;
  letter-spacing: .08em;
  opacity: 0.7;
  flex-shrink: 0;
  padding-top: 3px;
  width: 26px;
}
.term-title {
  font-size: 14px;
  font-weight: 600;
  color: #e2e2e2;
  margin-bottom: 8px;
}
.term-text {
  font-size: 13.5px;
  color: #737373;
  line-height: 1.7;
}

/* Rodapé legal */
.legal-footer {
  margin-top: 40px;
  padding: 20px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.015);
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  color: #525252;
}

@media(max-width:640px){
  .term-card { padding:18px 16px;gap:14px }
  .summary-banner { flex-direction:column;gap:10px }
}
</style>
