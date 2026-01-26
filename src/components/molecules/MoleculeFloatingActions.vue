<template>
  <div class="floating">
    <a class="fab wa" :href="whatsUrl" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
    <button class="fab theme" @click="toggleTheme" aria-label="Alternar tema">
      {{ theme === 'dark' ? '☾' : '☀' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const theme = ref('dark')
const KEY = 'mt_theme'

function applyTheme(next){
  theme.value = next
  document.body.classList.remove('theme-dark', 'theme-light')
  document.body.classList.add(next === 'light' ? 'theme-light' : 'theme-dark')
  localStorage.setItem(KEY, next)
}

function toggleTheme(){
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const saved = localStorage.getItem(KEY)
  applyTheme(saved || 'dark')
})

const phone = '5511999999999' // <<< TROQUE AQUI
const message = 'Olá! Gostaria de um orçamento para os serviços da M&T.'
const whatsUrl = computed(() => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`)
</script>

<style scoped>
.floating{
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  pointer-events: none;
  z-index: 50;
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
  backdrop-filter: var(--blur);
  transition: transform .2s ease;
  color: var(--text);
}
.fab:hover{ transform: translateY(-2px); }
.wa{ position: absolute; left: 0; bottom: 0; }
.theme{ position: absolute; right: 0; bottom: 0; cursor: pointer; }
</style>
