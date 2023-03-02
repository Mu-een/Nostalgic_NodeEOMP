import { createStore } from 'vuex'
import axios from 'axios';
const nostalgicAPI = "https://nostalgic-backend.onrender.com/"

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    theSpinner: null,
    asc: true,
    message: null
  },
  getters: {
  },
  mutations: {
    theUser(state, value) {
      state.user = value
    },
    theUsers(state, values) {
      state.users = values
    },
    theProduct(state, value) {
      state.product = value
    },
    theProducts(state, values){
      state.products = values
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async getProducts(context) {
      const res = await axios.get(`${nostalgicAPI}Products`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theProducts', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async getProduct(context) {
      const res = await axios.get(`${nostalgicAPI}Products`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theProduct', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async getUsers(context) {
      const res = await axios.get(`${nostalgicAPI}Users`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theUsers', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async getUser(context) {
      const res = await axios.get(`${nostalgicAPI}Users`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theUser', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async register(context, payload) {
      const res = await axios.post(`${nostalgicAPI}Users`, payload);
      let {msg ,err} =await res.data;
      if(msg){
        context.commit('setMessage',msg);
      } else {
        context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})

