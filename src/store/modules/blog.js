import { BlogMutations } from '../mutations'
import { blogGetters } from '../getters'
import { BlogAction } from '../actions'

export const Blog = {
  namespaced: true,
  state: {
    blogs: [],
  },
  mutations: BlogMutations,
  getters: blogGetters,
  actions: BlogAction,
}
