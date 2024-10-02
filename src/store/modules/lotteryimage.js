import { LotteryImageAction } from "../actions";
import { lotteryImageGetters } from "../getters";
import { LOTTERYIMAGEMutations } from "../mutations";

export const LotteryImage = {
  namespaced: true,
  state: {
    lotteryimages: [],
  },
  mutations: LOTTERYIMAGEMutations,
  getters: lotteryImageGetters,
  actions: LotteryImageAction,
};
