<template>
    <nav class="navbar navbar-expand-lg bg-body-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item login">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="nav-item register">
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'NavbarC'
    }
</script>

<style scoped>
nav {
    font-family: monospace;
}
a {
    text-decoration: none;
    color: #FCD900;
    font-size: 20px;
    margin: 20px;
}
a:hover {
    color: #FCD900;
    background-color: black;
    border-radius: 5px;
}
a.router-link-active {
  background-color: black;
  color: #FCD900;
  border-radius: 5px;
}


nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 20px;
}

</style>