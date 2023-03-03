<template>
    <NavbarC />
    <h3 class="display-3 text-center">Our Products</h3><br>
    <p class="text-center">Browse through our high-quality vintage products</p>

    <div>
      <input type="text"  class="form-control w-25 d-flex m-auto" v-model="searching" placeholder=" Search team .." /><br>
    </div>

    <!-- <div class="input-group mb-3">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="All">All</a></li>
    <li><a class="dropdown-item" href="#">Premier League</a></li>
    <li><a class="dropdown-item" href="#">Serie A</a></li>
    <li><a class="dropdown-item" href="#">La Liga</a></li>
    <li><a class="dropdown-item" href="#">Bundesliga</a></li>
    <li><a class="dropdown-item" href="#">International</a></li>
  </ul>
    </div> -->

    <div class="text-center">
      <select v-model="area">
        <option value="">All</option>
        <option value="">Premier League</option>
        <option value="">Serie A</option>
        <option value="">La Liga</option>
        <option value="">Bundesliga</option>
        <option value="">International</option>
      </select>
    </div><br>

    <button class="form-control btn btn-dark sortBtn text-center m-auto d-flex" @click="sortbyPrice">Price<i class="bi bi-arrow-down-up"></i></button><br>
      <SpinnerC v-if="isLoading"/>
      <div v-else>
        <ProductCard/>
      </div>
    <FooterC/>
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import SpinnerC from '../components/SpinnerC.vue'
import ProductCard from '../components/ProductCard.vue'
import FooterC from '../components/FooterC.vue'
import axios from 'axios'

    export default {
        name: 'ProductsView',
        components : {
            NavbarC,
            SpinnerC,
            ProductCard,
            FooterC
        },
        data(){
          return {
            isLoading: true,
            searching: ""
          }
        },
        mounted(){
          axios.get("https://nostalgic-backend.onrender.com/Products")
          .then(response => {
            this.products = response.data
          })
          .catch(error => {
            console.log(error)
          })
        },
        created(){
          setTimeout(()=> {
            this.isLoading = false;
          }, 2000);
        },
        methods: {
          sortbyPrice(){
            this.$store.commit("sortProductsByPrice");
          }
        },
        computed: {
          sorting() {
            if(this.searching.trim().length > 0) {
              return this.products.filter((input)=> input.productName.toLowerCase().includes(this.searching.trim()
              .toLocaleLowerCase()))
            }
            return this.products
          }
        }
    }
</script>

<style scoped>
button {
    text-align: center;
    display: inline-block;
    margin: auto;
}
.sortBtn {
  width: 75px;
}
</style>