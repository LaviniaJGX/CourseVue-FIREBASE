import Vue from "vue";
import Vuex from "vuex"
import mutations from "./Mutation"
import actions from "./Action"
Vue.use(Vuex)

function isLogin() {
  let token = window.localStorage.getItem("jwt");
  return JSON.parse(token) || false
}

const store = new Vuex.Store({
  state: {
    token: isLogin()
  },
  mutations,
  actions
})
export default store
