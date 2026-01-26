<template>
  <DefaultLayout>
    <section class="glass sectionPad">
      <h1 class="h1">Contato</h1>
      <p class="p">Vamos conversar? Chame no WhatsApp ou envie uma mensagem pelo formulário.</p>

      <div class="grid info">
        <div class="glass box">
          <h2 class="h2">WhatsApp</h2>
          <p class="p">(11) 99999-9999</p>
        </div>
        <div class="glass box">
          <h2 class="h2">E-mail</h2>
          <p class="p">contatoMTtecnologiajuridica@gmail.com</p>
        </div>
      </div>

      <div style="margin-top:16px">
        <RouterLink to="/formulario" class="btn btn--primary">Abrir formulário</RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@layouts/DefaultLayout.vue'
</script>

<style scoped>
.sectionPad{ padding: 22px; }
.info{ grid-template-columns: 1fr 1fr; margin-top: 16px; }
.box{ padding: 16px; }
@media (max-width: 820px){
  .info{ grid-template-columns: 1fr; }
}
</style>
