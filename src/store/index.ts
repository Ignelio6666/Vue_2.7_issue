import Vue from 'vue'
import Vuex from 'vuex'
import { IState } from './IState'

Vue.use(Vuex)

const state: IState = {
  foo: 15,
};

export default new Vuex.Store({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
