<template>
  <section class="hero">
    <div class="container hero-inner">
      <span class="stencil-tag">Katalog</span>
      <h1>Murthehelp Airsoft</h1>
      <p class="hero-sub">
        Replika AEG, GBB, spring, sampai aksesoris tactical — semua stok dicek langsung dari gudang.
      </p>
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
  background: #2b3320;
  padding: 48px 0 40px;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero h1 {
  color: #ece5d3;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  max-width: 640px;
}

.hero-sub {
  color: #cabb92;
  max-width: 520px;
  font-size: 0.95rem;
}

.container {
  padding-top: 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
  padding-bottom: 48px;
}
</style>