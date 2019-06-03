import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null
  },
  getters: {
    loggedIn(state) {
      return state.token;
    }
  },
  mutations: {
    retrieveToken(state, _token) {
      state.token = _token;
    },
    destroyToken(state){
      state.token=null;
    },
    registerToken(state,_token){
      state.token=_token;
    }
  },
  actions: {
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, rejects) => {
          axios
            .post("/logout",{token:"okman"})
            .then(res => {
              localStorage.removeItem("access_token");
              context.commit("destroyToken");
              resolve(res);
            })
            .catch(err => {
              localStorage.removeItem("access_token");
              context.commit("destroyToken");
              rejects(err);
            })
        });
      }
    },
    retrieveToken({ commit }, credentials) {
      return new Promise((resolve, rejects) => {
        axios
          .post("/login", credentials)
          .then(res => {
            let token = res.data.token;
            axios.defaults.headers.common['Authorization']="bearer "+token;
            localStorage.setItem("access_token", token);
            commit("retrieveToken", token);
            resolve(res);
          })
          .catch(err => rejects(err));
      });
    },
    registerToken({commit},data){
      let username=data.username;
      let password=data.password;
      let newUser={username:username,password:password}
      return new Promise((resolve,reject)=>{
      axios.post(("/register"),newUser).then((res) => {
        let token=res.data.token;
        axios.defaults.headers.common['Authorization']="bearer "+token;
        localStorage.setItem("access_token",token)
        commit("registerToken",token)
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    })
  }}
});
