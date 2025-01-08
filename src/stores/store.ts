import { defineStore } from 'pinia'

interface States {
  forms: string[]
}

export const useStore = defineStore('store', {
  state: (): States => ({
    forms: []
  }),
  actions: {
    
  },
  getters: {
    getForms: state => state.forms,
  }
})
