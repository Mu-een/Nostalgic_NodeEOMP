<template>
     <div class="theFounders">
        <div v-for="items in Founders" :key="items" class="card" style="width: 18rem;">
      <img :src= "items.image"  class="card-img-top mx-auto mt-5 image" style="width: 15rem;" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">{{ items.name }}</h5>
        <p class="card-text">{{ items.position }}</p>
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
                    image:"",
                    name: "Mu-een Slamat",
                    position: "Co-Founder",
                },
                {
                    image: "",
                    name: "Imraan Bernksen",
                    position: "Co-Founder",
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
</style>