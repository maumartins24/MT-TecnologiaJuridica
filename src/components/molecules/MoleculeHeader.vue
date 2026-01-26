<template>
  <header class="wrap">
    <div class="container glass header">
      <RouterLink to="/" class="brand">
        <span class="dot" />
        <div>
          <strong>M&T</strong>
          <div class="sub">Tecnologia Jurídica</div>
        </div>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/" class="link" active-class="active">Home</RouterLink>
        <RouterLink to="/quem-somos" class="link" active-class="active">Quem Somos</RouterLink>
        <RouterLink to="/servicos" class="link" active-class="active">Serviços</RouterLink>
        <RouterLink to="/contato" class="link" active-class="active">Contato</RouterLink>
        <RouterLink to="/formulario" class="cta" active-class="active">Formulário</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.wrap{ position: sticky; top: 12px; z-index: 20; margin: 12px 0 0; }
.header{ padding: 14px 16px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
.brand{ display:flex; gap:10px; align-items:center; }
.dot{ width:10px; height:10px; border-radius:999px; background: var(--purple-main); box-shadow: var(--glow); }
.sub{ color: var(--muted); font-size: 12px; margin-top: 2px; }
.nav{ display:flex; gap:10px; align-items:center; flex-wrap:wrap; justify-content:flex-end; }
.link{ padding:10px 12px; border-radius: 12px; color: var(--muted); }
.link:hover{ color: var(--text); background: rgba(124,58,237,.10); }
.active{ color: var(--text); background: rgba(124,58,237,.16); border: 1px solid var(--border); }
.cta{
  padding:10px 12px; border-radius: 12px;
  background: linear-gradient(135deg, rgba(124,58,237,.95), rgba(167,139,250,.55));
  border: 1px solid rgba(255,255,255,.12);
}
</style>
