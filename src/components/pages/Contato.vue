<template>
  <DefaultLayout>
    <section class="page">
      <div class="container">
        <div class="glass pageCard stack">
          <div>
            <h1 class="h1">Contato</h1>
            <p class="p">Fale com a M&T e receba uma proposta personalizada.</p>
          </div>

          <div class="grid-2">
            <div class="glass card stack">
              <div>
                <h2 class="h2">WhatsApp</h2>
                <p class="p">Atendimento rápido e direto.</p>
              </div>
              <a class="btn btn--primary" :href="whatsUrl" target="_blank" rel="noreferrer">
                Chamar no WhatsApp
              </a>
            </div>

            <div class="glass card stack">
              <div>
                <h2 class="h2">E-mail</h2>
                <p class="p">contato@mttecnologia.com</p>
              </div>
              <a class="btn" href="mailto:contato@mttecnologia.com">Enviar e-mail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@layouts/DefaultLayout.vue'

const whatsUrl = 'https://wa.me/5500000000000?text=Olá!%20Quero%20uma%20landing%20page%20jurídica.'
</script>

<style scoped>
.card{
  padding: 22px;
}
</style>
