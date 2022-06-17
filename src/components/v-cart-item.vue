<template>
<div class="v-cart-item">
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="">
    <div class="v-cart-item__info">
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}}</p>
        <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
        <p>Quantity:</p>
        {{cart_item_data.quantity}}
    </div>
    <button @click="deleteFromCart">Delete</button>
</div>
</template>

<script>
export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    mounted() {

    },
    methods: {
        deleteFromCart(){
            this.$emit('deleteFromCart')
        }
    },
}
</script>

<style lang="scss">
.v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 6px 0 rgb(81, 81, 81);
    padding: $padding*2;
    margin-bottom: $margin*2;

    &__image {
        max-width: 50px;
    }
}
</style>
