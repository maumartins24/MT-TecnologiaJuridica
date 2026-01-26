<template>
  <DefaultLayout>

    <!-- HERO -->
    <section class="glass hero">
      <div class="heroGrid">
        <div>
          <h1 class="h1">
            Seu escritório está online,<br />
            <span class="highlight">mas não gera clientes?</span>
          </h1>

          <p class="p">
            A <strong>M&T Tecnologia Jurídica</strong> cria <strong>landing pages jurídicas focadas em conversão</strong>,
            com formulário estratégico e WhatsApp, para transformar visitantes em
            <strong>leads qualificados</strong>.
          </p>

          <div class="actions">
            <a href="#formulario" class="btn btn--primary">
              Quero captar clientes pela internet
            </a>
            <RouterLink to="/sobre" class="btn">
              Conhecer a M&T
            </RouterLink>
          </div>
        </div>

        <div class="glass side">
          <div class="tag">Para advogados e escritórios</div>

          <p class="p">
            Se você depende de indicação ou recebe poucos contatos online,
            o problema não é sua atuação jurídica —
            <strong>é a falta de uma estrutura de conversão</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- SITUAÇÃO -->
   <!-- SITUAÇÃO -->
<section class="section">
  <div class="container">
    <div class="glass block">
      <div class="blockHead">
        <h2 class="h2">A situação real do marketing jurídico hoje</h2>

        <p class="p">
          Muitos escritórios já têm site, redes sociais e até investem em anúncios.
          Mesmo assim, os contatos chegam “de vez em quando” — e quase nunca com previsibilidade.
        </p>

        <p class="p emphasis">
          <strong>Estar online não é o problema. O problema é não converter.</strong>
        </p>

        <a class="btn btn--primary" href="#formulario">Quero aumentar a conversão</a>
      </div>
    </div>
  </div>
</section>


    <!-- PROBLEMA -->
    <section class="section">
  <div class="container">
    <div class="glass problem">
      <div class="problemGrid">
        <div>
          <h2 class="h2">O problema não é o tráfego. É a conversão.</h2>
          <p class="p">
            Sem uma landing page jurídica pensada para transformar visita em contato, o visitante:
          </p>
        </div>

        <ul class="list compact">
          <li>Entra, lê e sai sem deixar contato</li>
          <li>Vê o anúncio, mas não confia o suficiente</li>
          <li>Adia a decisão e procura outro escritório</li>
        </ul>
      </div>

      <div class="problemFooter">
        <p class="p">
          Resultado: você até recebe visitas, mas não recebe <strong>leads qualificados</strong>.
        </p>
        <a class="btn btn--primary" href="#formulario">Quero corrigir isso</a>
      </div>
    </div>
  </div>
</section>


    <!-- IMPLICAÇÃO -->
    <!-- IMPLICAÇÃO -->
<section class="section">
  <div class="container">
    <div class="glass block">
      <div class="blockHead">
        <h2 class="h2">Enquanto isso, outros escritórios…</h2>

        <p class="p">
          Captam contatos diariamente, filtram clientes antes do atendimento
          e crescem de forma previsível.
        </p>

        <p class="p emphasis">
          <strong>Cada visitante perdido é um cliente a menos.</strong>
        </p>

        <a class="btn" href="#formulario">Receber proposta</a>
      </div>
    </div>
  </div>
</section>


    <!-- SOLUÇÃO -->
<section class="section">
  <div class="container">
    <div class="glass sectionPad">
      <h2 class="h2">É aqui que a M&T entra</h2>
      <p class="p">
        Criamos <strong>landing pages jurídicas com foco total em captação de leads</strong>.
        Nada de páginas inúteis. Nada de distrações.
      </p>

      <a class="btn btn--primary" href="#formulario">Quero uma landing page</a>
    </div>
  </div>
</section>


    <!-- O QUE ENTREGAMOS -->
    <section class="section">
      <h2 class="h2 center">O que você recebe</h2>

      <div class="grid cards">
        <div class="glass card">
          <h3>Landing Page Jurídica</h3>
          <p class="p">
            Página única, pensada para conduzir o visitante até o contato.
          </p>
        </div>

        <div class="glass card">
          <h3>Formulário Estratégico</h3>
          <p class="p">
            Captação objetiva, menos curiosos e mais leads qualificados.
          </p>
        </div>

        <div class="glass card">
          <h3>WhatsApp Integrado</h3>
          <p class="p">
            Contato imediato no momento certo.
          </p>
        </div>

        <div class="glass card">
          <h3>Copywriting Jurídico</h3>
          <p class="p">
            Textos baseados em SPIN Selling e gatilhos mentais.
          </p>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="glass sectionPad">
      <h2 class="h2">Como funciona</h2>

      <ol class="steps">
        <li>Entendemos sua área jurídica</li>
        <li>Criamos a estrutura da landing page</li>
        <li>Implementamos formulário e WhatsApp</li>
        <li>Você começa a receber leads</li>
      </ol>
    </section>

    <!-- PARA QUEM É -->
    <section class="section">
      <div class="grid two">
        <div>
          <h3>É para você que:</h3>
          <ul class="list">
            <li>Quer captar clientes pela internet</li>
            <li>Busca crescimento previsível</li>
            <li>Quer parar de depender só de indicação</li>
          </ul>
        </div>

        <div>
          <h3>Não é para quem:</h3>
          <ul class="list muted">
            <li>Quer apenas um site bonito</li>
            <li>Não atende leads quando eles chegam</li>
            <li>Não pretende crescer</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FORMULÁRIO -->
    <section id="formulario" class="glass sectionPad">
      <h2 class="h2">Comece a captar leads para seu escritório</h2>
      <p class="p">
        Preencha o formulário abaixo e receba uma proposta personalizada.
      </p>

      <form class="form" @submit.prevent="submit">
        <input class="input" v-model="form.nome" placeholder="Seu nome" required />
        <input class="input" v-model="form.email" type="email" placeholder="Seu e-mail" required />
        <textarea class="textarea" v-model="form.mensagem" placeholder="Conte brevemente sua necessidade" rows="4" required />
        <button class="btn btn--primary" type="submit">
          Quero minha landing page
        </button>
      </form>
    </section>

  </DefaultLayout>
</template>

<script setup>
import { reactive } from 'vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'

const form = reactive({
  nome: '',
  email: '',
  mensagem: ''
})

function submit(){
  alert('Lead enviado! (Integraremos com Zoho na próxima etapa)')
  form.nome = ''
  form.email = ''
  form.mensagem = ''
}
</script>

<style scoped>
/* =========================
   HERO
========================= */
.hero{
  padding: 34px 28px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.hero::before{
  content:"";
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(720px 320px at 12% 18%, rgba(124,58,237,.32), transparent 62%),
    radial-gradient(560px 280px at 86% 26%, rgba(167,139,250,.18), transparent 66%),
    radial-gradient(900px 420px at 50% 110%, rgba(0,0,0,.45), transparent 60%);
  pointer-events:none;
  z-index: 0;
}

.heroGrid{
  position: relative;
  z-index: 1;
  display:grid;
  grid-template-columns: 1.18fr .82fr;
  gap: 18px;
  align-items: stretch;
}

.highlight{
  color: var(--purple-2);
  text-shadow: 0 0 22px rgba(124,58,237,.22);
}

.hero :deep(.h1){
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.02em;
}
.hero :deep(.p){
  font-size: 16.5px;
  max-width: 620px;
}

.actions{
  display:flex;
  gap: 12px;
  margin-top: 18px;
  flex-wrap: wrap;
}

/* Side card do Hero */
.side{
  padding: 20px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(124,58,237,.18),
    rgba(255,255,255,.04)
  );
}

.side :deep(.p){
  font-size: 15px;
  max-width: none;
}

.tag{
  width: fit-content;
  display:inline-flex;
  align-items:center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(124,58,237,.12);
  color: var(--text);
  font-size: 12px;
}

/* =========================
   RITMO / SEÇÕES
========================= */
:global(.section){
  padding: 64px 0;
}

.sectionPad{
  padding: 22px;
}

.narrow{
  max-width: 780px;
}

/* Blocos de texto (Situação / Implicação) */
.block{
  padding: 22px;
}

.blockHead{
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

.emphasis{
  font-size: 18px;
  font-weight: 650;
  color: var(--purple-2);
  text-shadow: 0 0 18px rgba(124,58,237,.25);
}

/* =========================
   PROBLEMA (grid + CTA)
========================= */
.problem{
  padding: 22px;
}

.problemGrid{
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 16px;
  align-items: start;
}

.problemFooter{
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

/* =========================
   LISTAS (Problema / Para quem é)
========================= */
.list{
  margin-top: 12px;
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
}

.list li{
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.04);
  display:flex;
  align-items: center;
  gap: 10px;
}

.list li::before{
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--purple-main);
  box-shadow: var(--glow);
  flex: 0 0 auto;
}

.list.muted li{
  opacity: .80;
}

/* compact só muda o “peso”, não quebra */
.list.compact li{
  background: rgba(255,255,255,.035);
}

/* =========================
   CARDS (O que você recebe)
========================= */
.center{
  text-align:center;
  margin-bottom: 14px;
}

.cards{
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  align-items: stretch;
}

.card{
  padding: 16px;
  position: relative;
  overflow: hidden;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease;
}

.card::before{
  content:"";
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(420px 180px at 20% 10%, rgba(124,58,237,.18), transparent 60%),
    radial-gradient(420px 180px at 90% 110%, rgba(167,139,250,.10), transparent 60%);
  opacity: .55;
  pointer-events:none;
}

.card h3{
  position: relative;
  margin-bottom: 6px;
  font-size: 16px;
  letter-spacing: -0.01em;
}

.card :deep(.p){
  position: relative;
  font-size: 14.5px;
}

.card:hover{
  transform: translateY(-3px);
  border-color: rgba(167,139,250,.45);
  box-shadow: 0 22px 70px rgba(0,0,0,.45);
  background: rgba(255,255,255,.07);
}

/* =========================
   STEPS (Como funciona)
========================= */
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
  align-items:center;
  gap: 10px;
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
}

/* =========================
   2 COLUNAS (Para quem é / não é)
========================= */
.two{
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.two h3{
  margin-bottom: 10px;
}

/* =========================
   FORM (conversão)
========================= */
.form{
  display:grid;
  gap: 12px;
  margin-top: 14px;
  max-width: 760px;
}

.input, .textarea{
  padding: 13px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.06);
  color: var(--text);
  outline: none;
  transition: box-shadow .18s ease, border-color .18s ease, transform .18s ease, background .18s ease;
}

.input:hover, .textarea:hover{
  background: rgba(255,255,255,.08);
}

.input::placeholder, .textarea::placeholder{
  color: rgba(255,255,255,.38);
}
:global(body.theme-light) .input::placeholder,
:global(body.theme-light) .textarea::placeholder{
  color: rgba(15,18,32,.45);
}

.input:focus, .textarea:focus{
  border-color: rgba(124,58,237,.60);
  box-shadow: 0 0 0 4px rgba(124,58,237,.14);
}

.form :deep(.btn--primary){
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  font-weight: 650;
  letter-spacing: -0.01em;
}

/* =========================
   RESPONSIVO
========================= */
@media (max-width: 980px){
  .hero{ padding: 22px 18px; }
  .heroGrid{ grid-template-columns: 1fr; }
  .cards{ grid-template-columns: repeat(2, 1fr); }
  .two{ grid-template-columns: 1fr; }
  .sectionPad{ padding: 18px; }
  :global(.section){ padding: 54px 0; }
  .problemGrid{ grid-template-columns: 1fr; }
  .blockHead{ text-align: left; }
}

@media (max-width: 560px){
  .cards{ grid-template-columns: 1fr; }
  .hero :deep(.p){ font-size: 15.5px; }
  .actions{ gap: 10px; }
}
</style>
