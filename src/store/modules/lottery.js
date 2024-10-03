import { LotteryAction } from '../actions'
import { lotteryGetters } from '../getters'
import { LOTTERYMutations } from '../mutations'

export const Lottery = {
  namespaced: true,
  state: {
    lotteries: [],
  },
  mutations: LOTTERYMutations,
  getters: lotteryGetters,
  actions: LotteryAction,
}
