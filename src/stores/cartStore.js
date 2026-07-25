import { defineStore } from 'pinia'
 
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
 
  getters: {
    
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + item.qty, 0)
    },
 
    
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
    },
  },
 
  actions: {
   
    addToCart(product, qty = 1) {
      const existingItem = this.items.find((item) => item.id === product.id)
 
      if (existingItem) {
        // Produk sudah ada di keranjang -> tinggal naikkan qty-nya
        existingItem.qty += qty
      } else {
     
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          qty: qty,
        })
      }
    },
 
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id)
    },
 
    updateQty(id, qty) {
      const item = this.items.find((item) => item.id === id)
      if (item) {
        item.qty = qty < 1 ? 1 : qty
      }
    },
 
    clearCart() {
      this.items = []
    },
  },
})
 