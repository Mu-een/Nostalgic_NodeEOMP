<template>
  <NavbarC />
<img src="https://i.postimg.cc/JhQmWfWn/nostalgic-logo-removebg-preview.png" alt="">
<h3>Sportswear for Winners</h3>
<FooterC />

</template>

<script>
import NavbarC from '../components/NavbarC'
import FooterC from '../components/FooterC.vue'
export default {
  name: 'HomeView',
  components: {
    NavbarC,
    FooterC
  }
}
</script>

<style scoped>
img {
  width: auto;
  height: 60vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}

h3 {
  color: #FCD900;
  text-shadow:  1.5px 1.5px 1.5px black;
  font-family: monospace;
  text-align: center;
}
</style>