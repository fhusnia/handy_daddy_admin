import { HomeWhyUsAction } from "../actions";
import { homewhyusGetters } from "../getters";
import { HOMEWHYUSMutations } from "../mutations";

export const HomeWhyUS = {
  namespaced: true,
  state: {
    homewhyuss: [],
  },
  mutations: HOMEWHYUSMutations,
  getters: homewhyusGetters,
  actions: HomeWhyUsAction,
};
