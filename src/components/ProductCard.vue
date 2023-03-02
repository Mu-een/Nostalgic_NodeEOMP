<template>
    <div class="container">
        <div class="row" style="gap: 10rem; justify-content: center;" >
        <div class="card" v-for="product in products" :key="product" style="width: 18rem;">
            <img :src="product.productImg" class="card-img-top mt-2" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ product.productName }}</h5>
                <p class="card-text">{{ product.productDescription }}</p>
                <p class="card-text">Price: R{{ product.price }}</p>
                <a href="#" class="btn btn-primary">Product Details</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'

export default {
    components: {
       
    },
    setup() {
        const store = useStore()
        store.dispatch("getProducts")
        const products = computed(() => store.state.products)
        return {
            products
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 8px;
}

.card { 
    border-radius: 20px;
    box-shadow: 3px -3px 3px 3px #fcd900;
}
</style>