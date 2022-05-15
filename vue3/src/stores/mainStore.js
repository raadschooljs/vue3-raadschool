import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () => ({
    showModal: false
  }),
  getters: {
    
  },
  actions: {
    toggleShowModal() {
      this.showModal = !this.showModal
    }
  }
})
