import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  
  state: {
    searchQuery: '',
  },

  mutations: {
    SET_SEARCH_QUERY(state, payload) {
      state.searchQuery = payload
    }
  },

  actions: {
    setSearchQuery({commit}, payload) {
      commit('SET_SEARCH_QUERY', payload)
    }
  },

  getters: {
    searchQuery: state => state.searchQuery
  }
})

export default store
