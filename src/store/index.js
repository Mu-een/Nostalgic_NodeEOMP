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
    sortProductsPrice: (state) => {
      state.properties.sort((a, b)=>{
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async getProducts(context, payload) {
      const res = await axios.get(`${nostalgicAPI}Products`,payload);
      const {result, err} = await res.data;
      if(result){
        context.commit('theProducts',result);
      } else {
        context.commit('setMessage',err);
      }
    }
  },
  modules: {
  }
})

