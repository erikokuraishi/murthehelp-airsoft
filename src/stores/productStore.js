import { defineStore } from 'pinia'
 
import { fetchProducts, fetchProductById } from '../services/api'
 
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    activeProduct: null,
    loading: false,
    error: null,
  }),
 
  getters: {
    categories: (state) => {
      const allCategories = state.products.map((product) => product.category)
      return [...new Set(allCategories)]
    },
  },
 
  actions: {
    async loadProducts() {
      this.loading = true
      this.error = null
      try {
        this.products = await fetchProducts()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
 
    async loadProductById(id) {
      this.loading = true
      this.error = null
      try {
        this.activeProduct = await fetchProductById(id)
      } catch (err) {
        this.error = err.message
        this.activeProduct = null
      } finally {
        this.loading = false
      }
    },
  },
})
 