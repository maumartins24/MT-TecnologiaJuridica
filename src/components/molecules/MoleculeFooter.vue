<template>
  <footer class="section">
    <div class="container glass footer">
      <div>
        <strong>M&T – Tecnologia Jurídica</strong>
        <p class="p" style="margin-top:6px">
          Visibilidade e alcance para escritórios e advogados autônomos.
        </p>
      </div>

      <div class="right">
        <p class="p" style="margin-top:6px"><span class="muted">E-mail:</span> contato@mttecnologiajuridica.com.br</p>
        <p class="p" style="margin-top:6px"><span class="muted">WhatsApp:</span> (11) 99999-9999</p>
        <p class="p" style="margin-top:6px">© {{ year }} M&T. Trademark.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer{ padding: 18px; display:flex; gap:16px; justify-content:space-between; flex-wrap:wrap; }
.right{ text-align:right; }
.muted{ color: var(--muted); }
</style>
