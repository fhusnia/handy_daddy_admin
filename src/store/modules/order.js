import { ORDERAction } from "../actions";
import { orderGetters } from "../getters";
import { OrderMutations } from "../mutations";

export const Order = {
  namespaced: true,
  state: {
    orders: [],
  },
  mutations: OrderMutations,
  getters: orderGetters,
  actions: ORDERAction,
};
