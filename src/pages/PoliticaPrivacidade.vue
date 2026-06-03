<template>
  <div>

    <!-- Header -->
    <section style="padding-top:64px;padding-bottom:36px">
      <div class="wrap" style="max-width:900px">
        <div class="page-anim page-anim-1 eyebrow-row">
          <span class="eyebrow-label">Legal</span>
          <div class="eyebrow-line"></div>
        </div>
        <h1 class="page-anim page-anim-2 page-h1">Política de Privacidade</h1>
        <p class="page-anim page-anim-3 page-sub">Última atualização: Junho de 2026 · Em conformidade com a LGPD</p>
      </div>
    </section>

    <!-- LGPD badge + princípios -->
    <section style="padding-bottom:28px">
      <div class="wrap" style="max-width:900px">
        <div class="lgpd-banner page-anim page-anim-4">
          <div class="lgpd-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>LGPD Compliant</span>
          </div>
          <p class="lgpd-text">Seus dados são tratados com responsabilidade e transparência. Coletamos apenas o necessário para prestar o serviço de representação.</p>
        </div>
      </div>
    </section>

    <!-- Seções de privacidade -->
    <section style="padding-bottom:80px">
      <div class="wrap" style="max-width:900px">
        <div style="display:flex;flex-direction:column;gap:14px">
          <div v-for="(s, i) in sections" :key="s.title" class="priv-card" v-reveal="{ delay: i * 50 }">
            <div class="priv-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9956C" stroke-width="1.5" stroke-linecap="round" v-html="s.icon"></svg>
            </div>
            <div>
              <h2 class="priv-title">{{ s.title }}</h2>
              <p class="priv-text">{{ s.text }}</p>
            </div>
          </div>
        </div>

        <!-- Direito de acesso -->
        <div class="access-card" v-reveal>
          <h3 style="font-size:14px;font-weight:600;color:#fff;margin-bottom:12px">Exercer seus direitos</h3>
          <p style="font-size:13.5px;color:#737373;line-height:1.65;margin-bottom:16px">
            Para acessar, corrigir ou solicitar exclusão dos seus dados, entre em contato diretamente pelo e-mail ou WhatsApp abaixo.
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:10px">
            <a href="mailto:atendimento@aiumyrepresentacoes.com.br" class="contact-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              atendimento@aiumyrepresentacoes.com.br
            </a>
            <a href="https://wa.me/5511960636061" target="_blank" class="contact-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#4ade80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.157 12C2.16 6.55 6.595 2.116 12.047 2.116c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              (11) 96063-6061
            </a>
          </div>
        </div>

        <!-- Empresa -->
        <div class="legal-footer" v-reveal>
          <p>Ayumi Representações · CNPJ 54.033.016/0001-20 · São Paulo, SP</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const sections = [
  {
    title: 'Dados que coletamos',
    text: 'Coletamos apenas dados fornecidos voluntariamente: nome completo, e-mail, telefone, descrição do produto ou negócio e segmento de atuação. Não coletamos dados sem sua ciência.',
    icon: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  },
  {
    title: 'Como usamos seus dados',
    text: 'Os dados são usados exclusivamente para: entrar em contato com você, apresentar nossa rede de compradores, formalizar a representação comercial e oferecer suporte contínuo.',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
  },
  {
    title: 'Compartilhamento',
    text: 'Não compartilhamos seus dados pessoais com terceiros sem consentimento. Compradores são notificados apenas sobre produtos relevantes, sem acesso aos seus dados completos.',
    icon: '<path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>',
  },
  {
    title: 'Segurança das informações',
    text: 'Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição indevida.',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  },
  {
    title: 'Retenção de dados',
    text: 'Mantemos seus dados pelo tempo necessário para prestar o serviço contratado ou cumprir obrigações legais. Após esse período, os dados são excluídos com segurança.',
    icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  },
  {
    title: 'Seus direitos (LGPD)',
    text: 'Você tem direito de acessar, corrigir, portar ou solicitar a exclusão de seus dados a qualquer momento. Atendemos solicitações em até 15 dias úteis.',
    icon: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
  },
]
</script>

<style scoped>
.eyebrow-row   { margin-bottom:18px }
.eyebrow-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#C9956C;display:block;margin-bottom:10px }
.eyebrow-line  { height:1px;background:linear-gradient(to right,rgba(201,149,108,0.3),rgba(255,255,255,0.07),transparent) }
.page-h1       { font-size:clamp(2rem,5vw,3.6rem);font-weight:700;letter-spacing:-0.03em;line-height:1.08;color:#fff;margin-bottom:12px }
.page-sub      { font-size:15px;color:#737373;line-height:1.65 }

/* LGPD banner */
.lgpd-banner {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  flex-wrap: wrap;
  padding: 20px 24px;
  border-radius: 14px;
  border: 1px solid rgba(201,149,108,0.2);
  background: rgba(201,149,108,0.06);
}
.lgpd-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(201,149,108,0.3);
  background: rgba(201,149,108,0.12);
  font-size: 12px;
  font-weight: 700;
  color: #C9956C;
  white-space: nowrap;
  flex-shrink: 0;
}
.lgpd-text { font-size:13.5px;color:#a3a3a3;line-height:1.65;flex:1;min-width:200px }

/* Privacy cards */
.priv-card {
  display: flex;
  gap: 20px;
  padding: 22px 26px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.02);
  transition: border-color .2s, background .2s;
}
.priv-card:hover {
  border-color: rgba(201,149,108,0.18);
  background: rgba(201,149,108,0.03);
}
.priv-icon {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: rgba(201,149,108,0.12);
  border: 1px solid rgba(201,149,108,0.2);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.priv-title { font-size:14px;font-weight:600;color:#e2e2e2;margin-bottom:8px }
.priv-text  { font-size:13.5px;color:#737373;line-height:1.7 }

/* Access card */
.access-card {
  margin-top: 28px;
  padding: 24px 28px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
}
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  border-radius: 10px;
  font-size: 12.5px;
  color: #a3a3a3;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  text-decoration: none;
  word-break: break-all;
  transition: color .2s, border-color .2s;
}
.contact-link:hover { color: #fff; border-color: rgba(201,149,108,0.25); }

/* Legal footer */
.legal-footer {
  margin-top: 24px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
  background: rgba(255,255,255,0.01);
  font-size: 12.5px;
  color: #404040;
}

@media(max-width:640px){
  .priv-card { padding:16px;gap:14px }
  .lgpd-banner { gap:12px }
  .access-card { padding:18px }
}
</style>
