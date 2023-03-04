<template>
    <NavbarC />
    <h3 class="text-center display-3">Users</h3>
    <AddUser/><br>
  <SpinnerC v-if="isLoading"/>
  <div class="container-fluid table-responsive" v-else>
      <!-- Users table -->
      <table class="table table-hover table-light table-borderless" >
    <thead>
      <tr class="text-center">
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Cellphone Number</th>
        <th scope="col">Email Address</th>
        <!-- <th scope="col">Password</th> -->
        <th scope="col">Role</th>
        <th scope="col">Profile</th>
        <th scope="col">Date Joined</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="user in users" :key="user">
        <th scope="row">{{ user.userID }}</th>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.cellPhone }}</td>
        <td>{{ user.email }}</td>
        <!-- <td>{{ user.userPassword }}</td> -->
        <td>{{ user.userRole }}</td>
        <td><img :src="user.userImg" alt="" class="img-fluid"></td>
        <td>{{ user.joinDate }}</td>
        <td><UpdateUser/></td>
        <td><button><i class="bi bi-trash3"></i></button></td>
      </tr>
    </tbody>
  </table><br>
  </div>

<!-- Products table -->
<h3 class="display-3 text-center">Products</h3>
<AddProduct/><br>
<SpinnerC v-if="isLoading"/>
<div class="container-fluid table-responsive" v-else>
  <table class="table table-hover table-light table-borderless" >
    <thead>
        <tr class="text-center" >
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
    </thead>
    <tbody class="text-center">
        <tr v-for="product in products" :key="product">
            <th scope="row">{{ product.productID }}</th>
            <td>{{ product.productName }}</td>
            <td>{{ product.productDescription }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.price }}</td>
            <td><img :src="product.productImg" alt="" class="img-fluid"></td>
            <td>{{ product.quantity }}</td>
            <td><UpdateProduct/></td>
            <td><button><i class="bi bi-trash3"></i></button></td>
        </tr>
    </tbody>
</table>
</div>

    <FooterC/>
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import SpinnerC from '../components/SpinnerC.vue'
import AddUser from '../components/AddUser.vue'
import AddProduct from '../components/AddProduct.vue'
import UpdateUser from '../components/UpdateUser.vue'
import UpdateProduct from '../components/UpdateProduct.vue'
import FooterC from '../components/FooterC.vue'

import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'
    export default {
        name: 'AdminView',
        components : {
            NavbarC,
            SpinnerC,
            AddUser,
            AddProduct,
            UpdateUser,
            UpdateProduct,
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
        },
        setup() {
        const store = useStore()
        store.dispatch("getProducts")
        store.dispatch("getUsers")
        const products = computed(() => store.state.products)
        const users = computed(()=> store.state.users)
        return {
            products,
            users
        }
      }
    }
</script>

<style scoped>
img {
    width: 20vh;
    height: auto;
    border-radius: 30px;
}
.table {
  margin-bottom: 200px;
}
@media screen and(max-width: 720px) and (min-width: 300px) {
  .table {
    display: block;
    width: 100%;
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 700px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  th {
    text-align: left;
  }
  tbody td:before {
    float: left;
    font-weight: bold;
  }
}
</style>