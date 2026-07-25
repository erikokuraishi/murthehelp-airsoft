<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p>© {{ year }} Murthehelp Airsoft </p>
      <p class="disclaimer">Replika 6mm untuk olahraga airsoft. Dijual sesuai peraturan yang berlaku.</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #1a1911 0%, #14140f 100%);
  color: #cabb92;
  margin-top: 48px;
  border-top: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6a2b, #d9a441, #46c2d9) 1;
}

.footer-inner {
  padding: 22px 24px;
  font-size: 0.85rem;
}

.footer-inner p:first-child {
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #ece5d3;
}

.disclaimer {
  color: #8a8579;
  margin-top: 6px;
  line-height: 1.5;
}
</style>