<template>
    <div class="app-product" :class="{'app-product-cart': showInCart}">
        <img class="app-product__image" v-show="!showInCart" :src="product.image" :alt="product.title">
        <div class="app-product-wrapper"
        :class="{
        'app-product-wrapper-normal': !showInCart,
        'app-product-wrapper-cart': showInCart}">
            <p :class="{'app-product-wrapper-normal--title': !showInCart}">{{product.title}}</p>
            <p class="app-product-wrapper--description" v-show="!showInCart">{{product.description}}</p>
        </div>

        <div class="app-product-info" :class="{
        'app-product-info-normal': !showInCart,
        'app-product-info-cart': showInCart}">
            <p :class="{'app-product-info-normal--price': !showInCart, 'app-product-info-cart--price': showInCart}">${{product.price}}</p>
            <app-counter :show-in-cart="showInCart" :product="product"></app-counter>
        </div>

        <div class="app-product-buttons">
            <div class="app-product-buttons app-product-buttons--add">
                <a class="fas fa-plus-circle" @click="addToCart" v-show="!showInCart"></a>
            </div>
            <div class="app-product-buttons app-product-buttons--remove">
                <a class="far fa-trash-alt" @click="removeFromCart" v-show="showInCart"></a>
            </div>
        </div>
    </div>
</template>

<script>
    import CounterComponent from './counterComponent.vue';

    export default {
        name: 'app-product',
        components: {
            'app-counter': CounterComponent
        },
        props: {
            product: Object,
            showInCart: Boolean
        },
        methods: {
            addToCart: function() {
                this.$store.commit('addProductToCart', this.product);
            },
            removeFromCart: function() {
                this.$store.commit('removeProductFromCart', this.product);
            }
        }
    };
</script>

<style lang="scss">
    .app-product {
        display: flex;
        width: 100%;

        &-cart {
            align-items: center;
        }

        &__image {
            max-height: 100px;
        }

        &-wrapper {
            &-normal {
                height: 70px;
                padding: 10px;
                width: 80%;

                &--title {
                    font-weight: bold;
                }
            }

            &-cart {
                height: 70px;
                width: 50%;
                margin-left: 10px;
            }
        }

        &-buttons {
            font-size: 40px;
            cursor: pointer;
            position: relative;

            &--add {
                background-color: white;
                position: absolute;
                right: -20px;
                top: -20px;
            }
        }

        &-info {
            &-normal {
                width: 10%;
                margin-right: 30px;
                &--price {
                    font-size: 20px;
                    height: auto;
                    width: auto;
                    background-color: lightgrey;
                    border-radius: 50%;
                    border: 1px solid black;
                }
            }

            &-cart {
                display: inline-flex;
                flex-direction: row-reverse;
                width: 30%;
                margin-right: 20px;

                &--price {
                    margin-left: 20px;
                }
            }
        }

    }
</style>
