<template>
    <NavbarC />
    <h3 class="display-3 text-center">Our Products</h3>
    <div class="input-group mb-3">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Premier League</a></li>
    <li><a class="dropdown-item" href="#">Serie A</a></li>
    <li><a class="dropdown-item" href="#">La Liga</a></li>
    <li><a class="dropdown-item" href="#">Bundasliga</a></li>
    <li><a class="dropdown-item" href="#">International</a></li>
  </ul>
    </div>
    <div class="input-group mb-3">
        <button class="btn btn-outline-dark dropdown-toggle button2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Ascending</a></li>
            <li><a class="dropdown-item" href="#">Descending</a></li>
        </ul>
    </div>
    <FooterC/>
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import FooterC from '../components/FooterC.vue'
    export default {
        name: 'ProductsView',
        components : {
            NavbarC,
            FooterC
        }
    }
</script>

<style scoped>
button {
    text-align: center;
    display: inline-block;
    margin: auto;
}
</style>