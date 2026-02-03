<template>
  <div class="appShell">
    <MoleculeHeader />
    <main>
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

<style scoped>
.appShell{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main{
  flex: 1;
}
</style>
