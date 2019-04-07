<template>
    <div class="app-counter">
        <div class="app-counter-arrow app-counter-arrow-normal app-counter-arrow-normal__left"
             v-if="!showInCart"
             @click="decreaseQuantity(product)">
        </div>

        <div class="app-counter-arrow app-counter-arrow-cart app-counter-arrow-cart__bottom"
             v-if="showInCart"
             @click="increaseQuantity(product)">
        </div>

        <div class="app-counter-number">{{product.quantity}}</div>

        <div class="app-counter-arrow app-counter-arrow-normal app-counter-arrow-normal__right"
             v-if="!showInCart"
             @click="increaseQuantity(product)">
        </div>

        <div class="app-counter-arrow app-counter-arrow-cart app-counter-arrow-cart__top"
             v-if="showInCart"
             @click="decreaseQuantity(product)">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-counter',
        props: {
            product: Object,
            showInCart: Boolean
        },
        methods: {
            increaseQuantity: function () {
                this.$store.commit('increaseQuantity', this.product);

            },
            decreaseQuantity: function () {
                this.$store.commit('decreaseQuantity', this.product);
            }
        }

    };
</script>

<style lang="scss">
    .app-counter {
        &-arrow {
            width: 0;
            height: 0;
            cursor: pointer;

            &-normal {
                display: inline-block;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                &__left {
                    border-right:10px solid black;
                }
                &__right {
                    border-left: 10px solid black;
                }
            }
            &-cart {
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                &__bottom {
                    border-bottom:10px solid black;
                }
                &__top {
                    border-top:10px solid black;
                }

            }
        }
        &-number {
            display: inline-block;
            font-size: 25px;
        }
    }
</style>
