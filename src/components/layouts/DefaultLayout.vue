<template>
  <div>
    <MoleculeHeader />
    <main class="container section">
      <slot />
    </main>
    <MoleculeFooter />
    <MoleculeFloatingActions />
  </div>
</template>

<script setup>
import MoleculeHeader from '@molecules/MoleculeHeader.vue'
import MoleculeFooter from '@molecules/MoleculeFooter.vue'
import MoleculeFloatingActions from '@molecules/MoleculeFloatingActions.vue'
</script>
