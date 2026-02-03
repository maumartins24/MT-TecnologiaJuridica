<template>
  <div class="floating">
    <!-- WhatsApp -->
    <a
      class="fab wa"
      :href="whatsUrl"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      title="Falar no WhatsApp"
    >
      WA
    </a>

    <!-- Theme Toggle -->
    <MoleculeThemeToggle />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MoleculeThemeToggle from '@molecules/MoleculeThemeToggle.vue'

const phone = '551194246819' // <<< TROQUE AQUI
const message = 'Olá! Gostaria de um orçamento para os serviços da M&T.'

const whatsUrl = computed(() =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
)
</script>

<style scoped>
.floating{
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  pointer-events: none;
  z-index: 60;
}

.fab{
  pointer-events: auto;
  width: 52px;
  height: 52px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  background: var(--card);
  box-shadow: var(--shadow);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: transform .2s ease, box-shadow .2s ease;
  color: var(--text);
  font-weight: 600;
}

.fab:hover{
  transform: translateY(-3px);
  box-shadow: 0 18px 45px rgba(0,0,0,.45);
}

.wa{
  position: absolute;
  left: 0;
  bottom: 0;
}

.theme{
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
