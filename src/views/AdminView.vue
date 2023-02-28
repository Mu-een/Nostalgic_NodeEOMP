<template>
    <NavbarC />
    <h3 class="text-center display-3">Users</h3>
    <AddUser/><br>
    <table class="table table-hover table-light table-borderless">
  <thead>
    <tr class="text-center">
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Cellphone Number</th>
      <th scope="col">Email Address</th>
      <th scope="col">Password</th>
      <th scope="col">Role</th>
      <th scope="col">Profile</th>
      <th scope="col">Date Joined</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr>
      <th scope="row">1</th>
      <td>Imraan</td>
      <td>Bernksen</td>
      <td>Male</td>
      <td>021 414 8931</td>
      <td>imraan@gmail.com</td>
      <td>dofehf oohfhfoq</td>
      <td>Admin</td>
      <td><img src="https://i.postimg.cc/vHstDD78/1991-1993arsenal-Away.webp" alt="" class="img-fluid"></td>
      <td>28/02/2023</td>
      <td><UpdateUser/></td>
      <td><button><i class="bi bi-trash3"></i></button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mu-een</td>
      <td>Slamat</td>
      <td>Male</td>
      <td>039 491 1921</td>
      <td>mueen@gmail.com</td>
      <td>sdafno dsnfiods</td>
      <td>Admin</td>
      <td><img src="https://i.postimg.cc/vHstDD78/1991-1993arsenal-Away.webp" alt="" class="img-fluid"></td>
      <td>26/02/2023</td>
      <td><UpdateUser/></td>
      <td><button><i class="bi bi-trash3"></i></button></td>
    </tr>
  </tbody>
</table><br>

<h3 class="display-3 text-center">Products</h3>
<AddProduct/><br>
<table class="table table-hover table-light table-borderless">
    <thead>
        <tr class="text-center">
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
        <tr>
            <th scope="row">1</th>
            <td>Arsenal Away Shirt</td>
            <td>Retro Kit (1992/93)</td>
            <td>Premier League</td>
            <td>795.00</td>
            <td><img src="https://i.postimg.cc/vHstDD78/1991-1993arsenal-Away.webp" alt="" class="img-fluid"></td>
            <td>10</td>
            <td><UpdateProduct/></td>
            <td><button><i class="bi bi-trash3"></i></button></td>
        </tr>
    </tbody>
</table>
    <FooterC/>
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import AddUser from '../components/AddUser.vue'
import AddProduct from '../components/AddProduct.vue'
import UpdateUser from '../components/UpdateUser.vue'
import UpdateProduct from '../components/UpdateProduct.vue'
import FooterC from '../components/FooterC.vue'
    export default {
        name: 'AdminView',
        components : {
            NavbarC,
            AddUser,
            AddProduct,
            UpdateUser,
            UpdateProduct,
            FooterC
        }
    }
</script>

<style scoped>
img {
    width: 20vh;
    height: auto;
    border-radius: 30px;
}
</style>