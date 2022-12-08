import Vue from 'vue'
import Vuex from 'vuex'
import { IState } from './IState'

import module1 from './modules/module1'

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
    module1,
  }
})
