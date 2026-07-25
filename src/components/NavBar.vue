<template>
  <header class="nav">
    <div class="container nav-inner">
      <router-link to="/" class="brand">
        <span class="brand-mark">MA</span>
        <span class="brand-name">Murthehelp Airsoft</span>
      </router-link>
      <nav class="links">
        <router-link to="/">Katalog</router-link>
        <router-link to="/tentang">Tentang</router-link>
        <router-link to="/keranjang" class="cart-link">
          Keranjang
          <span v-if="cart.totalItems" class="cart-count">{{ cart.totalItems }}</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

const cart = useCartStore()
</script>

<style scoped>
.nav {
  background: #2b3320;
  border-bottom: 3px solid #ff6a2b;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  font-weight: 700;
  background: #ff6a2b;
  color: #fff;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 0.9rem;
}

.brand-name {
  color: #ece5d3;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.links {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.links a {
  color: #cabb92;
  text-decoration: none;
}

.links a.router-link-active {
  color: #ff6a2b;
}

.cart-link {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -16px;
  background: #ff6a2b;
  color: #fff;
  border-radius: 50%;
  font-size: 0.65rem;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>