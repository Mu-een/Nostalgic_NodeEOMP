<template>
    <NavbarC />
    <h3 class="display-3 text-center">Our Products</h3>
    <input type="text"  class="form-control w-25" v-model="search" placeholder="Search for products .." />
    <div class="input-group mb-3">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="All">All</a></li>
    <li><a class="dropdown-item" href="#">Premier League</a></li>
    <li><a class="dropdown-item" href="#">Serie A</a></li>
    <li><a class="dropdown-item" href="#">La Liga</a></li>
    <li><a class="dropdown-item" href="#">Bundasliga</a></li>
    <li><a class="dropdown-item" href="#">International</a></li>
  </ul>
    </div>
    <button @click="priceSort">Sort : Price</button>

    <div class="card" v-for="product in products" :key="product" style="width: 18rem;">
  <img :src=product.productImg class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{ product.productName }}</h5>
    <p class="card-text">{{ product.price }}</p>
  </div>
</div>
    <FooterC/>
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import FooterC from '../components/FooterC.vue'

import {computed} from '@vue/runtime-core'; 
import { useStore  } from 'vuex';

    export default {
        name: 'ProductsView',
        components : {
            NavbarC,
            FooterC
        },
        setup(){
            const payload = {
                productImg: '',
                productName: '',
                price: ''
            };
            const store = useStore();
            const fetchProducts = ()=> {
                store.dispatch("getProducts",payload);
            }
            const userMessage = 
            computed( ()=>store.state.message )
            return {
                payload,
                userMessage,
                fetchProducts
            }
        },
        // data(){
        //     return {
        //         search: "",
        //         area: "All"
        //     }
        // },
        // computed: {
        //     products(){
        //         return this.$store.state.products?.filter((product) => {
        //             let searchMatch = true;
        //             if (!product.productName.toLowerCase().includes(this.search.toLowerCase())) {
        //                 searchMatch = false;
        //             }
        //             if (this.area !== "All" && this.area !== product.area) {
        //                 searchMatch = false;
        //             }
        //             return searchMatch;
        //         });
        //     }
        // },
        // methods: {
        //     priceSort(){
        //         this.$store.commit("sortProductsPrice")
        //     }
        // },
    }
</script>

<style scoped>
button {
    text-align: center;
    display: inline-block;
    margin: auto;
}
</style>