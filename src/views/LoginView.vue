<template>
    <NavbarC />
    <img src="https://i.postimg.cc/JhQmWfWn/nostalgic-logo-removebg-preview.png" alt="">
    <div class="container text-center">
        <h3 class="display-3">Login</h3>
        <p>Welcome back!</p> 
        <p>Login to access Nostalgic</p>
        <form action="" class="login">
            <input type="text" class="form-control" placeholder="email"><br>
            <input type="text" class="form-control" placeholder="password"><br>
            <button type="button" class="btn btn-lg">Continue</button>
        </form>
    </div>
    <FooterC/>
</template>

<script>
import NavbarC from '../components/NavbarC.vue'
import FooterC from '../components/FooterC.vue'
    export default {
        name: 'LoginView',
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
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 30px; */
  display: block;
}
.container {
    font-family: monospace;
    margin-top: 25px;
    border-radius: 30px;
    border: 3px solid black;
    box-shadow: 5px 5px 6px black;
    width: 500px;
    height: 380px;
    /* display: inline-block; */
}

.container input{
    display: block;
    text-align: center;
    margin: auto;
}
.form-control {
    box-shadow: 2px 2px 2px 3px #fcd900;
}
h3 ,p{
    color: black;
}
.btn {
    color: black;
}
.btn:hover {
    color: #fcd900;
    background-color: black;
}
</style>