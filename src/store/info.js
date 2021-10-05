import firebase from 'firebase/app'

export default {
  state: {

  },
  mutations: {
  },
  actions: {
    async fetchInfo({commit}) {
      try {
        const comment = (await firebase.database().ref('/info').once('value')).val() || {}
        return {...comment}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    }
  },
  getters: {}
}