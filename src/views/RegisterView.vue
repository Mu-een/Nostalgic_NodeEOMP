<template>
    <NavbarC />
    <div class="container-fluid">
        <div class="row register">
            <img src="https://i.postimg.cc/JhQmWfWn/nostalgic-logo-removebg-preview.png"  alt="">
            <h3 class="text-center">BECOME A NOSTALGIC MEMBER</h3>
            <p class="text-center">Create your Nostalgic member profile and get access to the best of Nostalgic products</p>
        </div>
        <form class="form">
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="First Name" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Last Name" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Gender" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Cellphone Number" >
            </div>
            <div class="mb-3">
                <input type="email" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Email" >
            </div>
            <div class="mb-3">
                <input type="password" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Password" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Profile URL" >
            </div>
            <div class="mb-3">
                <input type="date" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Date Joined" >
            </div>
            <div class="text-center">
                <button type="submit" class="btn w-10 btn-lg ">Register</button>
            </div>
            <div>
                <label class="form-control" v-show="userMessage"></label>
            </div>
        </form>
    </div>
    <FooterC/>
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import FooterC from '../components/FooterC.vue'
// import {computed} from '@vue/runtime-core'; 
// import { useStore  } from 'vuex';
    export default {
        name: 'RegisterView',
        components : {
            NavbarC,
            FooterC
        }
    }
    
</script>

<style scoped>
img {
  width: auto;
  height: 30vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
.register {
    color: #fcd900;
    text-shadow: 1.5px 1.5px 1.5px black;
}
.btn {
    color: black;
}
.btn:hover {
    color: #fcd900;
    background-color: black;
}
</style>