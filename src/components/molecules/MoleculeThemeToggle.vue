<template>
  <button
    class="fab theme"
    @click="toggleTheme"
    aria-label="Alternar tema"
    :title="theme === 'theme-dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
  >
    <span v-if="theme === 'theme-dark'">☾</span>
    <span v-else>☀</span>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.theme{
  cursor: pointer;
}
</style>
