import { AuthService } from '../actions'
import { Logingetters } from '../getters'
import { Loginmutations } from '../mutations'

export const Login = {
  namespaced: true,
  state: {
    token: null,
    fullName: null,
    username: null,
    isAuthenticated: false,
  },
  mutations: Loginmutations,
  getters: Logingetters,
  actions: AuthService,
}
