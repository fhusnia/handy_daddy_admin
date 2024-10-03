import { PRIVACYAction } from '../actions'
import { privacyGetters } from '../getters'
import { PrivacyMutations } from '../mutations'

export const Privacy = {
  namespaced: true,
  state: {
    privacies: [],
  },
  mutations: PrivacyMutations,
  getters: privacyGetters,
  actions: PRIVACYAction,
}
