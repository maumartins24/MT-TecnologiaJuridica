<template>
  <DefaultLayout>
    <!-- HERO / APRESENTAÇÃO -->
    <section class="page">
      <div class="container">
        <div class="glass pageCard stack">
          <div>
            <h1 class="h1">Quem Somos</h1>
            <p class="p">
              A M&T une tecnologia e visão jurídica para construir presença digital que gera confiança,
              clareza e conversão para advogados e escritórios.
            </p>
          </div>

          <!-- 2 COLUNAS: donos -->
          <div class="grid-2 ownersGrid">
            <!-- MAURICIO -->
            <article class="glass ownerCard">
              <div class="ownerTop">
                <div class="avatar" aria-hidden="true">M</div>
                <div class="ownerMeta">
                  <h2 class="ownerName">Mauricio</h2>
                  <p class="ownerRole">Desenvolvedor de Sistemas</p>
                </div>
              </div>

              <p class="p ownerText">
                Responsável pela estrutura, performance e experiência do usuário.
                Foco em páginas rápidas, elegantes e com conversão.
              </p>

              <ul class="list compact">
                <li>Arquitetura Vue + boas práticas</li>
                <li>Performance e responsividade</li>
                <li>Integrações (WhatsApp, formulários, automações)</li>
              </ul>
            </article>

            <!-- MARIA EDUARDA -->
            <article class="glass ownerCard">
              <div class="ownerTop">
                <div class="avatar" aria-hidden="true">ME</div>
                <div class="ownerMeta">
                  <h2 class="ownerName">Maria Eduarda</h2>
                  <p class="ownerRole">Estudante de Direito</p>
                </div>
              </div>

              <p class="p ownerText">
                Garante a coerência da comunicação com o mercado jurídico.
                Ajuda a transformar informação em clareza e autoridade.
              </p>

              <ul class="list compact">
                <li>Mensagem alinhada ao jurídico</li>
                <li>Clareza e credibilidade</li>
                <li>Foco em comunicação ética e objetiva</li>
              </ul>
            </article>
          </div>

          <div class="ctaRow">
            <RouterLink to="/servicos" class="btn">Ver Serviços</RouterLink>
            <RouterLink to="/formulario" class="btn btn--primary">Quero uma proposta</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- “JANELA INTERATIVA” DEV ↔ JURÍDICO -->
    <section class="page">
      <div class="container">
        <div class="glass pageCard window">
          <div class="windowTop">
            <div class="dots" aria-hidden="true">
              <span class="d red"></span>
              <span class="d yellow"></span>
              <span class="d green"></span>
            </div>

            <div class="windowTitle">
              Integração: Desenvolvimento + Ações Jurídicas
            </div>
          </div>

          <div class="windowBody">
            <!-- Tabs -->
            <div class="tabs">
              <button
                class="tab"
                :class="{ active: tab === 'dev' }"
                @click="tab = 'dev'"
              >
                Desenvolvimento
              </button>

              <button
                class="tab"
                :class="{ active: tab === 'juridico' }"
                @click="tab = 'juridico'"
              >
                Jurídico
              </button>

              <button
                class="tab"
                :class="{ active: tab === 'resultado' }"
                @click="tab = 'resultado'"
              >
                Resultado
              </button>
            </div>

            <!-- Conteúdo -->
            <div class="contentGrid">
              <div class="glass panel">
                <h3 class="panelTitle">
                  {{ content.title }}
                </h3>

                <p class="p">
                  {{ content.description }}
                </p>

                <ul class="list compact">
                  <li v-for="(item, i) in content.bullets" :key="i">{{ item }}</li>
                </ul>

                <div class="miniCta">
                  <RouterLink to="/formulario" class="btn btn--primary">
                    Quero aplicar isso no meu escritório
                  </RouterLink>
                </div>
              </div>

              <!-- Timeline/fluxo -->
              <div class="glass panel">
                <h3 class="panelTitle">Fluxo de trabalho (na prática)</h3>

                <ol class="steps">
                  <li><strong>Briefing</strong> — entendemos sua área e objetivo</li>
                  <li><strong>Copy</strong> — mensagem clara e persuasiva</li>
                  <li><strong>Layout</strong> — estrutura focada em conversão</li>
                  <li><strong>Implementação</strong> — formulário + WhatsApp + rotas</li>
                  <li><strong>Entrega</strong> — site no ar e pronto para captar leads</li>
                </ol>
              </div>
            </div>

            <p class="footNote">
              O diferencial da M&T é unir tecnologia e visão jurídica para criar páginas que não só “existem”,
              mas convertem com clareza.
            </p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'

const tab = ref('dev')

const content = computed(() => {
  if (tab.value === 'dev') {
    return {
      title: 'Desenvolvimento: experiência, performance e conversão',
      description:
        'Construímos uma base moderna e rápida, com design fluido e organizado para guiar o visitante até o contato.',
      bullets: [
        'Layout em grid (desktop/tablet/mobile)',
        'Velocidade e boas práticas',
        'Componentes reutilizáveis e escaláveis',
      ],
    }
  }

  if (tab.value === 'juridico') {
    return {
      title: 'Jurídico: comunicação alinhada e autoridade',
      description:
        'A estrutura e a mensagem são pensadas para dar segurança ao cliente e aumentar a confiança na tomada de decisão.',
      bullets: [
        'Clareza na proposta de valor',
        'Tom adequado ao mercado jurídico',
        'Foco em credibilidade e objetividade',
      ],
    }
  }

  return {
    title: 'Resultado: mais contatos, mais previsibilidade',
    description:
      'O objetivo é transformar tráfego em conversas reais: leads qualificados chegando com consistência.',
    bullets: [
      'Mais contatos via formulário e WhatsApp',
      'Menos visitas “curiosas” sem ação',
      'Mais previsibilidade de captação',
    ],
  }
})
</script>

<style scoped>
/* =========================
   Owners
========================= */
.ownersGrid{
  gap: 18px; /* mais respiro entre os cards */
}

.ownerCard{
  padding: 20px;
}

.ownerTop{
  display:flex;
  align-items:center;
  gap: 12px;
}

.avatar{
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display:grid;
  place-items:center;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
  background: linear-gradient(135deg, rgba(124,58,237,.95), rgba(167,139,250,.55));
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 12px 30px rgba(124,58,237,.25);
}

.ownerName{
  font-size: 18px;
  letter-spacing: -0.01em;
}

.ownerRole{
  margin-top: 2px;
  font-size: 13px;
  color: var(--muted);
}

.ownerText{
  margin-top: 10px;
}

.ctaRow{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* =========================
   List (local)
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

.list.compact li{
  background: rgba(255,255,255,.035);
}

/* =========================
   Window (interação)
========================= */
.window{
  padding: 0;     /* pageCard já dá padding, aqui controlamos manual */
  overflow: hidden;
}

.windowTop{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,.03);
}

.dots{
  display:flex;
  gap: 8px;
}
.d{
  width: 10px;
  height: 10px;
  border-radius: 999px;
  opacity: .9;
}
.red{ background: rgba(248,113,113,.85); }
.yellow{ background: rgba(250,204,21,.85); }
.green{ background: rgba(34,197,94,.85); }

.windowTitle{
  font-size: 13px;
  color: var(--muted);
  text-align: right;
}

.windowBody{
  padding: 18px;
}

/* Tabs */
.tabs{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.tab{
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.04);
  color: var(--muted);
  cursor: pointer;
  transition: transform .18s ease, background .18s ease, color .18s ease;
}

.tab:hover{
  transform: translateY(-1px);
  color: var(--text);
  background: rgba(124,58,237,.10);
}

.tab.active{
  color: var(--text);
  background: rgba(124,58,237,.14);
  border-color: rgba(167,139,250,.35);
  box-shadow: 0 0 22px rgba(124,58,237,.15);
}

/* Conteúdo */
.contentGrid{
  display:grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 16px;
  align-items: start;
}

.panel{
  padding: 16px;
}

.panelTitle{
  font-size: 16px;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}

.miniCta{
  margin-top: 14px;
}

/* Steps */
.steps{
  margin-top: 10px;
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

.footNote{
  margin-top: 14px;
  color: var(--muted);
  font-size: 13px;
}

/* =========================
   Responsivo
========================= */
@media (max-width: 980px){
  .contentGrid{ grid-template-columns: 1fr; }
  .windowTitle{ text-align: left; }
}

@media (max-width: 560px){
  .windowBody{ padding: 14px; }
  .ownerCard{ padding: 16px; }
}
</style>
