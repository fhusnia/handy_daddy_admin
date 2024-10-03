import { ReviewAction } from '../actions'
import { reviewGetters } from '../getters'
import { ReviewMutations } from '../mutations'

export const Review = {
  namespaced: true,
  state: {
    reviews: [],
  },
  mutations: ReviewMutations,
  getters: reviewGetters,
  actions: ReviewAction,
}
