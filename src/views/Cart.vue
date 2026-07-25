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
  checkoutDone.value = true
  cartStore.clearCart()

  setTimeout(() => {
    checkoutDone.value = false
  }, 3000)
}
</script>

<style scoped>
.cart-page {
  max-width: 840px;
  margin: 0 auto;
  padding: 32px 24px 56px;
}

.cart-page h1 {
  margin-bottom: 20px;
}

.empty {
  color: var(--tan, #cbb98d);
  opacity: 0.7;
  text-align: center;
  padding: 48px 0;
  border: 1px dashed var(--border-soft, rgba(203, 185, 141, 0.16));
  border-radius: 6px;
}

.cart-list {
  background: var(--surface-1, #1c1e15);
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  border-radius: 6px;
  padding: 4px 16px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
}

.item-info {
  flex: 1;
}

.item-name {
  font-weight: 700;
  color: var(--charcoal, #ece7d8);
}

.item-price {
  color: var(--tan, #cbb98d);
  opacity: 0.75;
  font-size: 0.9rem;
}

.qty-input {
  width: 60px;
  padding: 7px;
  border-radius: 4px;
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  background: var(--surface-2, #232619);
  color: var(--charcoal, #ece7d8);
}

.item-subtotal {
  width: 130px;
  text-align: right;
  font-weight: 700;
  color: #ff8a45;
}

.remove-btn {
  padding: 7px 14px;
  cursor: pointer;
  background: transparent;
  color: var(--tan, #cbb98d);
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  border-radius: 4px;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.remove-btn:hover {
  border-color: var(--alert-red, #e5484d);
  color: var(--alert-red, #e5484d);
}

.cart-summary {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6a2b, #d9a441, #46c2d9) 1;
  text-align: right;
}

.total-items {
  color: var(--tan, #cbb98d);
  opacity: 0.8;
}

.total-price {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ff8a45;
}

.checkout-btn {
  padding: 11px 26px;
  font-size: 1rem;
  cursor: pointer;
  background: linear-gradient(135deg, var(--signal-blue, #46c2d9), var(--signal-blue-deep, #2790a3));
  color: #0d1b1e;
  border: none;
  border-radius: 6px;
  margin-top: 12px;
  font-weight: 700;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.checkout-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(70, 194, 217, 0.35);
}

.success-message {
  color: #8bc34a;
  margin-top: 10px;
  font-weight: 600;
}
</style>