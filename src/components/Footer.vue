<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p>© {{ year }} Murthehelp Airsoft — Tugas UAS Desain Web 2.</p>
      <p class="disclaimer">Replika 6mm untuk olahraga airsoft. Dijual sesuai peraturan yang berlaku.</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #201f1c;
  color: #cabb92;
  margin-top: 48px;
}

.footer-inner {
  padding: 20px 24px;
  font-size: 0.85rem;
}

.disclaimer {
  color: #8a8579;
  margin-top: 4px;
}
</style>