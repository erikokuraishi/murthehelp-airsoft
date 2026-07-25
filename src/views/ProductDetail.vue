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
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}

.detail-wrapper {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.product-image {
  width: 350px;
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.product-info {
  flex: 1;
  min-width: 250px;
}

.category {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c7a2c;
}

.specs {
  list-style: none;
  padding: 0;
}

.specs li {
  padding: 4px 0;
  border-bottom: 1px solid #eee;
}

.add-to-cart {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.add-to-cart input {
  width: 60px;
  padding: 6px;
}

.add-to-cart button {
  padding: 8px 16px;
  cursor: pointer;
}

.success-message {
  color: #2c7a2c;
  margin-top: 10px;
}

.error {
  color: #b00020;
}
</style>