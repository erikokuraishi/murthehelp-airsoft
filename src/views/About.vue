<template>
  <section class="container about">
    <span class="stencil-tag">Tentang</span>
    <h1>Murthehelp Airsoft</h1>
    <p>
      Murthehelp Airsoft adalah project katalog replika airsoft yang dibuat untuk memenuhi
      tugas UAS Desain Web 2 — dibangun dengan Vue 3, Vue Router, dan Pinia untuk manajemen
      state keranjang &amp; produk.
    </p>
    <p>
      Data produk pada demo ini bersumber dari layanan mock lokal (<code>src/services/api.js</code>),
      yang bisa diganti dengan mock API sungguhan (mis. mockapi.io atau json-server) cukup dengan
      mengisi variabel <code>BASE_URL</code>.
    </p>
  </section>
</template>

<style scoped>
.about {
  padding-top: 28px;
  padding-bottom: 48px;
  max-width: 680px;
}

.about h1 {
  margin: 10px 0 16px;
}

.about p {
  margin-bottom: 14px;
  color: #4a493f;
}

code {
  background: #ece5d3;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 0.9rem;
}
</style>