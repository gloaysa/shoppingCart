<template>
    <div id="app">
        <div class="app-main">
            <app-product-list></app-product-list>
            <app-cart></app-cart>
        </div>
    </div>
</template>

<script>
    import ProductListComponent from './components/productListComponent.vue';
    import CartComponent from './components/cartComponent.vue';
    import ProductsService from "./services/ProductsService";

    export default {
        components: {
          'app-product-list': ProductListComponent,
          'app-cart': CartComponent
        },
        mounted() {
            ProductsService.getProducts(products => {
                this.$store.commit('addProducts', products);
            },
            error => {
                console.log('Aquí llamaría algún servicio para enseñar un mensaje de error', error);
            });

            this.scroll();
        },
        methods: {
            scroll () {
                window.onscroll = () => {
                    let bottomOfWindow = Math.max(
                        window.pageYOffset,
                        document.documentElement.scrollTop,
                        document.body.scrollTop
                        ) +
                        window.innerHeight === document.documentElement.offsetHeight;

                    if (bottomOfWindow) {
                        ProductsService.loadMoreProducts(products => {
                            this.$store.commit('addProducts', products);
                        })
                    }
                }
            }
        }
    };
</script>

<style lang="scss">
    .app-main {
        display: inline-flex;
        width: 100%;
        padding: 10px;
    }
</style>
