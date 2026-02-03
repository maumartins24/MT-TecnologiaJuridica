<template>
  <DefaultLayout>
    <section class="page">
      <div class="container">
        <div class="glass pageCard stack">
          <div>
            <h1 class="h1">Como funciona</h1>
            <p class="p">
              Um processo simples, direto e com foco em resultado: transformar visitas em contatos reais
              para advogados e escritórios.
            </p>
          </div>

          <div class="glass inner stack">
            <h2 class="h2">Etapas do projeto</h2>

            <ol class="steps">
              <li><strong>Diagnóstico</strong> — entendemos sua área, objetivo e público.</li>
              <li><strong>Estrutura</strong> — montamos a landing page com seções e fluxo de conversão.</li>
              <li><strong>Implementação</strong> — formulário + WhatsApp + tema claro/escuro.</li>
              <li><strong>Entrega</strong> — você recebe o site pronto e orientações de uso.</li>
            </ol>

            <div class="ctaRow">
              <RouterLink to="/formulario" class="btn btn--primary">Quero uma proposta</RouterLink>
              <RouterLink to="/servicos" class="btn">Ver serviços</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@layouts/DefaultLayout.vue'
</script>

<style scoped>
.inner{
  padding: 22px;
}

.steps{
  margin-top: 12px;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
  counter-reset: step;
}

.steps li{
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.04);
  counter-increment: step;
  display:flex;
  align-items:flex-start;
  gap: 10px;
  line-height: 1.5;
}

.steps li::before{
  content: counter(step);
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: rgba(124,58,237,.18);
  border: 1px solid rgba(124,58,237,.35);
  color: var(--text);
  box-shadow: 0 0 18px rgba(124,58,237,.16);
  flex: 0 0 auto;
  margin-top: 2px;
}

.ctaRow{
  display:flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
}
</style>
