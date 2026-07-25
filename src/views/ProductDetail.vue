<template>
 
  <div class="product-detail">
  
    <p v-if="productStore.loading">Memuat data produk...</p>

    
    <p v-else-if="productStore.error" class="error">
      {{ productStore.error }}
    </p>

    
    <div v-else-if="product" class="detail-wrapper">
      <img :src="product.image" :alt="product.name" class="product-image" />

      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="category">{{ product.category }}</p>
        <p class="price">Rp{{ formattedPrice }}</p>
        <p class="description">{{ product.description }}</p>

        <h3>Spesifikasi</h3>
        <ul class="specs">
          <li v-for="(value, key) in product.specifications" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>

        <p class="stock">Stok tersedia: {{ product.stock }}</p>

       
        <div class="add-to-cart">
          <label for="qty">Jumlah:</label>
          <input id="qty" type="number" v-model.number="qty" min="1" />
          <button @click="handleAddToCart">Tambah ke Keranjang</button>
        </div>

        <p v-if="justAdded" class="success-message">
          Produk berhasil ditambahkan ke keranjang!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'

import { useProductStore } from '../stores/productStore'

import { useCartStore } from '../stores/cartStore'

const props = defineProps({
  id: String,
})

const productStore = useProductStore()
const cartStore = useCartStore()

const qty = ref(1)
const justAdded = ref(false)

const product = computed(() => productStore.activeProduct)

const formattedPrice = computed(() => {
  if (!product.value) return '0'
  return product.value.price.toLocaleString('id-ID')
})

function handleAddToCart() {
  cartStore.addToCart(product.value, qty.value)
  justAdded.value = true
  // Sembunyikan lagi pesan sukses setelah 2 detik
  setTimeout(() => {
    justAdded.value = false
  }, 2000)
}

onMounted(() => {
  productStore.loadProductById(props.id)
})
</script>

<style scoped>
.product-detail {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 24px 56px;
}

.detail-wrapper {
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
}

.product-image {
  width: 380px;
  max-width: 100%;
  height: 380px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  box-shadow: var(--shadow-deep, 0 18px 40px rgba(0, 0, 0, 0.45));
  background: var(--surface-1, #1c1e15);
}

.product-info {
  flex: 1;
  min-width: 250px;
}

.product-info h1 {
  margin-bottom: 6px;
}

.category {
  color: var(--brass, #d9a441);
  opacity: 0.9;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}

.price {
  font-size: 1.7rem;
  font-weight: 700;
  color: #ff8a45;
  margin: 8px 0 14px;
}

.description {
  color: var(--charcoal, #ece7d8);
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 20px;
}

.specs {
  list-style: none;
  padding: 0;
  margin: 10px 0 18px;
}

.specs li {
  padding: 8px 0;
  border-bottom: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  color: var(--charcoal, #ece7d8);
}

.specs li strong {
  color: var(--signal-blue, #46c2d9);
  font-weight: 600;
  margin-right: 6px;
}

.stock {
  color: var(--tan, #cbb98d);
  opacity: 0.8;
  font-size: 0.9rem;
}

.add-to-cart {
  margin-top: 22px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.add-to-cart label {
  color: var(--tan, #cbb98d);
  font-size: 0.9rem;
}

.add-to-cart input {
  width: 64px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  background: var(--surface-1, #1c1e15);
  color: var(--charcoal, #ece7d8);
}

.add-to-cart button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  background: linear-gradient(135deg, var(--blaze, #ff7a29), #e8621a);
  color: #15170f;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.add-to-cart button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(255, 122, 41, 0.35);
}

.success-message {
  color: #8bc34a;
  margin-top: 12px;
  font-weight: 600;
}

.error {
  color: var(--alert-red, #e5484d);
}
</style>