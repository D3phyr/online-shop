<template>
<div class="v-cart">
    <h1>Cart</h1>
    <v-cart-item
    v-for="(item, index) in cart_data"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    />
</div>
</template>

<script>
import vCartItem from "./v-cart-item.vue"
import {mapActions} from 'vuex'

export default {
    name: "v-cart",
    components: {
        vCartItem
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }
    },
    props:{
        cart_data:{
            type:Array,
            default(){
                return[]
            }
        }
    }

}
</script>

<style lang="scss">
.v-cart {

}
</style>
