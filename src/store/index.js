import { createStore } from 'vuex'
import axios from 'axios';
const nostalgicAPI = "";

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    theSpinner: null,
    message: null
  },
  getters: {
  },
  mutations: {
    theUser(state, value) {
      state.user = value
    },
    theUsers(state,values) {
      state.users = values
    },
    theProduct(state,value) {
      state.product = value
    },
    theProducts(state,values){
      state.products = values
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    theMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${nostalgicAPI}login`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('theUser', result);
      } else {
        context.commit('theMessage',err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${nostalgicAPI}register`, payload);
      let {message, err} = await res.data;
      if(message) {
        context.commit('theMessage',message);
      } else {
        context.commit('theMessage', err);
      }
    },
    async getProduct(context, id) {
      let res = await axios.get(`${nostalgicAPI}getProduct` + id);
      let {result, err} = await res.data;
      if(result){
        context.commit('theUser', result);
      } else {
        context.commit('theMessage', err);
      }
    }
  },
  modules: {
  }
})
