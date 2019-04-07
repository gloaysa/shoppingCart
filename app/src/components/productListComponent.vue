<template>
    <div class="app-product-list">
        <app-header title="PRODUCTOS"></app-header>
        <ul class="app-product-list-wrapper">
            <li class="app-product-list-wrapper--item" v-for="product in products">
                <app-product :product="product"></app-product>
            </li>
        </ul>
    </div>
</template>

<script>
    import ProductComponent from './productComponent.vue';
    import HeaderComponent from './HeaderComponent.vue'
    import {mapGetters} from "vuex";

    export default {
        name: 'app-product-list',
        components: {
            'app-product': ProductComponent,
            'app-header': HeaderComponent
        },
        computed: mapGetters({
            products: 'getProducts'
        })
    };
</script>

<style lang="scss">
    .app-product-list {
        width: 60%;
        &__title {
            text-align: center;
        }
        &-wrapper {
            list-style: none;

            &--item {
                border: 1px solid black;
            }

           &--item:not(:first-child) {
               margin-top: 10px;
           }
        }
    }
</style>
