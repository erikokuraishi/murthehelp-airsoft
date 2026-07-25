<template>
  <div class="filter-bar">
    <input
      class="search"
      type="text"
      placeholder="Cari produk (mis. M4, Glock, Red Dot)..."
      :value="search"
      @input="$emit('update:search', $event.target.value)"
    />
    <div class="categories">
      <button
        class="chip"
        :class="{ active: activeCategory === '' }"
        @click="$emit('update:activeCategory', '')"
      >
        Semua
      </button>
      <button
        v-for="cat in categories"
        :key="cat"
        class="chip"
        :class="{ active: activeCategory === cat }"
        @click="$emit('update:activeCategory', cat)"
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  search: { type: String, default: '' },
  categories: { type: Array, default: () => [] },
  activeCategory: { type: String, default: '' },
})

defineEmits(['update:search', 'update:activeCategory'])
</script>

<style scoped>
.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 28px;
}

.search {
  padding: 11px 16px;
  border: 1px solid var(--border-soft, rgba(203, 185, 141, 0.16));
  border-radius: 4px;
  font-size: 0.95rem;
  background: var(--surface-1, #1c1e15);
  color: var(--charcoal, #ece7d8);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.search::placeholder {
  color: var(--tan, #cbb98d);
  opacity: 0.55;
}

.search:focus {
  outline: none;
  border-color: var(--signal-blue, #46c2d9);
  box-shadow: 0 0 0 3px var(--signal-soft, rgba(70, 194, 217, 0.16));
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border: 1px solid var(--od-green, #5a6b3a);
  background: transparent;
  color: var(--tan, #cbb98d);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.chip:hover {
  border-color: var(--signal-blue, #46c2d9);
  color: var(--charcoal, #ece7d8);
}

.chip.active {
  background: linear-gradient(135deg, var(--brass, #d9a441), var(--brass-deep, #a97b26));
  color: #14150f;
  border-color: transparent;
  font-weight: 600;
}
</style>