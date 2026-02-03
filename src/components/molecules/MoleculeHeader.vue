<template>
  <header class="wrap">
    <div class="container">
      <div class="glass header">
        <RouterLink to="/" class="brand" @click="closeMenu">
          <span class="dot" />
          <div class="brandText">
            <strong class="brandTitle">M&T</strong>
            <div class="sub">Tecnologia Jurídica</div>
          </div>
        </RouterLink>

        <nav class="nav" :data-open="menuOpen">
          <RouterLink to="/" class="link" active-class="active" @click="closeMenu">Home</RouterLink>
          <RouterLink to="/sobre" class="link" active-class="active" @click="closeMenu">Quem Somos</RouterLink>
          <RouterLink to="/servicos" class="link" active-class="active" @click="closeMenu">Serviços</RouterLink>
          <RouterLink to="/como-funciona" class="link" active-class="active" @click="closeMenu">Como Funciona</RouterLink>
          <RouterLink to="/contato" class="link" active-class="active" @click="closeMenu">Contato</RouterLink>

          <RouterLink to="/formulario" class="cta" active-class="ctaActive" @click="closeMenu">
            Formulário
          </RouterLink>
        </nav>

        <button class="menuBtn" type="button" @click="toggleMenu" aria-label="Abrir menu">
          <span class="menuIcon" />
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="backdrop" @click="closeMenu" />
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()

function toggleMenu(){ menuOpen.value = !menuOpen.value }
function closeMenu(){ menuOpen.value = false }

watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<style scoped>
.wrap{
  position: sticky;
  top: 12px;
  z-index: 80;
  margin: 12px 0 0;
}

.header{
  padding: 12px 14px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 14px;
}

.brand{
  display:flex;
  gap:10px;
  align-items:center;
  min-width: 200px;
  text-decoration: none;
  color: var(--text);
}
.dot{
  width:10px;
  height:10px;
  border-radius:999px;
  background: var(--purple-main);
  box-shadow: var(--glow);
}
.brandText{ display:flex; flex-direction:column; line-height: 1.05; }
.brandTitle{ letter-spacing: -0.01em; }
.sub{ color: var(--muted); font-size: 12px; margin-top: 2px; }

.nav{
  display:flex;
  gap: 8px;
  align-items:center;
  flex-wrap:wrap;
  justify-content:flex-end;
}

.link{
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--muted);
  border: 1px solid transparent;
  text-decoration: none;
  transition: background .2s ease, color .2s ease, border-color .2s ease;
}
.link:hover{
  color: var(--text);
  background: rgba(124,58,237,.10);
}

.active{
  color: var(--text);
  background: rgba(124,58,237,.14);
  border: 1px solid var(--border);
}

.cta{
  padding: 10px 12px;
  border-radius: 12px;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(135deg, rgba(124,58,237,.95), rgba(167,139,250,.55));
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 0 22px rgba(124,58,237,.25);
}
.ctaActive{
  box-shadow: 0 0 28px rgba(124,58,237,.30);
  filter: brightness(1.04);
}

.menuBtn{
  display:none;
  width: 44px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.05);
  cursor: pointer;
}
.menuIcon{
  display:block;
  width: 18px;
  height: 2px;
  background: var(--text);
  position: relative;
  margin: 0 auto;
  border-radius: 999px;
}
.menuIcon::before,
.menuIcon::after{
  content:"";
  position:absolute;
  left:0;
  width: 18px;
  height: 2px;
  background: var(--text);
  border-radius: 999px;
}
.menuIcon::before{ top: -6px; }
.menuIcon::after{ top: 6px; }

.backdrop{
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  z-index: 70;
}

@media (max-width: 980px){
  .brand{ min-width: 160px; }
  .link{ padding: 9px 10px; }
  .cta{ padding: 9px 10px; }
}

@media (max-width: 720px){
  .menuBtn{ display:inline-flex; align-items:center; justify-content:center; }

  .nav{
    position: absolute;
    left: 16px;
    right: 16px;
    top: calc(100% + 10px);
    padding: 12px;
    border-radius: 16px;
    border: 1px solid var(--border);
    background: rgba(0,0,0,.35);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 22px 70px rgba(0,0,0,.55);

    display: grid;
    gap: 8px;

    opacity: 0;
    transform: translateY(-6px);
    pointer-events: none;
    transition: opacity .2s ease, transform .2s ease;
    z-index: 90;
  }

  .nav[data-open="true"]{
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .link, .cta{
    width: 100%;
    justify-content: center;
  }

  :global(body.theme-light) .nav{
    background: rgba(255,255,255,.65);
  }
}
</style>
