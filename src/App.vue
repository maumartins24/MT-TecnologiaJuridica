<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="route" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </Transition>
  </RouterView>
</template>

<script setup>
</script>

<style>
/* Transição suave entre páginas */
.route-enter-active,
.route-leave-active{
  transition: opacity .22s ease, transform .22s ease;
}
.route-enter-from{
  opacity: 0;
  transform: translateY(8px);
}
.route-leave-to{
  opacity: 0;
  transform: translateY(-6px);
}
</style>
