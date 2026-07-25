<template>
  <header class="nav">
    <div class="container nav-inner">
      <router-link to="/" class="brand">
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
  background: linear-gradient(180deg, #30391f 0%, #262e18 100%);
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6a2b, #d9a441, #46c2d9) 1;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
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
  transition: opacity 0.15s ease;
}

.brand:hover {
  opacity: 0.85;
}

.brand-mark {
  font-weight: 700;
  background: linear-gradient(135deg, #ff8a45, #d9a441);
  color: #14150f;
  padding: 4px 9px;
  border-radius: 3px;
  font-size: 0.9rem;
  box-shadow: 0 3px 10px rgba(217, 164, 65, 0.35);
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
  position: relative;
  color: #cabb92;
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.15s ease;
}

.links a:hover {
  color: #6fe0f0;
}

.links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #46c2d9;
  transition: width 0.18s ease;
}

.links a:hover::after {
  width: 100%;
}

.links a.router-link-active {
  color: #ff6a2b;
}

.links a.router-link-active::after {
  width: 100%;
  background: #ff6a2b;
}

.cart-link {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -16px;
  background: linear-gradient(135deg, #46c2d9, #2790a3);
  color: #0d1b1e;
  border-radius: 50%;
  font-size: 0.65rem;
  font-weight: 700;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(70, 194, 217, 0.5);
}
</style>