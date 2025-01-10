import { getFormsAPI } from '@/composables/api';
import type { AxiosResponse } from 'axios';
import { defineStore } from 'pinia'

interface States {
  forms: Form[],
  totla_quantity: number,
  defaultPerPage: number,
  newForm: Form
}

export const useStore = defineStore('store', {
  state: (): States => ({
    forms: [],
    totla_quantity: 0,
    defaultPerPage: 6,
    newForm: {
      form_id: '',
      form_title: '',
      form_type: 'public',
      description: '',
      sections: [
        {
          title: '',
          type: 'text',
          required: false,
          properties: []
        },
      ]
    }
  }),
  actions: {
    async getAllForms(page: number, per_page: number) {
      const response = await getFormsAPI({ page, per_page }) as AxiosResponse;
      if (response?.status === 200) {
        this.forms = response.data.data.data;
        this.totla_quantity = response.data.data.totla_quantity;
      }
    },

    resetNewForm() {
      this.newForm = {
        form_id: '',
        form_title: '',
        form_type: 'public',
        description: '',
        sections: [
          {
            title: '',
            type: 'text',
            required: false,
            properties: []
          },
        ]
      }
    },
  },
  getters: {
    getForms: state => state.forms,
    getTotalFroms: state => state.totla_quantity,
    getDefaultPerPage: state => state.defaultPerPage,
  }
})
