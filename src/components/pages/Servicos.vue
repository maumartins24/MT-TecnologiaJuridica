<template>
  <DefaultLayout>
    <section class="glass sectionPad">
      <h1 class="h1">Serviços</h1>
      <p class="p">Soluções focadas em presença digital, autoridade e conversão.</p>

      <div class="grid cards">
        <div class="glass card">
          <h2 class="h2">Landing Pages Jurídicas</h2>
          <p class="p">Estrutura, copy e CTA para gerar contatos e orçamento.</p>
        </div>
        <div class="glass card">
          <h2 class="h2">Sites Institucionais</h2>
          <p class="p">Páginas completas, robustas e com rotas separadas.</p>
        </div>
        <div class="glass card">
          <h2 class="h2">SEO & Performance</h2>
          <p class="p">Melhor carregamento, métricas e base para tráfego orgânico.</p>
        </div>
        <div class="glass card">
          <h2 class="h2">Automação</h2>
          <p class="p">Formulários, integrações e fluxos para atendimento rápido.</p>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@layouts/DefaultLayout.vue'
</script>

<style scoped>
.sectionPad{ padding: 22px; }
.cards{ grid-template-columns: repeat(2, 1fr); margin-top: 16px; }
.card{ padding: 16px; }
@media (max-width: 820px){
  .cards{ grid-template-columns: 1fr; }
}
</style>
