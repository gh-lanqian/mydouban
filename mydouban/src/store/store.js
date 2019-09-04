import Vue from "vue"
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export let store = new Vuex.Store({
  state: {
    arr: [],
    qarr: [],
    arra: []
  },
  mutations: {
    mutationfun(state, payload) {
      state.arr = payload
    },
    mutationfun1(state, payload) {
      state.qarr = payload
    },
    mutationfun2(state, payload) {
      state.arra = payload
    }
  },
  actions: {
    actionfun(storeobj) {
      axios({
        url: "/mov",
        method: "get"
      }).then(ok => {
        storeobj.commit("mutationfun", ok.data)
      });
    },
    actionfun1(storeobj) {
      axios({
        url: "/book",
        method: "get"
      }).then(ok => {
        storeobj.commit("mutationfun1", ok.data)
      });
    },
    actionfun2(storeobj) {
      axios({
        url: "/shouye",
        method: "get"
      }).then(ok => {
        storeobj.commit("mutationfun2", ok.data)
      });
    }
  }
})
