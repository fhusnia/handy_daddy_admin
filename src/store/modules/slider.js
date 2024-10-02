import { SliderImageAction } from "../actions";
import { SliderImageGetters } from "../getters";
import { SliderImageMutations } from "../mutations";

export const SliderImage = {
  namespaced: true,
  state: {
    sliderimages: [],
  },
  mutations: SliderImageMutations,
  getters: SliderImageGetters,
  actions: SliderImageAction,
};
