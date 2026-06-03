<template>
  <footer class="relative mt-16">
    <div class="h-px" style="background:linear-gradient(to right,transparent,rgba(201,149,108,0.3),transparent)"></div>
    <div class="wrap" style="padding-top:40px;padding-bottom:50px">

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-12 mb-12">

        <!-- Brand -->
        <div class="col-span-2 sm:col-span-1">
          <img :src="require('@/assets/logoheader.png')" style="height:48px;width:auto;" alt="Ayumi Representações" class="mb-5" />
          <p class="text-sm text-neutral-500 leading-relaxed mb-4 max-w-[220px]">
            Conectando fabricantes aos compradores certos em São Paulo.
          </p>
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-copper-400 animate-pulse"></span>
            <span class="text-xs text-neutral-600">B2B · Representação · SP</span>
          </div>
        </div>

        <!-- Nav -->
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-500 mb-4">Navegação</p>
          <ul class="space-y-2.5">
            <li v-for="l in navLinks" :key="l.to">
              <router-link :to="l.to" class="text-sm text-neutral-400 hover:text-white transition-colors">{{ l.label }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-500 mb-4">Contato</p>
          <ul class="space-y-3">
            <li>
              <a href="https://wa.me/5511960636061" target="_blank" class="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="text-copper-400/70 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.157 12C2.16 6.55 6.595 2.116 12.047 2.116c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                (11) 96063-6061
              </a>
            </li>
            <li>
              <a href="mailto:atendimento@aiumyrepresentacoes.com.br" class="flex items-start gap-2 text-neutral-400 hover:text-white transition-colors" style="font-size:11.5px;line-height:1.5;word-break:break-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="text-copper-400/70" style="flex-shrink:0;margin-top:2px"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                atendimento@aiumyrepresentacoes.com.br
              </a>
            </li>
            <li class="flex items-center gap-2 text-sm text-neutral-500">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="text-copper-400/70 shrink-0"><circle cx="12" cy="11" r="3"/><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
              São Paulo, SP
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-500 mb-4">Legal</p>
          <ul class="space-y-2.5">
            <li v-for="l in legalLinks" :key="l.to">
              <router-link :to="l.to" class="text-sm text-neutral-400 hover:text-white transition-colors">{{ l.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/6" style="margin-top:8px;padding-top:24px;padding-bottom:24px;display:flex;flex-direction:column;gap:6px">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
          <p class="text-xs text-neutral-600">© 2026 Ayumi Representações · CNPJ 54.033.016/0001-20</p>
          <p class="text-xs text-neutral-600">Formalizado pela Lei 4.886/65</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/como-funciona', label: 'Como funciona' },
  { to: '/catalogo', label: 'Segmentos' },
  { to: '/solicitar', label: 'Fale com a Aiumy' },
]
const legalLinks = [
  { to: '/termos', label: 'Termos de Uso' },
  { to: '/privacidade', label: 'Privacidade' },
  { to: '/repasse', label: 'Modelo de Comissão' },
]
</script>
