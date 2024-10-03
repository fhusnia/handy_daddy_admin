import { JoinAction } from '../actions'
import { joinGetters } from '../getters'
import { JOINMutations } from '../mutations'

export const Join = {
  namespaced: true,
  state: {
    joins: [],
  },
  mutations: JOINMutations,
  getters: joinGetters,
  actions: JoinAction,
}
