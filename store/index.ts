import {
  getterTree,
  mutationTree,
  actionTree,
  getAccessorType
} from 'typed-vuex';

import * as user from './user';

export const state = () => ({
  token: ''
});

export type RefundState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  token: (state) => state.token
});

export const mutations = mutationTree(state, {
  SET_TOKEN: (state, token: string) => (state.token = token)
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    setToken({ commit }, t: string) {
      commit('SET_TOKEN', t);
    }
  }
);

// console.log(user);

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }
});

export type StoreAccessorType = typeof accessorType;
