<template>
<div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} P</p>
    <button class="v-catalog-item__btn" @click="addToCart">Add to card</button>
</div>
</template>

<script>
export default {
    name: "v-catalog-item",
    components: {},
    props: {
        product_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        addToCart(){
            this.$emit('addToCart',this.product_data)
        }
    },
    watch: {},
    mounted() {},
};
</script>

<style lang="scss">
.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 6px 0 rgb(81, 81, 81);
    padding: $padding*2;
    margin-bottom: $margin*2;
    .v-catalog-item__image{
        width: 100px;
    }
}
</style>
