<template>
    <NavbarC />
    <h3 class="display-3 text-center">Our Products</h3><br>
    <p class="text-center">Browse through our high-quality vintage products</p>
    <input type="text"  class="form-control w-25 d-flex m-auto" v-model="search" placeholder="Search for products .." /><br>
    <div class="input-group mb-3">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="All">All</a></li>
    <li><a class="dropdown-item" href="#">Premier League</a></li>
    <li><a class="dropdown-item" href="#">Serie A</a></li>
    <li><a class="dropdown-item" href="#">La Liga</a></li>
    <li><a class="dropdown-item" href="#">Bundesliga</a></li>
    <li><a class="dropdown-item" href="#">International</a></li>
  </ul>
    </div>
    <button class="form-control btn btn-dark sortBtn text-center">Sort</button><br>
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
            isLoading: true
          }
        },
        created(){
          setTimeout(()=> {
            this.isLoading = false;
          }, 2000);
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
  width: 70px;
  margin: auto;
  display: flex;
}
</style>