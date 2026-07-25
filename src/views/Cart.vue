<template>
  <div class="cart-page">
    <h1>Keranjang Belanja</h1>

   
    <p v-if="cartStore.items.length === 0" class="empty">
      Keranjang kamu masih kosong.
    </p>

    
    <div v-else class="cart-list">
      
      <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="item-image" />

        <div class="item-info">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">Rp{{ item.price.toLocaleString('id-ID') }}</p>
        </div>

        <input
          type="number"
          min="1"
          :value="item.qty"
          @change="handleQtyChange(item.id, $event)"
          class="qty-input"
        />

        <p class="item-subtotal">
          Rp{{ (item.price * item.qty).toLocaleString('id-ID') }}
        </p>

        <button @click="cartStore.removeFromCart(item.id)" class="remove-btn">
          Hapus
        </button>
      </div>
    </div>

    
    <div v-if="cartStore.items.length > 0" class="cart-summary">
      <p class="total-items">Total item: {{ cartStore.totalItems }}</p>
      <p class="total-price">
        Total harga: Rp{{ cartStore.totalPrice.toLocaleString('id-ID') }}
      </p>

      
      <button @click="handleCheckout" class="checkout-btn">Checkout</button>

      <p v-if="checkoutDone" class="success-message">
        Checkout berhasil (simulasi)! Terima kasih sudah belanja.
      </p>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
const checkoutDone = ref(false)

function handleQtyChange(id, event) {
  const newQty = Number(event.target.value)
  cartStore.updateQty(id, newQty)
}

function handleCheckout() {
  // Simulasi checkout saja, tidak ada payment sungguhan
  checkoutDone.value = true
  cartStore.clearCart()

  setTimeout(() => {
    checkoutDone.value = false
  }, 3000)
}
</script>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.empty {
  color: #888;
  text-align: center;
  padding: 40px 0;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.item-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
}

.item-info {
  flex: 1;
}

.item-name {
  font-weight: bold;
}

.item-price {
  color: #666;
  font-size: 0.9rem;
}

.qty-input {
  width: 60px;
  padding: 6px;
}

.item-subtotal {
  width: 130px;
  text-align: right;
  font-weight: bold;
}

.remove-btn {
  padding: 6px 12px;
  cursor: pointer;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.cart-summary {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 2px solid #333;
  text-align: right;
}

.total-price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c7a2c;
}

.checkout-btn {
  padding: 10px 24px;
  font-size: 1rem;
  cursor: pointer;
  background: #2c7a2c;
  color: white;
  border: none;
  border-radius: 6px;
  margin-top: 10px;
}

.success-message {
  color: #2c7a2c;
  margin-top: 10px;
}
</style>