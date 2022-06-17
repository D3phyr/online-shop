<template>
<div class="v-main-page">
    <v-catalog />
    <v-cart
    v-if="CART.length" 
    :cart_data="CART"
    />
</div>
</template>

<script>
import vCatalog from "./v-catalog.vue"
import vCart from "./v-cart.vue"
import {
    mapGetters
} from 'vuex'

export default {
    name: "v-main-page",
    components: {
        vCatalog,
        vCart
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },

}
</script>

<style lang="scss">
.v-main-page {
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
</style>
