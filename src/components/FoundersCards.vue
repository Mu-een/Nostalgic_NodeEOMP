<template>
     <div class="theFounders">
        <div v-for="items in Founders" :key="items" class="card" style="width: 18rem;">
      <img :src= "items.image"  class="card-img-top mx-auto mt-5 image" style="width: 15rem;" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">{{ items.name }}</h5>
        <p class="card-text">{{ items.position }}</p>
        <a :href="items.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
       name:  'FoundersCards',
    data() {
        return {
            Founders: [
                {
                    image:"https://i.postimg.cc/wxPFzWK2/DSC-3547.jpg",
                    name: "Mu-een Slamat",
                    position: "Co-Founder",
                    linkedin: "https://www.linkedin.com/in/mueenslamat/"
                },
                {
                    image: "https://i.postimg.cc/bJJWT6cS/C11-Mogamad-Bernksen-3.jpg",
                    name: "Imraan Bernksen",
                    position: "Co-Founder",
                    linkedin: "https://www.linkedin.com/in/imraanbernksen/"
                }
            ]
        }
    }
    }
</script>

<style scoped>
.theFounders {
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
    font-family: monospace;
}

.card {
    box-shadow: 5px 5px 6px #fcd900;
}
.card:hover {
    box-shadow: 5px 5px 6px black;
}
img {
    border-radius: 20px;
}
a {
    font-size: 35px;
}
a:hover {
    color: #fcd900;
}
</style>