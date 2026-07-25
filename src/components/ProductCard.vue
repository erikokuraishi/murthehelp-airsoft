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
  background: #fff;
  border: 1px solid #d8cfb2;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(32, 31, 28, 0.12);
}

.image-wrap {
  position: relative;
}

.image-wrap img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.category-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #414d2a;
  color: #ece5d3;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 2px;
}

.card-body {
  padding: 14px 16px 18px;
}

.card-body h3 {
  font-size: 1rem;
  margin: 0 0 6px;
  text-transform: none;
  letter-spacing: normal;
}

.price {
  color: #ff6a2b;
  font-weight: 600;
  margin: 0 0 4px;
}

.stock {
  font-size: 0.8rem;
  color: #6b6a5f;
  margin: 0;
}

.stock.low {
  color: #b5482f;
  font-weight: 600;
}
</style>