<template>
  <router-link :to="`/produk/${product.id}`" class="card">
    <div class="image-wrap">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <span class="category-tag">{{ product.category }}</span>
    </div>
    <div class="card-body">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ formattedPrice }}</p>
      <p class="stock" :class="{ low: product.stock <= 5 }">
        {{ product.stock > 0 ? `Stok: ${product.stock}` : 'Stok habis' }}
      </p>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: { type: Object, required: true },
})

const formattedPrice = computed(() =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(
    props.product.price
  )
)
</script>

<style scoped>
.card {
  display: block;
  background: var(--surface-1, #1c1e15);
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  border-top: 3px solid var(--od-green-bright, #7c9a4a);
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.4);
}

.image-wrap {
  position: relative;
  background: #0f100b;
}

.image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.35) 100%);
  pointer-events: none;
}

.image-wrap img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.card:hover .image-wrap img {
  transform: scale(1.05);
}

.category-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  background: linear-gradient(135deg, var(--od-green-bright, #7c9a4a), var(--od-green, #5a6b3a));
  color: #14150f;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 2px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

.card-body {
  padding: 14px 16px 18px;
  border-top: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
}

.card-body h3 {
  font-size: 1rem;
  margin: 0 0 6px;
  text-transform: none;
  letter-spacing: normal;
  color: var(--charcoal, #ece7d8);
}

.price {
  color: #ff8a45;
  font-weight: 700;
  margin: 0 0 4px;
}

.stock {
  font-size: 0.8rem;
  color: var(--tan, #cbb98d);
  opacity: 0.75;
  margin: 0;
}

.stock.low {
  color: var(--alert-red, #e5484d);
  opacity: 1;
  font-weight: 600;
}
</style>