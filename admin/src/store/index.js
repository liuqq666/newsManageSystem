import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isFisrtToRouter:false,
    isCollapsed:false
  },
  getters: {
  },
  mutations: {
    changeIsFisrtToRouter(state,value){
      state.isFisrtToRouter = value;
    },
    changeCollapsed(state){
      state.isCollapsed = !state.isCollapsed;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['isCollapsed']
  })],
})
