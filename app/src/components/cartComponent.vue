<template>
    <div class="app-cart">
        <app-header title="SELECCIÓN"></app-header>
        <div class="app-cart-wrapper">
            <ul class="app-cart-wrapper-list" v-if="getProductsInCart">
                <li v-for="product in getProductsInCart" class="app-cart-wrapper-list--item">
                    <app-product :show-in-cart="true" :product="product"></app-product>
                </li>
            </ul>
        </div>
        <div class="app-cart-buy">
            <app-total-counter :total-items="totalItems()" :total-price="totalPrice()"></app-total-counter>
            <button class="app-cart-buy--button" :disabled="disableBuyButton()" @click="emptyCart">COMPRAR</button>
        </div>

    </div>
</template>

<script>
    import TotalCounterComponent from './totalCounterComponent.vue'
    import ProductComponent from './productComponent.vue';
    import HeaderComponent from './HeaderComponent.vue'

    import { mapGetters } from 'vuex';

    export default {
        name: 'app-cart',
        components: {
            'app-product': ProductComponent,
            'app-total-counter': TotalCounterComponent,
            'app-header': HeaderComponent
        },
        computed: mapGetters([
            'getProductsInCart'
        ]),
        methods: {
            totalItems: function() {
                let totalItems = 0;
                this.getProductsInCart.forEach(product => {
                    totalItems = totalItems + product.quantity;
                });
                return totalItems;
            },
            totalPrice: function() {
                let totalPrice = 0;
                this.getProductsInCart.forEach(product => {
                    totalPrice = totalPrice + (product.price * product.quantity);
                });
                return totalPrice;
            },
            emptyCart: function() {
                this.$store.commit('removeProductsFromCart');
            },
            disableBuyButton: function() {
                return this.getProductsInCart.length === 0;
            }
        }
    }
</script>
<style lang="scss">
    .app-cart {
        display: flex;
        flex-direction: column;
        width: 30%;
        padding-left: 5%;

        &-wrapper {
            height: 340px;
            overflow: scroll;
            border: 1px solid black;
            &-list {
                list-style: none;
                padding: 0;
                margin: 0;

                &--item {
                    &:nth-child(odd) { background: lightgrey; }
                }
            }
        }

        &-buy {
            width: 100%;
            text-align: center;
            padding-top: 10px;

            &--button {
                font-size: 26px;
                margin: 20px 0;
                position: relative;
                border: 2px solid #34495e;
                color: #34495e;
                overflow: hidden;
                -webkit-transition: all 0.3s ease-in-out;
                -o-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;

                &:hover{
                    color: #ecf0f1;
                }
            }
        }
    }
</style>
