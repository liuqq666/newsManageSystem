import { createStore } from 'vuex'

export default createStore({
  state: {
    isFisrtToRouter:false
  },
  getters: {
  },
  mutations: {
    changeIsFisrtToRouter(state,value){
      state.isFisrtToRouter = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
