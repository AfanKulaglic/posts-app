import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:""
  },
  getters: {
  },
  mutations: {
    login(state,username) {
      state.username = username;
      localStorage.setItem('username',username)
      if (username === 'admin' || username === 'user') {
        alert(`logged in as ${username}`)
        window.location.assign(`/main/${state.username}`)
      }else {
        alert ('logged in incorrectly')
      }
    },
    logout(state) {
      state.username = '';
      localStorage.removeItem('username')
      alert('logged out')
      window.location.assign('/')
    },
    initializeStore(state) {
      if(localStorage.getItem('username')) {
        state.username = localStorage.getItem('username')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
