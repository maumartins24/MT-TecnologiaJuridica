<template>
  <footer class="footerWrap">
    <div class="container">
      <div class="glass footerCard">
        <div class="left">
          <strong class="brand">M&T – Tecnologia Jurídica</strong>
          <p class="p small">
            Visibilidade e alcance para escritórios e advogados autônomos,
            com presença digital focada em conversão.
          </p>
        </div>

        <div class="right">
          <div class="row">
            <span class="label">E-mail</span>
            <a class="value link" href="mailto:contato@mttecnologiajuridica.com.br">
              contato@mttecnologiajuridica.com.br
            </a>
          </div>

          <div class="row">
            <span class="label">WhatsApp 1</span>
            <a class="value link" href="https://wa.me/5511994246819" target="_blank" rel="noreferrer">
              (11) 99424-6819
            </a>
          </div>

          <div class="row">
            <span class="label">WhatsApp 2</span>
            <a class="value link" href="https://wa.me/5511994224599" target="_blank" rel="noreferrer">
              (11) 99422-4599
            </a>
          </div>

          <p class="p tiny copy">
            © {{ year }} M&T. Trademark.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footerWrap{
  padding: 36px 0 44px;
}

.footerCard{
  padding: 18px;
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 18px;
  align-items: start;
}

.brand{
  letter-spacing: -0.01em;
}

.small{
  margin-top: 8px;
  max-width: 520px;
}

.right{
  display:grid;
  gap: 10px;
  justify-items: end;
  text-align: right;
}

.row{
  display:grid;
  gap: 4px;
}

.label{
  font-size: 12px;
  color: var(--muted);
}

.value{
  font-size: 14px;
  color: var(--text);
}

.link{
  text-decoration: none;
  opacity: .95;
}
.link:hover{
  text-decoration: underline;
}

.tiny{
  margin-top: 6px;
  font-size: 12px;
  color: var(--muted);
}

.copy{
  opacity: .85;
}

/* responsivo */
@media (max-width: 980px){
  .footerCard{ grid-template-columns: 1fr; }
  .right{ justify-items: start; text-align: left; }
  .small{ max-width: none; }
}
</style>
