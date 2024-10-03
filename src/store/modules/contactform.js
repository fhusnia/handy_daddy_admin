import { ContactFormAction } from '../actions'
import { contactformGetters } from '../getters'
import { ContactFormMutations } from '../mutations'

export const ContactForm = {
  namespaced: true,
  state: {
    contactforms: [],
  },
  mutations: ContactFormMutations,
  getters: contactformGetters,
  actions: ContactFormAction,
}
