import { FaqAction } from "../actions";
import { faqGetters } from "../getters";
import { FaqMutations } from "../mutations";

export const Faq = {
  namespaced: true,
  state: {
    faqs: [],
  },
  mutations: FaqMutations,
  getters: faqGetters,
  actions: FaqAction,
};
