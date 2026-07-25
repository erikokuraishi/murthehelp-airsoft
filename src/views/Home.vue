<template>
  <div class="home">
    <section class="hero">
      <div class="container hero-inner">
        <span class="stencil-tag">Katalog</span>
        <h1>Murthehelp Airsoft</h1>
        <p class="hero-sub">
          Replika AEG, GBB, spring, sampai aksesoris tactical Semua stok dicek langsung dari gudang.
        </p>
        <div class="rank-stripe"></div>
      </div>
    </section>

    <section class="container">
      <SearchFilter
        :search="search"
        :categories="store.categories"
        :active-category="activeCategory"
        @update:search="search = $event"
        @update:activeCategory="activeCategory = $event"
      />

      <p v-if="store.loading">Memuat produk...</p>
      <p v-else-if="store.error">Gagal memuat: {{ store.error }}</p>
      <p v-else-if="filteredProducts.length === 0">Tidak ada produk yang cocok.</p>

      <div v-else class="grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useProductStore } from '../stores/productStore'
import ProductCard from '../components/ProductCard.vue'
import SearchFilter from '../components/SearchFilter.vue'

const store = useProductStore()
const search = ref('')
const activeCategory = ref('')

onMounted(() => {
  store.loadProducts()
})

const filteredProducts = computed(() =>
  store.products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesCategory = activeCategory.value === '' || p.category === activeCategory.value
    return matchesSearch && matchesCategory
  })
)
</script>

<style scoped>
.hero {
  background:
    radial-gradient(circle at 85% 15%, rgba(255, 122, 41, 0.16), transparent 40%),
    radial-gradient(circle at 95% 70%, rgba(70, 194, 217, 0.1), transparent 38%),
    radial-gradient(circle at 5% 85%, rgba(217, 164, 65, 0.1), transparent 36%),
    linear-gradient(135deg, #333d22 0%, #262e18 100%);
  padding: 56px 0 44px;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6a2b, #d9a441, #46c2d9) 1;
  position: relative;
  overflow: hidden;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
}

.hero h1 {
  color: #ece5d3;
  font-size: clamp(1.8rem, 4.5vw, 2.7rem);
  max-width: 640px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.hero-sub {
  color: #cabb92;
  max-width: 520px;
  font-size: 0.98rem;
  line-height: 1.6;
}

.container {
  padding-top: 36px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 22px;
  padding-bottom: 48px;
}

/* rotasi 3 warna aksen kartu produk (hijau/brass/biru) biar grid nggak monoton satu warna */
.grid > :deep(*:nth-child(3n+2)) {
  border-top-color: var(--brass, #d9a441);
}

.grid > :deep(*:nth-child(3n+2) .category-tag) {
  background: linear-gradient(135deg, var(--brass, #d9a441), var(--brass-deep, #a97b26));
  color: #14150f;
}

.grid > :deep(*:nth-child(3n)) {
  border-top-color: var(--signal-blue, #46c2d9);
}

.grid > :deep(*:nth-child(3n) .category-tag) {
  background: linear-gradient(135deg, var(--signal-blue, #46c2d9), var(--signal-blue-deep, #2790a3));
  color: #0d1b1e;
}
</style>