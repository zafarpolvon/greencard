import Vue from 'vue'
import Vuex from 'vuex'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'ru-RU'
  },
  mutations: {
    changeLocale(state, locale) {
      state.locale = locale
    },
  },
  actions: {
  },
  modules: {
    info
  },
  getters: {
    locale: state => {
      return state.locale
    },
  }
})
