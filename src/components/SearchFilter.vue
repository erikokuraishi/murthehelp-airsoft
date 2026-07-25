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
  padding: 10px 14px;
  border: 1px solid #c9bd9a;
  border-radius: 3px;
  font-size: 0.95rem;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border: 1px solid #414d2a;
  background: transparent;
  color: #2b3320;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
}

.chip.active {
  background: #414d2a;
  color: #ece5d3;
}
</style>