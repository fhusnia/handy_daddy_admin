import { WHYUSAction } from '../actions'
import { whyusGetters } from '../getters'
import { WhyusMutations } from '../mutations'

export const WhyuS = {
  namespaced: true,
  state: {
    whyuss: [],
  },
  mutations: WhyusMutations,
  getters: whyusGetters,
  actions: WHYUSAction,
}
