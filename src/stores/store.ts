import { defineStore } from 'pinia'

interface States {
  forms: string[],
  newForm: Form
}

export const useStore = defineStore('store', {
  state: (): States => ({
    forms: [],
    newForm: {
      form_title: '',
      form_type: 'public',
      description: '',
      sections: [
        {
          title: '',
          type: 'text',
          required: false
        },
      ]
    }
  }),
  actions: {
    setNewForm(val: Form) {
      this.newForm = val;
    },
    
    resetNewForm() {
      this.newForm = {
        form_title: '',
        form_type: 'public',
        description: '',
        sections: [
          {
            title: '',
            type: 'text',
            required: false
          },
        ]
      }
    },
  },
  getters: {
    getForms: state => state.forms,
  }
})
