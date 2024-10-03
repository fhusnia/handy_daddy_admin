import { ContactAction } from '../actions'
import { contactGetters } from '../getters'
import { ContactMutations } from '../mutations'

export const Contact = {
  namespaced: true,
  state: {
    contacts: [],
  },
  mutations: ContactMutations,
  getters: contactGetters,
  actions: ContactAction,
}
