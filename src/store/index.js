import Vue from 'vue'
import Vuex from 'vuex'
import { sortedIndexBy } from 'lodash'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  
  state: {
    nextId: 0,
    searchQuery: '',
    contacts: [],
    showContactCreateDialog: false,
    showContactUpdateDialog: false,
    currentEditingContact: {}
  },

  mutations: {
    SET_SEARCH_QUERY(state, payload) {
      state.searchQuery = payload
    },
    ADD_CONTACT(state, payload) {
      const r = Math.floor(Math.random() * 148) + 48
      const g = Math.floor(Math.random() * 148) + 48
      const b = Math.floor(Math.random() * 148) + 48

      const newItem = {
        ...payload,
        id: state.nextId++,
        createdAt: new Date(), 
        isActive: true,
        color: `rgb(${r}, ${g}, ${b})`
      }

      console.log(sortedIndexBy(state.contacts, newItem, 'name'))

      state.contacts.splice( sortedIndexBy(state.contacts, newItem, 'name'), 0, newItem )
    },

    REMOVE_CONTACT(state, id) {
      const idx = state.contacts.findIndex(c => c.id === id)
      state.contacts.splice(idx, 1)
    },

    EDIT_CONTACT(state, item) {
      const idx = state.contacts.findIndex(c => c.id === item.id)
      state.contacts.splice(idx, 1, { ...item, isActive: false })
    },

    SET_SHOW_CONTACT_CREATE_DIALOG (state, payload) {
      state.showContactCreateDialog = payload
    },

    SET_SHOW_CONTACT_UPDATE_DIALOG (state, payload) {
      state.showContactUpdateDialog = payload
    },

    OPEN_CONTACT_UPDATE_DIALOG (state, payload) {
      state.showContactUpdateDialog = true
      state.currentEditingContact = {...payload}
    },
  },

  actions: {
    setSearchQuery({commit}, payload) {
      commit('SET_SEARCH_QUERY', payload)
    },

    addContact({commit, state}, payload) {
      commit('ADD_CONTACT', payload)
      return state.nextId
    },

    removeContact({commit}, id) {
      commit('REMOVE_CONTACT', id)
    },
    
    editContact({commit}, payload) {
      commit('EDIT_CONTACT', payload)
    },
    
    setShowContactCreateDialog({commit}, payload) {
      commit('SET_SHOW_CONTACT_CREATE_DIALOG', payload)
    },
    
    setShowContactUpdateDialog({commit}, payload) {
      commit('SET_SHOW_CONTACT_UPDATE_DIALOG', payload)
    },

    openContactUpdateDialog({commit}, payload) {
      commit('OPEN_CONTACT_UPDATE_DIALOG', payload)
    }
  },

  getters: {
    searchQuery: state => state.searchQuery,

    contacts: state => state.contacts.filter(c => {
      if (state.searchQuery) {
        return c.name.toUpperCase().includes(state.searchQuery.toUpperCase())
      }
      return true
    }),

    hasContacts: state => {
      if (state.contacts) {
        return !!state.contacts.length
      }
      return false
    }
  }
})

export default store
