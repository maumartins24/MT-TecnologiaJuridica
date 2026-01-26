<template>
  <DefaultLayout>
    <section class="glass sectionPad">
      <h1 class="h1">Formulário</h1>
      <p class="p">Envie sua solicitação e retornaremos o mais rápido possível.</p>

      <form class="form" @submit.prevent="submit">
        <label class="field">
          <span>Nome</span>
          <input v-model="form.nome" class="input" placeholder="Seu nome" required />
        </label>

        <label class="field">
          <span>E-mail</span>
          <input v-model="form.email" class="input" type="email" placeholder="seu@email.com" required />
        </label>

        <label class="field">
          <span>Mensagem</span>
          <textarea v-model="form.mensagem" class="textarea" rows="5" placeholder="Conte sobre o que você precisa" required />
        </label>

        <button class="btn btn--primary" type="submit">Enviar</button>
      </form>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { reactive } from 'vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'

const form = reactive({ nome: '', email: '', mensagem: '' })

function submit(){
  alert('Mensagem enviada! (Depois integramos com WhatsApp/Email/API)')
  form.nome = ''
  form.email = ''
  form.mensagem = ''
}
</script>

<style scoped>
.sectionPad{ padding: 22px; }
.form{ margin-top: 16px; display:grid; gap: 12px; }
.field{ display:grid; gap: 6px; color: var(--muted); }
.input, .textarea{
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.06);
  color: var(--text);
  outline: none;
}
.input:focus, .textarea:focus{
  border-color: rgba(124,58,237,.55);
  box-shadow: 0 0 0 4px rgba(124,58,237,.12);
}
</style>
