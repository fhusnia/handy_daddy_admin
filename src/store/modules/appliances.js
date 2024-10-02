import { appliancesMutations } from "../mutations";
import { appliancesActions } from "../actions";
import { applianceGetters } from "../getters";

export const Appliances = {
  namespaced: true,
  state: {
    appliances: [],
  },
  mutations: appliancesMutations,
  getters: applianceGetters,
  actions: appliancesActions,
};
